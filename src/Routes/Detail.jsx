//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useContextGlobal } from "../Components/utils/global.context";

const Detail = () => {
  const { theme, fetchDetailData, detailData } = useContextGlobal();
  const { id } = useParams();

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    // Inside an async function, fetch the data and then set it
    const fetchData = async () => {
      const data = await fetchDetailData(id);
      if (data) {
        // Set the detail data here
        fetchDetailData(data);
      }
    };

    fetchData(); // Call the async function to fetch the data
  }, [id]);

  const handleClick = () => {
    window.history.back();
  };
  return (
    <div className={`detail ${theme}`}>
      <h1>Detail Dentist id </h1>
      <img src="/images/doctor.jpg" alt="doctor" width={"200px"} />
      {detailData &&
      
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{detailData.name}</td>
              <td>{detailData.email}</td>
              <td>{detailData.phone}</td>
              <td>{detailData.website}</td>
            </tr>
          </tbody>
        </table>
      }
      <button onClick={handleClick}>Go back</button>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  );
};

export default Detail;
