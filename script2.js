// 2.1 En base al siguiente javascript, crea variables en base a las propiedades
// del objeto usando object destructuring e imprimelas por consola. Cuidado,
// no hace falta hacer destructuring del array, solo del objeto.

const game = {
  title: 'The last us 2',
  gender: ['action', 'zombie', 'survival'],
  year: 2020,
}
let { title, gender, year } = game
console.log(title)
console.log(gender)
console.log(year)

// 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables
// llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
// imprimelo por consola.

const fruits = ['Banana', 'Strawberry', 'Orange']
let [fruit1, fruit2, fruit3] = fruits
console.log(fruit1)
console.log(fruit2)
console.log(fruit3)

// 2.3 En base al siguiente javascript, usa destructuring para crear 2
// variables igualandolo a la función e imprimiendolo por consola.

const animalFunction = () => {
  return { name: 'Bengal Tiger', race: 'Tiger' }
}
let { name, race } = animalFunction()
console.log(race)
console.log(name)
// 2.4 En base al siguiente javascript, usa destructuring para crear las
// variables name y itv con sus respectivos valores. Posteriormente crea
// 3 variables usando igualmente el destructuring para cada uno de los años
// y comprueba que todo esta bien imprimiendolo.

const car = { nombre: 'Mazda 6', itv: [2015, 2011, 2020] }
let { nombre, itv } = car
console.log(nombre)
console.log(itv)
let [año1, año2, año3] = itv
console.log(año1)
console.log(año2)
console.log(año3)

///////////////////////////////////////////
/////////////////////////////////////////////
//EJEMPLO APUNTES
// let marvelCharacter = {
//   name: {
//     heroName: 'Doctor Strange',
//     humanName: 'Stephen Vincent Strange',
//   },
//   team: ['Avengers', 'Iluminati'],
// }

// // Destructuring - Ex1
// let { name, team } = marvelCharacter

// // Podemos acceder a las propiedades sin el marvelCharacter -> ya asignado.
// console.log(name.heroName, name.humanName)
// console.log(team[0], team[1])

// // Destructuring - Ex2
// let { heroName, humanName } = marvelCharacter.name

// console.log(heroName)
// console.log(humanName)
