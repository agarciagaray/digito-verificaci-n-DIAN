# digito-verificacion-DIAN
Función Javascript para calcular el Dígito de Verificación para la DIAN (Colombia) de una cédula o un nit.

Se tomó como base la función de [Calcular Digito de Verificación DIAN de mundonets.com](http://www.mundonets.com/digito-de-verificacion-dian/).

## Usar esta función en Apps Script 

```js
  var codigo = UrlFetchApp.fetch('https://raw.githubusercontent.com/agarciagaray/digito-verificacion-dian/master/digitoVerificacionDian.js').getContentText();
  eval(codigo);
  Logger.log(calcularDigitoVerificacion("123456789"));
```


## Ejemplo

## Historia

2023 11 20 - Primera versión - creación
