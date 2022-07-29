let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3},    
}

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('The player ' + player.name + ' ' + player.lastName + ' is ' + player.age + ' years old')

console.log('The player ' + player.name + ' ' + player.lastName + ' was elected the best in the world for ' + player.bestInTheWorld.length + ' times')

console.log('The player has ' + player.medals.golden +' gold medals and ' + player.medals.silver + ' silver medals')
