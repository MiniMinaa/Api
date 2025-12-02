import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registration() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (pass) => {
    if (pass.length < 8) return "Password must be at least 8 characters";
    return "";
    };

  const handleRegister = () => {
    const pwdError = validatePassword(password);
    if (pwdError) {
      setError(pwdError);
      return;
    }

    localStorage.setItem("savedUsername", username);
    localStorage.setItem("savedPassword", password);

    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div className="register-page">
      <h1>Register</h1>

      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Registration;