import { useState, useEffect } from "react";

const Register = (props) => {
  const [input, setInput] = useState({
    name: "",
    pass: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
    } catch (e) {
    } finally {
      props.history.push("/business/:id");
    }
  };

  useEffect(() => {
    console.log(input);
  }, [input]);

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    let name = e.target.name;
    let val = e.target.value;
    setInput({ ...input, [name]: val });
    console.log(input);
  };
  return (
    <>
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
        <label htmlFor="pass">Create password:</label>
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
export default Register;
