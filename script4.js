// // 4.1 Dado el siguiente array, devuelve un array con sus nombres
// // utilizando .map().
const users = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' },
]
const onlyName = users.map((item) => item.name)
console.log(onlyName)

// // 4.2 Dado el siguiente array, devuelve una lista que contenga los valores
// // de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que
// // empiece por 'A'.
const users2 = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' },
]
// const onlyName2 = users2.map((item) => item.name.includes("A")

let onlyName2 = users2.map(function (item) {
  if (item.name.includes('A')) {
    item.name = 'Anacleto'
  }
  return item
})
console.log(onlyName2)

// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y añade al valor de .name el string ' (Visitado)'
// cuando el valor de la propiedad isVisited = true.
const cities = [
  { isVisited: true, name: 'Tokyo' },
  { isVisited: false, name: 'Madagascar' },
  { isVisited: true, name: 'Amsterdam' },
  { isVisited: false, name: 'Seul' },
]
const citiesName = cities.map(function (item) {
  if (item.isVisited === true) {
    item.name += ' (Visitado)'
  }
  return item
})
console.log(citiesName)
