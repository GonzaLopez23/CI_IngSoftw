const longString =
  'Esta es una cadena de texto muy larga que\n' +
  'debería ser formateada de acuerdo a las\n' +
  'reglas que estableciste en el archivo\n' +
  '.prettierrc.json';

function ejemploFuncion() {
  if (longString.length > 40) {
    console.log(
      'Esta función tiene una línea que excede\n' + 'los 40 caracteres permitidos.'
    );
  } else {
    console.log('Todo está bien.');
  }
}

ejemploFuncion();
