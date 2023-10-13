import "./TopBox.scss";
import { topDealUsers } from "../../data";
const TopBox = () => {
  return (
    <div className="top-box">
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers.map((user) => {
          return (
            <>
              <div className="list-item">
                <div className="user">
                  <img src={user.img} alt="" />
                  <div className="user-texts">
                    <span className="user-texts__name">{user.username}</span>
                    <span className="user-texts__email">{user.email}</span>
                  </div>
                </div>
                <div className="amount">${user.amount}</div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default TopBox;
