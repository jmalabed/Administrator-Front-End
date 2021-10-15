import { useState, useEffect } from "react";
import { setBisToken, clearBisToken } from "../../utility/authToken";
const Login = (props) => {
  const [input, setInput] = useState({
    name: "",
    pass: "",
  });
  const [currentBis, setCurrentBis] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (data) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const loggedBis = await fetch(
        "https://git.heroku.com/office-culture.git/auth/login",
        configs
      );
      const parsedBis = await loggedBis.json();
      console.log(parsedBis);
      setBisToken(parsedBis.token);
      setCurrentBis(parsedBis.user);
      setIsAuthenticated(true);
      return parsedBis;
    } catch (err) {
      console.log(err);
      clearBisToken();
      setIsAuthenticated(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loggedBis = await login(input);
    console.log(loggedBis);
    if (loggedBis.bis._id) {
      const bisId = loggedBis.bis._id;
      console.log(bisId);
      if (loggedBis) {
        props.history.push(`/business/${bisId}`);
      } else {
        alert("Account not recognized.");
        props.history.push("/login");
      }
    }
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Business Name:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={input.name}
        />
        <br />
        <br />
        <label htmlFor="pass">Password:</label>
        <br />
        <input
          type="password"
          id="pass"
          name="pass"
          onChange={handleChange}
          value={input.pass}
        />{" "}
        <br />
        <br />
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
};
export default Login;
