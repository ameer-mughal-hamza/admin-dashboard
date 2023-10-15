import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from "recharts";
import "./Profile.scss";

const data = [
  {
    name: "Sun",
    books: 4000,
    clothes: 2400,
    electronic: 2400,
  },
  {
    name: "Mon",
    books: 3000,
    clothes: 1398,
    electronic: 2210,
  },
  {
    name: "Tue",
    books: 2000,
    clothes: 9800,
    electronic: 2290,
  },
  {
    name: "Wed",
    books: 2780,
    clothes: 3908,
    electronic: 2000,
  },
  {
    name: "Thu",
    books: 1890,
    clothes: 4800,
    electronic: 2181,
  },
  {
    name: "Fri",
    books: 2390,
    clothes: 3800,
    electronic: 2500,
  },
  {
    name: "Sat",
    books: 3490,
    clothes: 4300,
    electronic: 2100,
  },
];

const Profile = () => {
  return (
    <div className="profile">
      <div className="view">
        <div className="top-info">
          <img
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
          <h1>Ameer Hamza</h1>
          <button>Update</button>
        </div>
        <div className="details">
          <div className="item">
            <h2>Username</h2>
            <span>amehamza</span>
          </div>
          <div className="item">
            <h2>Fullname</h2>
            <span>Ameer Hamza</span>
          </div>
          <div className="item">
            <h2>Email</h2>
            <span>johndoe@gmail.com</span>
          </div>
          <div className="item">
            <h2>Phone</h2>
            <span>123 456 789</span>
          </div>
          <div className="item">
            <h2>Status</h2>
            <span>verified</span>
          </div>
        </div>
        <hr />
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="electronic"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <Area
                type="monotone"
                dataKey="clothes"
                stackId="1"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
              <Area
                type="monotone"
                dataKey="books"
                stackId="1"
                stroke="#ffc658"
                fill="#ffc658"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="activities">
        <h1>Latest Activities</h1>
        <ul>
          <li>
            <div className="message">
              <p>John Doe purchased Playstation 5 Digital Edition</p>
              <time>3 day ago</time>
            </div>
          </li>
          <li>
            <div className="message">
              <p>John Doe purchased Playstation 5 Digital Edition</p>
              <time>3 day ago</time>
            </div>
          </li>
          <li>
            <div className="message">
              <p>John Doe purchased Playstation 5 Digital Edition</p>
              <time>3 day ago</time>
            </div>
          </li>
          <li>
            <div className="message">
              <p>John Doe purchased Playstation 5 Digital Edition</p>
              <time>3 day ago</time>
            </div>
          </li>
          <li>
            <div className="message">
              <p>John Doe purchased Playstation 5 Digital Edition</p>
              <time>3 day ago</time>
            </div>
          </li>
          <li>
            <div className="message">
              <p>John Doe purchased Playstation 5 Digital Edition</p>
              <time>3 day ago</time>
            </div>
          </li>
          <li>
            <div className="message">
              <p>John Doe purchased Playstation 5 Digital Edition</p>
              <time>3 day ago</time>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
