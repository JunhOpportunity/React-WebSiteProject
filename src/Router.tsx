import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chart from "./routes/Chart";
import Price from "./routes/Price";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
// import { useOutletContext } from "react-router";

function Router() {
  // const { coinId } = useParams();
  // const data=useOutletContext<{coinId:"coinId"} >(); // {food: "pizza"}
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinId" element={<Coin />}>
          <Route path="chart" element={<Chart />} />
          <Route path="price" element={<Price />} />
        </Route>
        <Route path="/" element={<Coins />}></Route>
        <Route path="/:coinId/*" element={<Coin />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
