import { GlobalStyle } from "./global/style";
import Layout from "./components/layout";
import PokemonVariety from "./components/pokemon-variety/pokemon-variety";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Layout>
        <PokemonVariety />
      </Layout>
    </div>
  );
};

export default App;
