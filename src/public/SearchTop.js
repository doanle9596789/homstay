import React from "react";


function SearchTop (){
    return (
        <div className="search-wrapper">
            <div className="container">
                <div className="search-inner clearfix">
                    <div className="search-field">
                        <input type="text" className="form-control" value="" placeholder="Enter Your Search..."/>
                    </div>
                    <a href="#" className="search-btn search-close"><i className="fa fa-times" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    );
}

export default SearchTop;