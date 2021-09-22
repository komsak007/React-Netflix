import React, { useState, useEffect } from "react";
import axios from "axios";

import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/list/List";
import "./home.scss";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDBhZDI1Njc5OGExMDExMDZhMzFmYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMjMxOTYxNiwiZXhwIjoxNjMyNDA2MDE2fQ.ezTe2c14ljKUQIj-iTnkZKqT2GHdpHDOpgoVW6QjkXs",
            },
          }
        );

        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list, key) => (
        <List list={list} key={key} />
      ))}
    </div>
  );
};

export default Home;
