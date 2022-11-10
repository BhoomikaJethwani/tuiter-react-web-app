import React from "react";
import WhatsHappening from "./whats-happening";
import TuitsList from "../tuits/tuits-list";

function HomeComponent (){
    return(
        <>
            <h4>Home</h4>
            <div className="container border">
                <div className="d-sm-block d-md-block d-lg-block border-dark">
                    <WhatsHappening/>
                </div>

                <div className="d-sm-block d-md-block d-lg-block  ">
                    <TuitsList/>
                </div>
            </div>


        </>
    );
};
export default HomeComponent;