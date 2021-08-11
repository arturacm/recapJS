company = {
  name: 'ACME Corp',
  address: 'Nowhere st',
  products: {
    shirts: {
      colors: ['red', 'green', 'blue'],
    },
    socks: {
      colors: ['cyan', 'magenta', 'yellow'],
    },
  },
};

//Parte B - Hora do Jogo!
//Passe a expressão abaixo para Arrow Function e então use destructuring para pegar ​colors
var getShirtsColorsAmount = (company) => {
    // colors = company.products.shirts.colors;
    const {products:{shirts:{colors}}} = company;
    return colors.length;
  };
  // console.log(getShirtsColorsAmount(company))
  
  //A partir do objeto abaixo, desestruture e utilize ​spread operator​ para instaciar uma variável que tenha apenas os dados de roupas que não são calças, ou seja, somente ​shirts e​ ​ socks
  const clothes2 = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] },
  };
  let {shirts:{colors},socks:{colors:colors2} } = clothes2
  colors = [...colors, ...colors2]
  console.log(colors)

  //Utilizando os dois arrays abaixo, desestruture cada array com spread para clonar todos itens menos o primeiro
  const arr = [1, 2, 3];
  const [i,...resto] = arr
  console.log(resto);

  const arr2 = [4, 5, 6];
  const [j,...resto2] = arr2
  console.log(resto2);


  //A partir do objeto abaixo, retorne um array onde cada item é o nome completo de cada pessoa no array. Utilize arrow function.
  var persons = [
    { firstname: 'Malcom', lastname: 'Reynolds' },
    { firstname: 'Kaylee', lastname: 'Frye' },
    { firstname: 'Jayne', lastname: 'Cobb' },
  ];
  const nomeCompleto = persons.map(pessoa=>`${pessoa.firstname} ${pessoa.lastname}`)
  console.log(nomeCompleto)