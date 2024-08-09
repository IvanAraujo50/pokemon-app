// Importando módulos necessários
import React from 'react';
import PokemonList from './components/PokemonList'; // Importando o componente PokemonList
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <h1>Pokémon App</h1>
      <PokemonList />
    </div>
  );
}

export default App;
