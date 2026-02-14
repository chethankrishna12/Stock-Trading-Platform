import React from 'react';
function Hero() {
    return (
        <section className='container-fluid' id='supportHero'>
            <div id='supportWrapper'>
                <h4 className='mt-5' >Support Portal</h4>
                <a href='' className='mt-5'>Track Tickets</a>
            </div>
            <div className=' row p-5 '>
                <div className=' col-6' style={{ padding: '60px' }} >
                    <h2 className="fs-3" style={{ lineHeight: '1.5' }}>
                        Search for an answer or browse help topics <br /> to create a ticket
                    </h2>
                    <input placeholder='Eg. how do I activate F&O, why is my order getting rejected..' style={{ lineHeight: '1.5' }} />
                    <br /> <br />
                    <a href="">Track account opening</a>
                    <a href="">Track segment activation</a>
                    <a href="">Intraday margins</a> <br /><br />
                    <a href="">Kite user manual</a>
                </div>


                <div className=' col-5 offset-1' style={{ padding: '60px' }} >
                    <h1 className="fs-3">
                        Featured
                    </h1>
                    <ol>
                        <li>
                            <a href="">Current Takeovers and Delisting - January 2024</a>
                        </li>
                        <li>
                            <a href="">Latest Intraday leverages - MIS & CO</a>
                        </li>
                    </ol>
                </div>

            </div>
        </section>
    );
}

export default Hero;