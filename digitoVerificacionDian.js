/**
 * Permite calcular el dígito de verificación
 * @param {string} lcNumIdentificcion - NIT proporcionado por el RUES a la empresa.
 * @returns {Number} Retorna el número de verificación que corresponde a la empresa.
 */
function  digitoVerificacionDian ( lcNumIdentificcion )  {
  var vpri,
      x,
      y,
      z;
  
  // Se limpia el Nit
  lcNumIdentificcion = lcNumIdentificcion.replace ( /\s/g, "" ) ; // Espacios
  lcNumIdentificcion = lcNumIdentificcion.replace ( /,/g,  "" ) ; // Comas
  lcNumIdentificcion = lcNumIdentificcion.replace ( /\./g, "" ) ; // Puntos
  lcNumIdentificcion = lcNumIdentificcion.replace ( /-/g,  "" ) ; // Guiones
  
  // Se valida el nit
  if  ( isNaN ( lcNumIdentificcion ) )  {
    console.log ("El nit/cédula '" + lcNumIdentificcion + "' no es válido(a).") ;
    return "" ;
  };
  
  // Procedimiento
  vpri = new Array(16) ; 
  z = lcNumIdentificcion.length ;

  vpri[1]  =  3 ;
  vpri[2]  =  7 ;
  vpri[3]  = 13 ; 
  vpri[4]  = 17 ;
  vpri[5]  = 19 ;
  vpri[6]  = 23 ;
  vpri[7]  = 29 ;
  vpri[8]  = 37 ;
  vpri[9]  = 41 ;
  vpri[10] = 43 ;
  vpri[11] = 47 ;  
  vpri[12] = 53 ;  
  vpri[13] = 59 ; 
  vpri[14] = 67 ; 
  vpri[15] = 71 ;

  x = 0 ;
  y = 0 ;
  for  ( var i = 0; i < z; i++ )  { 
    y = ( lcNumIdentificcion.substr (i, 1 ) ) ;
    // console.log ( y + "x" + vpri[z-i] + ":" ) ;

    x += ( y * vpri [z-i] ) ;
    // console.log ( x ) ;    
  }

  y = x % 11 ;
  // console.log ( y ) ;

  return ( y > 1 ) ? 11 - y : y ;
}
