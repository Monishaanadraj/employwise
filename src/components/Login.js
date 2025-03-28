import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";  // Import the CSS module

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://reqres.in/api/login", {
                email: "eve.holt@reqres.in",  // Given email
                password: "cityslicka",      // Given password
            });
            localStorage.setItem("token", response.data.token);
            navigate("/users");  // Redirect to Users List page
        } catch (err) {
            setError("Invalid credentials");
        }
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginBox}>
                <h2>Login</h2>
                {error && <p className={styles.errorMessage}>{error}</p>}
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder="Email" value={email} 
                        onChange={(e) => setEmail(e.target.value)} required 
                        className={styles.inputField} />
                    
                    <input type="password" placeholder="Password" value={password} 
                        onChange={(e) => setPassword(e.target.value)} required 
                        className={styles.inputField} />
                    
                    <button type="submit" className={styles.loginButton}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
