import React, { Component } from "react";

export default class Skills extends Component{
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-11 col-xs-11">
                    <h5><span>SKILLS</span></h5>
                    </div>
                </div>
                    <div className="row top-buffer">
                        <div className="col-md-6 col-xs-6" align="left">
                           <b>Languages:</b>
                        </div>
                        <div className="col-md-6 col-xs-6" align="left">
                            C#, C++, Java, Javascript.
                        </div>
                    </div>
                    <div className="row top-buffer">
                        <div className="col-md-6 col-xs-6" align="left">
                            <b>Database:</b>
                        </div>
                        <div className="col-md-6 col-xs-6" align="left">
                            MySql.
                        </div>
                    </div>
                    <div className="row top-buffer">
                        <div className="col-md-6 col-xs-6" align="left">
                            <b>Web Technologies:</b>
                        </div>
                        <div className="col-md-6 col-xs-6" align="left">
                            Hibernate, ApringBoot, React.
                        </div>
                    </div>
                    <div className="row top-buffer">
                        <div className="col-md-6 col-xs-6" align="left">
                            <b>Tools:</b>
                        </div>
                        <div className="col-md-6 col-xs-6" align="left">
                            Visual Studio Code, Spring Tool Suite, Eclipse, Netbeans, MySql workBench.
                        </div>
                    </div>
            </div>
        )
    }
}