//5 -Now, define a second object with the same structure (the same keys) as the first one and the following values: 'Scrooge Uncle', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'The Last MacScrooge' , 'Yea'. Then print the values ​​of each object together according to each of the keys. Expected value in the console:

let info = {
    personagem: 'Scrooge Uncle',
    origem: "Pato Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'The Last MacScrooge',
  };
  info.recurrent = 'Yes';
  for(index in info) {
    console.log(info[index])
    }
