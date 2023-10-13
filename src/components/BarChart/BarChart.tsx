import { Bar, BarChart as Chart, ResponsiveContainer, Tooltip } from "recharts";
import "./BarCharts.scss";

interface Props {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
}

const BarChart = (props: Props) => {
  return (
    <div className="bar-chart">
      <h1>{props.title}</h1>
      <ResponsiveContainer width="99%" height={150}>
        <Chart width={150} height={40} data={props.chartData}>
          <Tooltip
            contentStyle={{
              background: "#2a3447",
              borderRadius: "5px",
            }}
            labelStyle={{
              display: "none",
            }}
            cursor={{
              fill: "none",
            }}
          />
          <Bar dataKey={props.dataKey} fill={props.color} />
        </Chart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;
