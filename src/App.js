import { GlobalStyle } from "./global/style";
import Layout from "./components/layout";
import PokemonVariety from "./components/pokemon-variety/pokemon-variety";
import PokemonProvider from "./components/providers/pokemon-provider";

const App = () => {
  return (
    <div className="App">
      <PokemonProvider>
        <GlobalStyle />
        <Layout>
          <PokemonVariety />
        </Layout>
      </PokemonProvider>
    </div>
  );
};

export default App;
