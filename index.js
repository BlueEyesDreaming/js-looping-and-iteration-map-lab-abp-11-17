function map(array, callback) {
  const newArray = []

  for (const element of array) {
    newArray.push(callback(element))
  }
  return newArray;
}

const lowerCaseDrivers = map(drivers, function () {return newArray.toLowerCase()})
//   const newDrivers = []
// 
//   for (const element of drivers) {
//     
//   }
// }

// function nameToAttributes() {
//   
// }
// 
// function attributesToPhrase() {
//   
// }
