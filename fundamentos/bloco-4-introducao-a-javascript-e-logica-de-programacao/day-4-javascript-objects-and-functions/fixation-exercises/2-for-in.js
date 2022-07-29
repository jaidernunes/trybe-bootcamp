let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

for (index in names) {
    console.log('Hello ' + names[index]);
}

//2

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  for (index in car) {
    console.log(index + ": " + car[index]);
  }