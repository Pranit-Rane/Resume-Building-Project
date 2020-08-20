import React, { Component } from "react";

export default class Projects extends Component{
    render(){
        return(
            <div>
                <div className="row top-buffer">
                    <div className="col-md-11 col-xs-11">
                    <h5><span>PROJECT</span></h5>
                    </div>
                </div>
                    <div className="row top-buffer">
                        <div className="col-md-5 col-xs-5" align="left">
                           <b>Hotel Management System:</b>
                        </div>
                        <div className="col-md-5 col-xs-5" align="left">
                        This system is a web-based application that allows the hotel manager to handle all hotel activities online. It
                        provides room booking, staff management and other necessary hotel management features. Front-end was
                        developed in Eclipse IDE and the back-end in MySQL.
                        <div className="row top-buffer">
                        &nbsp;&nbsp;&nbsp; Tools and Languages Used: Java, SQL
                        </div>
                        </div>
                    </div>
            </div>
        )
    }
}