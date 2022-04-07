import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAll } from "./Api";

const Home = () => {
  const [users, setUsers] = React.useState([]);
  useEffect(() => {
    getAll()
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        console.log(users);
      });
  }, []);

  return (
    <div className="abc">
      <div className="button">
        <Link to="/login">
       
          <button>Login/Signup</button>
        </Link>
      </div>
      <h1>All Users</h1>
      <div className="flex">
        {users.length &&
          users.map((user) => {
            return (
              <div
                className="d-flex justify-content-center align-items-center my-5"
                key={user.id}
              >
                <div className="imge mx-2">
                  <img key={user.avatar} src={user.avatar} />
                </div>
                <div>
                  <p>
                    <strong>{user.first_name}</strong>
                  </p>
                  <p>{user.email}</p>
                </div>
              </div>
            );
          })}
      </div>
      <div className="d-flex mt-4 justify-content-center align-items-center">
        <Link to="/register">
          {" "}
          <button>Create NEW</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
