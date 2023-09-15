import Card from "../Components/Card";

import "./Home.css";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { theme, api } = useContextGlobal();

  return (
    <main className={`home ${theme}`}>
      <h1>Home</h1>
      <div className="card-grid">
        {api.map((dentista) => (
          <Card
            key={dentista.id}
            name={dentista.name}
            username={dentista.username}
            id={dentista.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
