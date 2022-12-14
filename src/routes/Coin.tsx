import { useParams } from "react-router";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useLocation, Route, Routes, Outlet, useMatch } from "react-router-dom";
import Price from "./Price";
import Chart from "./Chart";
import { Link } from "react-router-dom";
import { fetchCoinInfo, fetchCoinTickers } from "./api";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";

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

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
  }
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
  };
}

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

interface ICoinProps {}

function Coin({}: ICoinProps) {
  // const [loading, setLoading] = useState(true);
  const { coinId } = useParams(); // useParams ?????? ?????? type??? string or undefined

  const location = useLocation();
  const state = location.state as RouteState;
  console.log(location);
  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>(
    ["info"],
    () => fetchCoinInfo(coinId)
  );
  const { isLoading: tickersLoading, data: tickersData } = useQuery<PriceData>(
    ["tickers"],
    () => fetchCoinTickers(coinId),
    {
      refetchInterval: 5000
    }
  );
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");
  // const [info, setInfo] = useState<InfoData>();
  // const [priceInfo, setPriceInfo] = useState<PriceData>();
  // console.log(state);
  // console.log(info);
  // interface InfoData {}
  // interface PriceData {}

  // useEffect(() => {
  //   (async () => {
  //     const infoData = await (
  //       await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
  //     ).json();
  //     console.log(infoData);
  //     const priceData = await (
  //       await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
  //     ).json();
  //     setInfo(infoData);
  //     setPriceInfo(priceData);
  //     setLoading(false);
  //   })();
  // }, []);

  const loading = infoLoading || tickersLoading;
  return (
    <Container>
      <Helmet>
        <title>?????????</title>
      </Helmet>
      <Header>
        <Title>
          {/* {coinId} */}
          {state?.name ? state.name : loading ? "loading..." : infoData?.name}
        </Title>
      </Header>
      {loading ? <Loader>"Loading...."</Loader> : null}
      <Tabs>
        <Tab isActive={chartMatch !== null}>
          <Link to={`/${coinId}/chart`} state={state}>
            Chart
          </Link>
        </Tab>
        <Tab isActive={priceMatch !== null}>
          <Link to={`/${coinId}/price`} state={state}>
            Price
          </Link>
        </Tab>
        <Tab isActive={priceMatch !== null}>
          <Link to={`/`}>Home</Link>
        </Tab>
      </Tabs>
      <Outlet context={{ coinId }} />
    </Container>
  );
}

export default Coin;
