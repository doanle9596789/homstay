import React from "react";
export default function New(){
    return(<div id="latest-news">
        <div className="container">

            <div className="title1">LATEST NEWS</div>
            <div className="title2">Lorem ipsum dolor sit amet concateur non troppo di saronno la prada</div>

            <div className="row">
                <div className="col-md-6">
                    <div className="latest-news-wrapper">
                        <div className="latest-news-inner">
                            <div className="latest-news clearfix">
                                <figure><img src="images/news01.jpg" alt="" className="img-fluid"/></figure>
                                <div className="caption">
                                    <div className="txt1"><a href="post.html">Hotel Delvatore's Events</a></div>
                                    <div className="txt2">Lorem ipsum dolor sit amet consetuer adipiscing elit, sed diam
                                        nonummy.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="latest-news-wrapper">
                        <div className="latest-news-inner">
                            <div className="latest-news clearfix">
                                <figure><img src="images/news02.jpg" alt="" className="img-fluid"/></figure>
                                <div className="caption">
                                    <div className="txt1"><a href="post-left.html">Delvatore’s new services</a></div>
                                    <div className="txt2">Lorem ipsum dolor sit amet consetuer adipiscing elit, sed diam
                                        nonummy.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>)
}