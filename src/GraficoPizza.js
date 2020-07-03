import React, { useState, useEffect } from "react";
import dados from "./data/tweets.json";
import Chart from "react-google-charts";

function Graficos(props) {
  let negativeTweets = 0;
  let positiveTweets = 0;

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
        if (index.sentimento == 0) negativeTweets++;
        if (index.sentimento == 4) positiveTweets++;
      })}
      <Chart
        width={"100%"}
        height={"300px"}
        chartType="PieChart"
        loader={<div>Carregando Gráfico</div>}
        data={[
          ["Reação", "Qtd Tweets"],
          ["Negativa", negativeTweets],
          ["Positiva", positiveTweets],
        ]}
        options={{ title: "Reações Tweets", pieHole: 0.4, is3D: false }}
      />
    </div>
  );
}

export default Graficos;
