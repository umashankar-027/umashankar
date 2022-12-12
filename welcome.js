import React from "react";
import './style.css';
import ab from './cyber.jpg'

function Welcome(){

    return(

        <div>
            <div className="container-head">
                <h3>SRI ACHIVERS COLLEGE OF ENGINEERING AND TECHNOLOGY</h3>
                <h3>AN AUTONOMOUS INSTITUTION</h3>
            </div>
            <div className="container-top">
                <button>HOME</button>
                <button id="b2">TECHNICAL EVENTS</button>
                <button>QUIZ</button>
                <button>WORKSHOP</button>
            </div>
            <div className="container-mid">
                <img src={ab}></img>
                <h4 className="m1">
                Are you a college student? Are you interested in </h4>
                <h4 className="m1">cybersecurity— one of the fastest growing sectors </h4><h4 className="m1">in the tech industry?
                </h4>
                <h4 className="m1">
                Would you like to work at one of the leading </h4>
                <h4 className="m1">cybersecurity companies in the market? 
                If you want </h4><h4 className="m1">to win a cash prize of 40,000 INR, 
                then this is an </h4><h4 className="m1">offer and an opportunity that you cannot refuse
                </h4>
                <div className="con-e">
                <center><h4>EVENT ORGANIZED BY</h4></center>

                {" "}
                <h4>SRI ACHIVERS COLLEGE OF  TECHNOLOGY</h4>

                <center><bold>EVENT ORGANIZERS</bold>
                    {" "}
                    <h4> 1.NARESH</h4>
                     <h4>2.RANJITH</h4>

                <h4>CONTACT NUMBER</h4>
                <h4>6384117678</h4>
                <h4>8946003807</h4>


                <h4>CASH PRIZE</h4>
                <h4>Rs 100000
                </h4></center>
                </div>
            </div>
            <div className="container-footer">
                <h3 id="f1">Contact us : </h3>
                <h4 className='f2'>Sri Archivers Coimbatore-641042</h4>
                <h4 className='f2'>phone 0422-2984567-682 </h4>
                <h4 className='f2'>email info: @SAI.edu.in </h4>
            </div>
            <div className="regis-btn">
                <button type="button">REGISTER</button>
            </div>
            <div className="back-btn">
               <button type="button">BACK</button>
            </div>
        </div>

    )


}
export default Welcome;