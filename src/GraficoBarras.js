import React, { useState, useEffect } from "react";
import dados from "./data/tweets.json";
import Chart from "react-google-charts";

function GraficoBarras(props) {
  let dayListSun = 0;
  let dayListMon = 0;
  let dayListTue = 0;
  let dayListWed = 0;
  let dayListThu = 0;
  let dayListFri = 0;
  let dayListSat = 0;

  const [tweetsList, setTweetsList] = useState([]);
  function getTweets() {
    fetch(dados).then((json) => {
      setTweetsList(dados);
    });
  }
  useEffect(() => {
    getTweets();
  }, []);
  return (
    <div>
      {tweetsList.map((index) => {
        if (index.data.includes("Sun")) dayListSun++;
        if (index.data.includes("Mon")) dayListMon++;
        if (index.data.includes("Tue")) dayListTue++;
        if (index.data.includes("Wed")) dayListWed++;
        if (index.data.includes("Thu")) dayListThu++;
        if (index.data.includes("Fri")) dayListFri++;
        if (index.data.includes("Sat")) dayListSat++;
      })}
      <Chart
        width={"100%"}
        height={"300px"}
        chartType="Bar"
        loader={<div>Carregando Gráfico</div>}
        data={[
          ["Dias da Semana", "Tweets"],
          ["Dom", dayListSun],
          ["Seg", dayListMon],
          ["Ter", dayListTue],
          ["Qua", dayListWed],
          ["Qui", dayListThu],
          ["Sex", dayListFri],
          ["Sab", dayListSat],
        ]}
        options={{
          chart: {
            title: "Tweets por semana",
            subtitle: "Tweets por semana: Abril - Junho 2009",
          },
        }}
        rootProps={{ "data-testid": "2" }}
      />
    </div>
  );
}

export default GraficoBarras;
