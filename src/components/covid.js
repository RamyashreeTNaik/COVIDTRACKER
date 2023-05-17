/** @format */

import React, { useEffect, useState } from "react";
import "./covid.css";

const Covid = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const result = await fetch("https://data.covid19india.org/data.json");
      const actualData = await result.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <h4 className="live">🔴Live</h4>
      <h2 className="animate-charcter">COVID 19 TRACKER</h2>
      <section>
        <ul className="unList">
          <li className="card">
            <div className="card_Main">
              <div className="box1">
                <div className="card_Inner">
                  <p className="card_name">
                    <span Style="font-size:12px">OUR </span>COUNTRY
                  </p>
                  <p className="card_total card small">INDIA</p>
                </div>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card_Main">
              <div className="box2">
                <div className="card_Inner">
                  <p className="card_name">
                    <span Style="font-size:12px">TOTAL </span>RECOVERED
                  </p>
                  <p className="card_total card small">{data.recovered}</p>
                </div>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card_Main">
              <div className="box3">
                <div className="card_Inner">
                  <p className="card_name">
                    <span Style="font-size:12px">TOTAL </span>CONFIREMED
                  </p>
                  <p className="card_total card small">{data.confirmed}</p>
                </div>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card_Main">
              <div className="box4">
                <div className="card_Inner">
                  <p className="card_name">
                    <span Style="font-size:12px">TOTAL </span>DETH
                  </p>
                  <p className="card_total card small">{data.deaths}</p>
                </div>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card_Main">
              <div className="box5">
                <div className="card_Inner">
                  <p className="card_name">
                    <span Style="font-size:12px">TOTAL </span>ACTIVE
                  </p>
                  <p className="card_total_card_small">{data.active}</p>
                </div>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card_Main">
              <div className="box6">
                <div className="card_Inner">
                  <p className="card_name">
                    <span Style="font-size:12px">LAST </span>UPDATE
                  </p>
                  <p className="card_total card_small">
                    {data.lastupdatedtime}
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Covid;
