import React from 'react';
import { Link } from 'react-router-dom';
function Team() {
    return (
        <div className='container'>
            <div className='row p-3 mt-5 border-top'>
                <h1 className="text-center " >People</h1>
            </div>

            <div className='row p-5 text-muted' style={{ lineHeight: "1.8", fontSize: "1.1em" }}>
                <div className='col-6 p-3 text-center'>
                    <img src="media/images/chethan.jpeg" alt="Team" style={{ borderRadius: '100%', width: '50%' }} />
                    <h4 className='mt-5'>Chethan Krishna</h4>
                    <h6>Developer </h6>
                </div>
                <div className='col-6 p-3'>
                    <p>
                        Chethan is a passionate developer and MCA student with a strong interest in building real-world web applications. He created Trading as a modern stock trading platform inspired by real industry systems, focusing on simplicity, speed, and user-friendly design with hands-on experience in Java, frontend development, and Nodejs
                    </p>
                    <p>
                        He is continuously learning and improving his skills in backend development and system design to build scalable applications in the future.
                    </p>
                    <p>
                        In his free time, he enjoys exploring new technologies, working on personal projects, and improving his coding skills.
                    </p>
                    <p>
                        Connect on <Link to="/homepage">Homepage</Link> / <a href="https://tradingqna.com">TradingQnA</a> /
                        <a href="https://www.linkedin.com/in/chethan-krishna12" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;
