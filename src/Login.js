import React, { useState } from "react";

function Login({ updateUserDetails }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    let isValid = true;
    const newErrors = {};

    if (formData.username.trim() === "") {
      isValid = false;
      newErrors.username = "Username is mandatory";
    }

    if (formData.password.trim() === "") {
      isValid = false;
      newErrors.password = "Password is mandatory";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      if (formData.username === "admin" && formData.password === "admin") {
        updateUserDetails({
          name: "John Cena",
          email: "john@cena.com",
        });
      } else {
        setMessage("Invalid credentials");
      }
    }
  };

  return (
    <div className="container text-center">
      <h1>Login Page</h1>

      {message && <p style={{ color: "red" }}>{message}</p>}

      <form onSubmit={handleSubmit}>
        <div style={{ margin: "10px" }}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
        </div>

        <div style={{ margin: "10px" }}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        <div style={{ margin: "10px" }}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
