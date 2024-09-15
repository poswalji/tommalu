import React, { useState } from 'react';
import './LoginPopup.css'; // Style this component as needed


const LoginPopup = ({ onClose }) => {
    const [isLogin, setIsLogin] = useState(true); // true for Login, false for Sign Up
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState(''); // Used for Sign Up

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            console.log('Logging in with', email, password);
        } else {
            console.log('Signing up with', username, email, password);
        }
    };

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-btn" onClick={onClose}>X</button> {/* Close the popup */}
                <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
                <form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <div className="form-group">
                            <label>Username</label>
                            <input 
                                type="text" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                required 
                            />
                        </div>
                    )}
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit" className="auth-btn">
                        {isLogin ? 'Login' : 'Create Account'}
                    </button>
                </form>
                <p>
                    {isLogin ? (
                        <>
                            Don't have an account?{' '}
                            <span className="toggle-link" onClick={() => setIsLogin(false)}>
                                Sign Up
                            </span>
                        </>
                    ) : (
                        <>
                            Already have an account?{' '}
                            <span className="toggle-link" onClick={() => setIsLogin(true)}>
                                Login
                            </span>
                        </>
                    )}
                </p>
            </div>
        </div>
    );
};

export default LoginPopup;
