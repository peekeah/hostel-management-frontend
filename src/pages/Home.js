import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import "./Home.scss";

function Home() {
  const URL = "https://hostel-management-07.herokuapp.com";
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `${URL}/buildings`
      );
      setCardData(res.data);
    }
    getData();
  }, []);

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="home-container row bg-dark my-5 mx-auto flex-wrap">
        {cardData.map((card, id) => (
          <div key={id} className="wrapper col-4">
            <div className="card my-5 mx-3 text-dark">
              <div className="card-body">
                <h5 className="card-title text-dark">{card.building_name}</h5>
                <p className="card-text text-info">
                  No of floors: {card.no_of_floors}
                </p>
                <p className="card-text text-info">
                  Rooms per Floor: {card.rooms_per_floor}
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
