import React from "react";
export default function Body(){
    return(
        <div id="home" className="">
            <div id="home-inner" className="home-inner">
                <div id="slides_wrapper" className="">
                    <div id="slides">
                        <ul className="slides-container">
                            <li>
                                <img src="images/slide01.jpg" alt="" className="img"/>
                            </li>
                            <li>
                                <img src="images/slide04.jpg" alt="" className="img"/>
                            </li>
                            <li>
                                <img src="images/slide03.jpg" alt="" className="img"/>
                            </li>
                            <li>
                                <img src="images/slide02.jpg" alt="" className="img"/>
                            </li>
                            <li>
                                <img src="images/slide05.jpg" alt="" className="img"/>
                            </li>
                            <li>
                                <img src="images/slide06.jpg" alt="" className="img"/>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="slide-text-wrapper">
                    <div className="container">
                        <div className="slide-text clearfix">
                            <div className="img1">
                                <img src="images/slide-logo.png" alt="" className="img-fluid"/>
                            </div>
                            <div className="txt1"><span>DELVATORE<i><img src="images/slide-logo2.png" alt=""
                                                                         className="img-fluid"/></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slide-buttons-wrapper">
                    <div className="container">
                        <div className="slide-buttons clearfix">
                            <div className="slide-button">
                                <a href="#">
                                    <div className="ic"><img src="images/slide-ic1.png" alt="" className="img-fluid"/>
                                    </div>
                                    <div className="hr"></div>
                                    <div className="txt1">Hotel</div>
                                </a>
                            </div>
                            <div className="slide-button">
                                <a href="#">
                                    <div className="ic"><img src="images/slide-ic2.png" alt="" className="img-fluid"/>
                                    </div>
                                    <div className="hr"></div>
                                    <div className="txt1">Breakfast</div>
                                </a>
                            </div>
                            <div className="slide-button">
                                <a href="#">
                                    <div className="ic"><img src="images/slide-ic3.png" alt="" className="img-fluid"/>
                                    </div>
                                    <div className="hr"></div>
                                    <div className="txt1">Fitness Club</div>
                                </a>
                            </div>
                            <div className="slide-button">
                                <a href="#">
                                    <div className="ic"><img src="images/slide-ic4.png" alt="" className="img-fluid"/>
                                    </div>
                                    <div className="hr"></div>
                                    <div className="txt1">Support 24/7</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="booking-wrapper">
                <div className="container">
                    <div className="booking-inner clearfix">
                        <form action="javascript:;" className="form1 clearfix">
                            <div className="col1 c1">
                                <div className="input1_wrapper">
                                    <label>Check in</label>
                                    <div className="input1_inner">
                                        <input type="text" className="form-control input datepicker"
                                               placeholder="Check in"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col1 c2">
                                <div className="input1_wrapper">
                                    <label>Check out</label>
                                    <div className="input1_inner">
                                        <input type="text" className="form-control input datepicker"
                                               placeholder="Check out"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col2 c3">
                                <div className="select1_wrapper">
                                    <label>Adults</label>
                                    <div className="select1_inner">
                                        <select className="select2 select" style={{width: 100}}>
                                            <option value="1">1 Adult</option>
                                            <option value="2">2 Adults</option>
                                            <option value="3">3 Adults</option>
                                            <option value="4">4 Adults</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col2 c4">
                                <div className="select1_wrapper">
                                    <label>Children</label>
                                    <div className="select1_inner">
                                        <select className="select2 select"  style={{width: 100}}>
                                            <option value="1">Children</option>
                                            <option value="1">1 Child</option>
                                            <option value="2">2 Children</option>
                                            <option value="3">3 Children</option>
                                            <option value="4">4 Children</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col2 c5">
                                <div className="select1_wrapper">
                                    <label>Rooms</label>
                                    <div className="select1_inner">
                                        <select className="select2 select"  style={{width: 100}}>
                                            <option value="1">1 Room</option>
                                            <option value="2">2 Rooms</option>
                                            <option value="3">3 Rooms</option>
                                            <option value="4">4 Rooms</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col3 c6">
                                <button type="submit" className="btn-form1-submit">CHECK AVAILABILITY</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}