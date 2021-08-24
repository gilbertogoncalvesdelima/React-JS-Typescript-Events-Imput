
import React, { useState } from 'react';

import './App.css';

// Crie uma interface para o item do produto
  interface Item {
  id: number;
  name: string;
  price: number;
}

//Esta lista contém alguns produtos de uma loja de ficção
const PRODUCTS: Item[] = [
  {
    id: 1,
    name: 'Apple',
    price: 1,
  },
  {
    id: 2,
    name: 'Book',
    price: 5,
  },
  {
    id: 3,
    name: 'Banana',
    price: 0.5,
  },
  {
    id: 4,
    name: 'Table',
    price: 200,
  },
];

const App: React.FunctionComponent = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<Item[] | undefined>();

  // Esta função é chamada quando a entrada muda
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value;
    setQuery(enteredName);
  };

  // Esta função é acionada quando o botão Pesquisar é clicado
    const search = () => {
    const foundItems = PRODUCTS.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setResult(foundItems);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <input
          value={query}
          onChange={inputHandler}
          placeholder="Search products"
          className="input"
        />

        <button onClick={search}>Search</button>
      </div>

      {/* Exibit resultado na pesquisa*/}
      <div className="search-result">
        {result && result.length > 0 ? (
          result.map((item) => (
            <li key={item.id} className="item">
              <span className="item-id">{item.id}</span>
              <span className="item-name">{item.name}</span>
              <span className="item-price">{item.price}$</span>
            </li>
          ))
        ) : (
          <h2>No items found!</h2>
        )}
      </div>
    </div>
  );
};

export default App;