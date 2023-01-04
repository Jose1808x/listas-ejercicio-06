// - Una variable que contenga la lista de la compra (mínimo 5 elementos)

let mercado = ["mouse", "televisor", "silla gamer", "procesador", "zapatos"];
console.log(mercado);

// - Modifica la lista de la compra y añádele "Aceite de Girasol"

mercado.push("aceite girasol");
console.log(mercado);

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

mercado.pop();
console.log(mercado);

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

let peliculas = [ 
    { titulo: "Spiderman No way home", director: "Jon Watts", fecha: 2021 },
    { titulo: "Avengers Endgame", director: "Anthony Russo y Joe Russo", fecha: 2019 }, 
    { titulo: "Black Panther Wakanda Forever", director: "Ryan Coogler", fecha: 2022 } 
];
console.log(peliculas);

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

let peliPos = peliculas.filter(f => f.fecha > 2010);
console.log(peliPos);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

let peliDirector = peliculas.map((d, indice) => {
    return `${indice + 1} ${d.director}`;
})
console.log(peliDirector);

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

let peliTitulo = peliculas.map((t, indice) => {
    return `${indice + 1} ${t.titulo}`;
})
console.log(peliTitulo);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

let listaUno = (peliDirector.concat(peliTitulo));
console.log(listaUno);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

let listaDos = [...peliDirector, ...peliTitulo];
console.log(listaDos);