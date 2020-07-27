import React from 'react'
import { Link } from 'react-router-dom';
function Home() {
    return (
        <>
            <div className="text-right" style={{ width: '950px' }}>
                <h1>EebTech Online Quiz System</h1>
            </div>
            <h1>Quiz SignIn</h1>
            <form style={{ width: '400px' }}>
                <div className="form-row align-items-center">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1"><b>Email address</b></label>
                        <input type="email" required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div><br />
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1"><b>Password</b></label>
                        <input type="password" required className="form-control" id="exampleInputPassword1" />
                    </div><br /><br />
                    <Link to='main' ><button type="button" className="btn btn-outline-secondary" style={{ textAlign: "center" }}>Start Quiz</button></Link>
                </div>
            </form>
        </>
    )
}

export default Home