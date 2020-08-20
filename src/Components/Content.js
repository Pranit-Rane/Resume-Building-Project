import React, { Component } from "react";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";
import EducationDetails from "./EducationDetails";
import Projects from "./Projects";
import Certificates from "./Certificates";
import SecondContent from "./SecondContent";

export default class Content extends Component{
    render(){
        return(
            <div>
                <h3>PRANIT RANE</h3>
                <div className="row">
                    <div className="col-md-9 col-xs-9">
                        <Skills/>
                        <WorkExperience/>
                        <EducationDetails/>
                        <Projects/>
                        <Certificates/>
                    </div>
                    <div className="col-md-2 col-xs-2 text-right">
                        <SecondContent/>
                    </div>
                </div>
                <div className="col-md-9 col-xs-9">
                    <h5></h5> 
                </div> 
                             
            </div>
        )
    }
}