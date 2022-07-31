// Ejemplos de datso primitivos y algunos metodos para los Strings


let nombre = "Carlos"
let apellido = 'Diaz'
let saludo = new String("Hola Mundo")
let lorem = "           Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quia magni reiciendis libero vel tempora sunt, omnis adipisci, minima voluptatibus magnam perferendis voluptatum. Nostrum unde magni at labore quam reiciendis?     "

console.log(nombre,apellido,saludo);
console.log(
    nombre.length,
    apellido.length,
    saludo.length,
    nombre.toUpperCase(),
    apellido.toLowerCase(),
    lorem.includes("amet"),
    lorem.includes("Carlos"),
    lorem,
    lorem.trim(),
    lorem.split(" "),
    lorem.split(","),
);

console.log(lorem.split(","));
