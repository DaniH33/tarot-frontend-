import { useState } from "react";
import "./Profiles.css";

const Profiles = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleForm = () => {
        setIsSignIn(!isSignIn);
    };

    return (
        <div className="profiles-container">
            <div className="profiles-form">
                <h2>{isSignIn ? "Sign In" : "Sign Up"}</h2>
                <form>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                    />
                    {!isSignIn && (
                        <div>
                            <label htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                placeholder="Confirm your password"
                            />
                        </div>
                    )}
                    <button type="submit">
                        {isSignIn ? "Sign In" : "Sign Up"}
                    </button>
                </form>
                <p onClick={toggleForm}>
                    {isSignIn
                        ? "Don't have an account? Sign Up"
                        : "Already have an account? Sign In"}
                </p>
            </div>
        </div>
    );
};

export default Profiles;
