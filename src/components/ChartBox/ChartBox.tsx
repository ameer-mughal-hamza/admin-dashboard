import { Link } from "react-router-dom";
import "./ChartBox.scss";
import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

interface ChartBoxProps {
  color: string;
  title: string;
  number: number | string;
  chartData: object[];
  dataKey: string;
  percentage: number;
  icon: string;
}

const ChartBox = (props: ChartBoxProps) => {
  return (
    <div className="chart-box">
      <div className="box-info">
        <div className="title">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link
          to=""
          style={{
            color: props.color,
          }}
        >
          View all
        </Link>
      </div>
      <div className="chart-info">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{
                  background: "transparent",
                  border: "none",
                }}
                labelStyle={{
                  display: "none",
                }}
                position={{
                  x: 10,
                  y: 50,
                }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <div
            className="percentage"
            style={{
              color: props.percentage > 0 ? "limegreen" : "tomato",
            }}
          >
            {props.percentage}%
          </div>
          <div className="duration">this month</div>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
