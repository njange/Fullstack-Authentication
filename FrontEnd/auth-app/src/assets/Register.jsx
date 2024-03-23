import React from "react";
import { Form, Button } from "react-bootstrap";

function App() {
    return (
        <div className= 'd-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign Up</h2>
                <form>
                    <div className = 'mb-3'>
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input type="text" className="form-control rounded-0" id="name"
                         placeholder="Enter your name" />
                    </div>
                    <div className = 'mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" className="form-control rounded-0" id="email"
                         placeholder="Enter your email" />
                    </div>
                    <div className = 'mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" className="form-control rounded-0" id="password"
                         placeholder="Enter your password" />
                    </div>
                    <button variant='primary' className='btn btn-success w-100 rounded-0'>
                        Sign Up</button>
                     <p>You agree to our Terms and Privacy Policy </p>
                
                </form>        
            </div>    
        </div>
    );
}

export default App;