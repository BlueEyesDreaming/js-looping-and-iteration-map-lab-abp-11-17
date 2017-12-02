function lowerCaseDrivers(array){
  return array.map(function(name){
    return name.toLowerCase()
  })
}




function nameToAttributes(names) {
  return names.map(function(firstLastName){
    let first = name.split(" ")[0]
    let last = name.split(" ")[1]
    return {firstName: first, lastName: last}
    })
}

// function attributesToPhrase() {
//
// }
