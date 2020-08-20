import React, { Component } from "react";

export default class EducationDetails extends Component{
    render(){
        return(
            <div>
            <div className="row top-buffer">
                <div className="col-md-11 col-xs-11">
                <h5><span>EDUCATION DETAILS</span></h5>
                </div>
            </div>
                <div className="row top-buffer">
                    <div className="col-md-5 col-xs-5" align="left">
                       <b>M.Sc.(Computer Science):</b>
                    </div>
                    <div className="col-md-5 col-xs-5" align="left">
                        2019-2021(PRESENT).<br></br>
                        Christ College Pune.<br></br>
                        70.3%
                    </div>
                </div>
                <div className="row top-buffer">
                    <div className="col-md-5 col-xs-5" align="left">
                        <b>B.Sc(Computer Science):</b>
                    </div>
                    <div className="col-md-5 col-xs-5" align="left">
                        2014-2019.<br></br>
                        Christ College Pune.<br></br>
                        Grade B.

                    </div>
                </div>
                <div className="row top-buffer">
                    <div className="col-md-5 col-xs-5" align="left">
                        <b>H.S.C:</b>
                    </div>
                    <div className="col-md-5 col-xs-5" align="left">
                    2012-2014.<br></br>
                    S.M. Choksey Junior College Pune.<br></br>
                    61.9%.
                    </div>
                </div>
                <div className="row top-buffer">
                    <div className="col-md-5 col-xs-4" align="left">
                        <b>S.S.C:</b>
                    </div>
                    <div className="col-md-5 col-xs-4" align="left">
                    2012 Passout.<br></br>
                    J.N. Petit Technical High School Pune.<br></br>
                    79.9%.
                    </div>
                </div>
        </div>
        )
    }
}