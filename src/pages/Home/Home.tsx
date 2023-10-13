import TopBox from "@components/TopBox/TopBox";
import "./Home.scss";
import ChartBox from "@components/ChartBox/ChartBox";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";
import BarChart from "@components/BarChart/BarChart";
import PieChartBox from "@components/PieChartBox/PieChartBox";
import RevenueChart from "@components/RevenueChart/RevenueChart";


const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box7">
        <RevenueChart />
      </div>
      <div className="box box8">
        <BarChart {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <BarChart {...barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default Home;
