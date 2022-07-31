let nombre = "Carlos";
let apellido = "Diaz";

//Concatenacion
let saludo = "Hola mi nombre es" + " " + nombre + " " + apellido + ".";

console.log(saludo);

//Interpolacion de variables
//Template String

let saludo2 = `Hola mi nombre es ${nombre} ${apellido}.`;
console.log(saludo2);

let ul =
  "<ul><li>Primavera</li><li>Verano</li><li>Otoño</li><li>Invierno</li></ul>";
console.log(ul);

let ul2 = `
    <ul>
        <li>Primavera</li>
        <li>Verano</li>
        <li>Otoño</li>
        <li>Invierno</li>
    </ul>
`;
console.log(ul2);
