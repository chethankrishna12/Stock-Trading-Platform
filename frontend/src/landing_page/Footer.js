import React from 'react';
function Footer() {
    return (
        <footer className='border-top bg-light '>
            <div className='container'>
                <div className='row mt-5 '>
                    <div className='col'>
                        <img className="mb-3" src='media/images/logo.svg' style={{ width: '50%' }} />
                        <p className='text-muted'>© 2010 - 2026, Zerodha Broking Ltd.<br />

                            All rights reserved.

                        </p>
                    </div>
                    <div className='col footer-links'>
                        <p>Company</p>
                        <a className="text-decoration-none text-muted" href="">About</a>

                        <a className="text-decoration-none text-muted" href="">Products</a>

                        <a className="text-decoration-none text-muted" href="">Pricing</a>

                        <a className="text-decoration-none text-muted" href="">Referral programme</a>

                        <a className="text-decoration-none text-muted" href="">Careers</a>
                        <a className="text-decoration-none text-muted" href="">Zerodha.tech</a>

                        <a className="text-decoration-none text-muted" href="">Press & media</a>
                        <a className="text-decoration-none text-muted" href="">Zerodha cares (CSR)</a>
                    </div>


                    <div className='col footer-links'>
                        <p>Support</p>
                        <a className="text-decoration-none text-muted" href="">Support portal</a>

                        <a className="text-decoration-none text-muted" href="">Contact us</a>

                        <a className="text-decoration-none text-muted" href="">Z-Connect blog</a>

                        <a className="text-decoration-none text-muted" href="">Downloads & resources</a>
                    </div>

                    <div className='col footer-links'>
                        <p>
                            Account
                        </p>
                        <a className="text-decoration-none text-muted" href='#'>Open an account</a>

                        <a className="text-decoration-none text-muted" href='#'>Fund transfer</a>

                        <a className="text-decoration-none text-muted" href='#'>60 day challenge</a>

                    </div>

                </div>
                <div className='text-muted mt-5' style={{ fontSize: '12px' }}>
                    <p>
                        Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.:
                        INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. –
                        SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd.,
                        #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
                        Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking
                        please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you
                        carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                    </p>

                    <p>
                        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for
                        filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
                        Communication, Speedy redressal of the grievances
                    </p>

                    <p>
                        Investments in securities market are subject to market risks; read all the related documents
                        carefully before investing.
                    </p>

                    <p> "Prevent unauthorised transactions in your account. Update your
                        mobile numbers/email IDs with your stock brokers. Receive
                        information of your transactions directly from Exchange on your
                        mobile/email at the end of the day. Issued in the interest of
                        investors. KYC is one time exercise while dealing in securities
                        markets - once KYC is done through a SEBI registered intermediary
                        (broker, DP, Mutual Fund etc.), you need not undergo the same
                        process again when you approach another intermediary." Dear
                        Investor, if you are subscribing to an IPO, there is no need to
                        issue a cheque. Please write the Bank account number and sign the
                        IPO application form to authorize your bank to make payment in case
                        of allotment. In case of non allotment the funds will remain in your
                        bank account. As a business we don't give stock tips, and have not
                        authorized anyone to trade on behalf of others. If you find anyone
                        claiming to be part of Zerodha and offering such services, please
                        create a ticket here.</p>
                </div>

                <div className='text-center text-muted p-3' style={{ fontSize: '14px', textDecoration: 'none' }}>
                    <a href='' className='mx-2 text-decoration-none text-muted '>NSE</a>
                    <a href='' className='mx-2 text-decoration-none text-muted '>BSE</a>
                    <a href='' className='mx-2 text-decoration-none text-muted '>MCX</a>
                    <a href='' className='mx-2 text-decoration-none text-muted '>Terms & Conditions</a>
                    <a href='' className='mx-2 text-decoration-none text-muted '>Polices & Procedures</a>
                    <a href='' className='mx-2 text-decoration-none text-muted '>Privacy policy </a>
                    <a href='' className='mx-2 text-decoration-none text-muted '>Disclosure </a>
                    <a href='' className='mx-2 text-decoration-none text-muted '>For investor's attention </a>
                    <a href='' className='mx-2 text-decoration-none text-muted '>Investor charter</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;