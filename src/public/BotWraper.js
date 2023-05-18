import React from "react";
export default function BotWraper(){
    return(
        <>
            <div className="bot1-wrapper">
                <div className="container">
                    <div className="bot1 clearfix">
                        <div className="logo2_wrapper">
                            <a href="index-2.html" className="logo2">
                                <img src="images/logo1.png" alt="" className="img-fluid"/>
                            </a>
                        </div>
                        <div className="social2-wrapper">
                            <ul className="social2">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                            </ul>
                        </div>
                        <p>
                            <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum, ex at
                                convallis
                                interdum, justo lectus posuere nulla, at consequat odio mauris quis sem. </i>
                        </p>
                    </div>
                </div>
            </div>
            <div className="bot2-wrapper">
                <div className="container">
                    <div className="bot2 clearfix">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="bot2-title">Contact Info</div>
                                <div className="contact1">
                                    <b>A:</b> 41 Gridgum Sreet 121/2 New-York, USA
                                </div>
                                <div className="contact1">
                                    <b>P:</b> (00) 123 456 789
                                </div>
                                <div className="contact1">
                                    <b>F:</b> (00) 987 654 321
                                </div>
                                <div className="contact1">
                                    <b>E:</b> <a href="#">info.contact@yourdomain.com</a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="bot2-title">recent posts</div>
                                <div className="recent-post clearfix">
                                    <a href="#">
                                        <figure><img src="images/recent01.jpg" alt="" className="img-fluid"/></figure>
                                        <div className="caption">
                                            <div className="txt1">New Aqua Park Near The Hotel Delvatore</div>
                                            <div className="txt2">11 March, 2018</div>
                                        </div>
                                    </a>
                                </div>
                                <div className="recent-post clearfix">
                                    <a href="#">
                                        <figure><img src="images/recent02.jpg" alt="" className="img-fluid"/></figure>
                                        <div className="caption">
                                            <div className="txt1">Botanic Garden Near The Hotel Delvatore</div>
                                            <div className="txt2">23 March, 2018</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="bot2-title">BEST PLACES AROUND DELVATORE</div>
                                <ul className="best1 clearfix">
                                    <li><a href="#"><img src="images/best01.jpg" alt="" className="img-fluid"/></a></li>
                                    <li><a href="#"><img src="images/best02.jpg" alt="" className="img-fluid"/></a></li>
                                    <li><a href="#"><img src="images/best03.jpg" alt="" className="img-fluid"/></a></li>
                                    <li><a href="#"><img src="images/best04.jpg" alt="" className="img-fluid"/></a></li>
                                    <li><a href="#"><img src="images/best05.jpg" alt="" className="img-fluid"/></a></li>
                                    <li><a href="#"><img src="images/best06.jpg" alt="" className="img-fluid"/></a></li>
                                    <li><a href="#"><img src="images/best07.jpg" alt="" className="img-fluid"/></a></li>
                                    <li><a href="#"><img src="images/best08.jpg" alt="" className="img-fluid"/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bot3-wrapper">
                <div className="container">
                    <div className="bot3 clearfix">
                        <ul className="menu-bot">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Customer Service</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>

                        <div className="copyrights">Copyright @2018 Made with <i className="fa fa-heart"
                                                                                 aria-hidden="true"></i> By <a href="#"
                                                                                                               target="_blank">Mecovache</a>.
                            All Rights Reserve
                        </div>

                    </div>
                </div>
            </div>
            </>
    )
}