import React, { useState, useEffect } from "react";
import dados from "./data/tweets.json";
import Chart from "react-google-charts";

function GraficoBarras(props) {
  let monthListMay = 0;
  let monthListApr = 0;
  let monthListJun = 0;
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
        if (index.data.includes("May")) monthListMay++;
        if (index.data.includes("Apr")) monthListApr++;
        if (index.data.includes("Jun")) monthListJun++;
      })}
      <Chart
        width={"100%"}
        height={"300px"}
        chartType="Bar"
        loader={<div>Carregando Gráfico</div>}
        data={[
          ["Mês", "Tweets"],
          ["Abril", monthListApr],
          ["Maio", monthListMay],
          ["Junho", monthListJun],
        ]}
        options={{
          chart: {
            title: "Tweets por mês",
            subtitle: "Tweets por mês: Abril - Junho 2009",
          },
        }}
        rootProps={{ "data-testid": "2" }}
      />
    </div>
  );
}

export default GraficoBarras;
