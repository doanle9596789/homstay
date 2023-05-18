import React from "react";
export default function Header(){
    return(
<>
    <div className="top-wrapper top-wrapper-dark">
        <div className="top-inner" id="top-inner">
            <div className="top1-wrapper">
                <div className="container">
                    <div className="top1 clearfix">
                        <div className="currency dropdown">
                            <a className="dropdown-toggle" href="#" role="button" id="dropdownCurrency2"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                US Dollar
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownCurrency2">
                                <a className="dropdown-item" href="#">EURO</a>
                                <a className="dropdown-item" href="#">US DOLLAR</a>
                                <a className="dropdown-item" href="#">POUND STERLING</a>
                                <a className="dropdown-item" href="#">GEORGIAN LARI</a>
                            </div>
                        </div>
                        <div className="language dropdown">
                            <a className="dropdown-toggle" href="#" role="button" id="dropdownLanguage2"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="images/flag1.jpg" alt="" className="img-fluid"/>English (UK)
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownLanguage2">
                                <a className="dropdown-item" href="#"><img src="images/flag1.jpg" alt=""
                                                                           className="img-fluid"/>English
                                    (UK)</a>
                                <a className="dropdown-item" href="#"><img src="images/flag3.jpg" alt=""
                                                                           className="img-fluid"/>German</a>
                                <a className="dropdown-item" href="#"><img src="images/flag5.jpg" alt=""
                                                                           className="img-fluid"/>Georgian</a>
                                <a className="dropdown-item" href="#"><img src="images/flag4.jpg" alt=""
                                                                           className="img-fluid"/>Russian</a>

                            </div>
                        </div>
                        <a href="#" className="search-btn search-open"><i className="fa fa-search"></i></a>
                        <div className="social-wrapper">
                            <ul className="social">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-tumblr"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                            </ul>
                        </div>
                        <div className="account dropdown">
                            <a className="dropdown-toggle" href="#" role="button" id="dropdownAccount2"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Sign in
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownAccount2">
                                <a className="dropdown-item" href="#">EDIT PROFILE</a>
                                <a className="dropdown-item" href="#">SIGN OUT</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="top2-wrapper">
                <div className="container">
                    <div className="top2 clearfix">
                        <header>
                            <div className="logo_wrapper">
                                <a href="index-2.html" className="logo">
                                    <img src="images/logo-white.png" alt="" className="img-fluid"/>
                                </a>
                            </div>
                        </header>
                        <nav className="navbar_ navbar navbar-expand-md clearfix">

                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent2">
                                <ul className="nav navbar-nav sf-menu clearfix">
                                    <li className="nav-item sub-menu sub-menu-1">
                                        <a href="#" className="active nav-link">Home <i className="fa fa-angle-down"
                                                                                        aria-hidden="true"></i></a>
                                        <div className="sf-mega">
                                            <ul>

                                                <li><a href="index-1.html">Winter Hotel</a></li>
                                                <li><a href="index-2.html">Summer Hotel</a></li>
                                                <li><a href="delvatore-fixed/index.html">Fixed Menu Style</a></li>
                                                <li><a href="index-2.html">Scrolled Menu Style</a></li>


                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item"><a href="about.html" className="nav-link">About us</a></li>
                                    <li className="nav-item"><a href="rooms.html" className="nav-link">Our Rooms</a>
                                    </li>
                                    <li className="nav-item sub-menu sub-menu-2">
                                        <a href="#" className="nav-link">Pages <i className="fa fa-angle-down"
                                                                                  aria-hidden="true"></i></a>
                                        <div className="sf-mega">
                                            <ul>

                                                <li><a href="about.html">About us</a></li>
                                                <li><a href="rooms.html">Rooms</a></li>
                                                <li><a href="reservation.html">Reservation</a></li>
                                                <li><a href="details.html">Room Details</a></li>
                                                <li><a href="404.html">404 Page</a></li>


                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item sub-menu sub-menu-2">
                                        <a href="#" className="nav-link">Blog <i className="fa fa-angle-down"
                                                                                 aria-hidden="true"></i></a>
                                        <div className="sf-mega">
                                            <ul>

                                                <li><a href="blog.html">Blog</a></li>
                                                <li><a href="post.html">Blog Post</a></li>

                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item"><a href="contacts.html" className="nav-link">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
    )
}