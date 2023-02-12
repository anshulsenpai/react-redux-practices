import { useState } from "react";

type LoginProp = {
  name: string;
  email: string;
  isAdmin: boolean;
};

export const Login = () => {
  const [user, setUser] = useState<LoginProp | null>(null);
  const handleLogin = () => {
    setUser({
      name: "Anshul",
      email: "anshul@example.com",
      isAdmin: true
    });
  };
  const handleLogOut = () => {
    setUser(null);
  };

  return (
    <div className="login">
      <h1> Welcome {user?.name ? user?.name : "Guest"} </h1>
      {user && <p>{user?.isAdmin ? "Admin" : "Member"}</p>}
      <button onClick={handleLogin} className="btn primary-btn">
        Log in
      </button>
      <button onClick={handleLogOut} className="btn secondary-btn">
        Log out
      </button>
    </div>
  );
};
