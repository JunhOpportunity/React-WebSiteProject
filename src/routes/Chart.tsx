import { fetchCoinHistory } from "./api";
import { useQuery } from "@tanstack/react-query";
import ApexChart from "react-apexcharts";
import { useOutletContext } from "react-router";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";
// import { Redirect } from "react-router-dom";

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

// const { coinId } = useOutletContext();

// const coinId = useOutletContext<{coinId:"coinId"}>();
// { coinId }: ChartProps

interface ChartProps {
  coinId: string;
}

function Chart({}: ChartProps) {
  const { coinId } = useOutletContext<ChartProps>();
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <div>
      {isLoading ? (
        "Loading Chart..."
      ) : (
        <ApexChart
          type="line"
          series={[
            { name: "Day Close Price", data: data?.map((price) => price.close) }
          ]}
          options={{
            theme: { mode: isDark ? "dark" : "light" },
            chart: {
              height: 500,
              width: 500,
              toolbar: { show: false },
              background: "transparent"
            },
            grid: { show: false },
            stroke: { curve: "smooth" },
            yaxis: { show: false },
            xaxis: {
              labels: { show: false },
              axisTicks: { show: false },
              axisBorder: { show: false }
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["blue"], stops: [0, 100] }
            },
            colors: ["red"]
          }}
        />
      )}
    </div>
  );
}

export default Chart;
