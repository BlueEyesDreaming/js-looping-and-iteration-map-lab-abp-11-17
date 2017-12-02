function lowerCaseDrivers(array){
  return array.map(function(name){
    return name.toLowerCase()
  })
}




function nameToAttributes(names) {
  return names.map(function(name){
    let first = name.split(" ")[0]
    let last = name.split(" ")[1]
    return {firstName: first, lastName: last}
    })
}

// function attributesToPhrase() {
//
// }
