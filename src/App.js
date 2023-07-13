import React, { useEffect, useState } from "react";
import "./App.css";
import NetflixCard from "./components/NetflixCard";
export default function App() {
  const [myData, setMyData] = useState([]);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "44fd12d7e9mshc97fba051aa42bbp1e55c5jsnc2dd769b5228",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en ",
        options
      );
      const data = await res.json();
      console.log(data);
      setMyData(data.titles);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {/* {myData.map((currele) => {
        <NetflixCard key={currele.summary.id} actualData={currele} />;
      })} */}
    </div>
  );
}
