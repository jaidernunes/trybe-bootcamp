// 1 - Print a welcome message on the console for the character above, including your name.Expected value on the console:
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
console.log('Welcome, '+ info.personagem)

//🚀 2 -Insert in the object a new property with the key name 'recurring' and the value 'Yes' and then print the object in the console. Expected value in the console:
info.recurrent = 'Sim'
console.log(info)

//3 -Do a for/in that shows all the keys of the object. Expected value in the console:
for(index in info) {
  console.log(index)
  }

//4 -Do a new for/in, but now show all the values ​​of the object's keys. Expected value in the console:
for(index in info) {
  console.log(info[index])
  }
