const produtos = [
    {
      nome: 'Prancha de Surf',
      categoria: 'Equipamento',
      preço: 750.00
    },
    {
      nome: 'Fato de Surf',
      categoria: 'Vestuário',
      preço: 244.99
    },
    {
      nome: 'Fins',
      categoria: 'Acessório',
      preço: 59.99
    },
    {
      nome: 'Leash',
      categoria: 'Acessório',
      preço: 29.99
    },
    {
      nome: 'Wax',
      categoria: 'Acessório',
      preço: 4.99
    },
  ];

  const listaProdutosElement = document.getElementById('lista-Produtos');

    produtos.forEach(produto => {
      const itemLista = document.createElement('li');
      itemLista.innerHTML = `
        <strong>Nome:</strong> ${produto.nome}<br>
        <strong>Categoria:</strong> ${produto.categoria}<br>
        <strong>Preço:</strong> ${produto.preço.toFixed(2)} €
      `;
      listaProdutosElement.appendChild(itemLista);
    });