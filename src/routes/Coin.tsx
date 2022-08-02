import { useParams } from "react-router";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: felx;
  justify-content: center;
  align-items: center;
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

interface RouteParams {
  coinId: string;
}

interface RouteState {
  name: string;
}

interface LocationState {
  state: {
    name: string;
    rank: number;
  };
}

function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams(); // useParams 쓰는 순간 type이 string or undefined
  const { state } = useLocation() as LocationState;
  const [info, setInfo] = useState({});
  const [priceInfo, setPriceInfo] = useState({});
  interface InfoData {}
  interface PriceData {}
  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setInfo(infoData);
      setPriceInfo(priceData);
    })();
  });
  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? <Loader>"Loading...."</Loader> : <span>{info.hello}</span>}
    </Container>
  );
}

export default Coin;
