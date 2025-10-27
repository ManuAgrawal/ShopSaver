import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // alert(`Email: ${email}\nPassword: ${password}`);
    navigate("/dashboard"); // ✅ redirect
  };

  return (
    <div className="login-container">
      <h2>User Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Enter email" required />
        <input type="password" placeholder="Enter password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
