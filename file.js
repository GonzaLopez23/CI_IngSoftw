const longString =
  'Esta es una cadena de texto muy larga que debería ser formateada de acuerdo a las reglas que estableciste en el archivo .prettierrc.json';
let x = 10;

if ((x = 20)) {
  console.log('x es igual a 20');
}

function ejemploFuncion() {
  if (longString.length > 40) {
    console.log(
      'Esta función tiene una línea que excede los 40 caracteres permitidos.',
    );
  } else {
    console.log('Todo está bien.');
  }
}

ejemploFuncion();
