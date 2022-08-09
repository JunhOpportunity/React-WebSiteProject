import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chart from "./routes/Chart";
import Price from "./routes/Price";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
// import { useOutletContext } from "react-router";

interface IRouterProps {
  toggleDark: () => void;
  isDark: boolean;
}

function Router({ toggleDark, isDark }: IRouterProps) {
  // const { coinId } = useParams();
  // const data=useOutletContext<{coinId:"coinId"} >(); // {food: "pizza"}
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinId" element={<Coin isDark={isDark} />}>
          <Route path="chart" element={<Chart isDark={isDark} />} />
          <Route path="price" element={<Price />} />
        </Route>
        <Route path="/" element={<Coins toggleDark={toggleDark} />}></Route>
        <Route path="/:coinId/*" element={<Coin />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
