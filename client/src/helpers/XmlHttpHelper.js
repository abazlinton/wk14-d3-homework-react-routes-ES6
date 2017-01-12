// This code is courtesy of Matthew Jeorrett - https://github.com/MJeorrett

const XmlHttpHelper = {

  getWithAuthorizationToken( url, token, onloadCallback ) {
    var req = new XMLHttpRequest()
    req.open( 'GET', url )
    this._setAuthorizationHeader( req, token )
    req.onload = () => {
      const dataObject = JSON.parse( req.responseText )
      if( req.status === 200 ) {
        onloadCallback( dataObject )
      } else {
        console.log( "Error GET from:", url, ", failed with status: ", req.status, "/n", dataObject );
      }
    }
    req.send( null )
  },

  postWithAuthorizationToken( url, token, payload, onloadCallback ) {
    var req = new XMLHttpRequest()
    req.open( 'POST', url )
    req.setRequestHeader( 'Content-Type', 'application/json' )
    this._setAuthorizationHeader( req, token )
    req.onload = () => {
      const dataObject = JSON.parse( req.responseText )
      if( req.status === 201 ) {
        if ( onloadCallback ) onloadCallback( dataObject )
      } else {
        console.log( "Error GET from:", url, ", failed with status: ", req.status, "/n", dataObject );
      }
    }
    req.send( JSON.stringify( payload ) )
  },

  _setAuthorizationHeader( req, token ) {
    req.setRequestHeader( 'Authorization', `Bearer ${token}` )
  }
}

export default XmlHttpHelper
