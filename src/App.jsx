import { useState } from 'react';
import PokemonList from './components/PokemonList';

function App() {
  const [showPokemonList, setShowPokemonList] = useState(false);
  return (
    <div className="App">
      <h1>Welcome to the Pokemon App</h1>
      <button onClick={() => setShowPokemonList(!showPokemonList)}>
        {showPokemonList ? 'Hide Pokemon List' : 'Show Pokemon List'}
      </button>
      {showPokemonList && <PokemonList />}
    </div>
  );
}

export default App;
