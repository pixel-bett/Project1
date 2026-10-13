import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Login() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: firstName,
          secondname: secondName,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed.");
      }

      setMessage(data.message || "Login successful.");
    } catch (error) {
      setMessage(error.message || "Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <h1>Welcome Back</h1>
        <p>Sign in to Ember House.</p>

       <label htmlFor="firstname">First name</label>
        <input
          id="firstname"
          type="text"
          placeholder="Enter first name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          autoComplete="given-name"
          required
        />

        <label htmlFor="secondname">Second name</label>
        <input
          id="secondname"
          type="text"
          placeholder="Enter second name"
          value={secondName}
          onChange={(event) => setSecondName(event.target.value)}
          autoComplete="family-name"
          required
        />
        <br />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
          required
        />
        <br />

        <button className="ember-button" type="submit" disabled={loading}>
          {loading ? "Signing in..." : "Login"}
        </button>

        {message && <p role="status">{message}</p>}

        <p>
          New to Ember House? <Link to="/register">Create an account</Link>
        </p>
        <br />
        <Link to="/">Back to Home</Link>
      </form>
    </main>
  );
}

export default Login;
