/* import { useEffect } from "react"; */
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { data, theme } = useContextGlobal();

  return (
    <div className={theme}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {Array.isArray(data) &&
          data.map((favorite) => (
            <Card
              key={favorite.id}
              name={favorite.name}
              username={favorite.username}
              id={favorite.id}
            />
          ))}
      </div>
    </div>
  );
};
``;

export default Favs;
