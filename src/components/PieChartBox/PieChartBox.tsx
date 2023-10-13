import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import "./PieChartBox.scss";

const data = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Laptop", value: 300, color: "#FFBB28" },
  { name: "Tablet", value: 200, color: "#FF8042" },
];

interface Props {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
}

const PieChartBox = () => {
  return (
    <div className="pie-chart">
      <h1>Leads by source</h1>
      <ResponsiveContainer width="99%" height={300}>
        <PieChart>
          <Tooltip
            contentStyle={{
              background: "#fff",
              borderRadius: "5px",
            }}
          />
          <Pie
            data={data}
            innerRadius={"70%"}
            outerRadius={"90%"}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((item) => (
              <Cell key={item.name} fill={item.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="options">
        {data.map((option) => {
          return (
            <>
              <div className="option">
                <div className="title">
                  <div
                    className="dot"
                    style={{
                      backgroundColor: option.color,
                    }}
                  ></div>
                  <span>{option.name}</span>
                </div>
                <span>{option.value}</span>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default PieChartBox;
