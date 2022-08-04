import { fetchCoinHistory } from "./api";
import { useQuery } from "@tanstack/react-query";
import ApexChart from "react-apexcharts";

interface ChartProps {
  coinId: string;
}

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "Loading Chart..."
      ) : (
        <ApexChart
          type="line"
          series={[
            { name: "hello", data: data?.map((price) => price.close) },
            { name: "data", data: [15, 18, 33, 90] }
          ]}
          optionis={{ chart: { height: 500, width: 500 } }}
        />
      )}
    </div>
  );
}

export default Chart;
