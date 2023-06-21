import "./App.css";
import Table from "./Table.jsx";
import Pizza from "./Pizza.jsx";

function App() {
  return (
    <>
      <div>
        <h1>Feminicidio</h1>
        <p>
          O feminicídio é o assassinato de mulheres devido à sua condição de
          gênero. É uma forma extrema de violência de gênero que ocorre
          globalmente. As vítimas podem ser de diferentes origens e idades, mas
          as mais vulneráveis são aquelas que enfrentam múltiplas formas de
          discriminação. O feminicídio está enraizado em desigualdades de gênero
          e normas sociais prejudiciais. Combater esse problema requer leis e
          políticas eficazes, igualdade de gênero, fortalecimento de
          instituições jurídicas e conscientização. É uma luta que exige o
          envolvimento de governos, organizações e indivíduos para criar uma
          sociedade mais justa e segura para as mulheres.
        </p>
      </div>
      <Table />

      <div>
        <Pizza/>
      </div>
    </>
  );
}

export default App;
