import React from "react";
//import "./index.css"
import userProfile from "./userProfile.js";

const ProfileComponent = () => {

    const profile = {
        "id": 12,
        "firstName": "Bhoomika",
        "lastName": "Jethwani",
        "handle": "@bhoomsdj",
        "profilePicture": "https://media.istockphoto.com/id/1163538605/photo/laughing-teenager-with-folded-arms.jpg?s=612x612&w=0&k=20&c=xKYHYEkpHL-pWfzCFxnIJKM0zZvCNwu8yp9dAJP90qY=",
        "bannerPicture": "https://cdn.quotesgram.com/img/48/5/1503676473-blog-hero-banner-quote.jpg",
        "bio": "Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.",
        "website": "youtube.com/webdevtv",
        "location": "Boston, MA",
        "dateOfBirth": "7/7/1968",
        "dateJoined": "4/2009",
        "followingCount": 340,
        "followersCount": 223
    }

    return(
        <div className="container">
                <div >
                    <div className="zindex-bring-to-front">
                        <img width={600} src={profile.bannerPicture} alt=""/>
                    </div>
                    <div className="zindex-bring-to-front">
                        <img width={100} className=" rounded-5 " src={profile.profilePicture} alt=""/>

                    </div>
                </div>

            <div className="fw-bold">

                {profile.firstName} {profile.lastName}
            </div>

            <div>
                {profile.handle}
            </div>
            <div className=" m-1">
                {profile.bio}
            </div>
            <div className="row m-2 p-2">
                <div className="col-4">
                    <i className="bi bi-geo-alt"></i>
                    {profile.location}
                </div>
                <div className="col-4">
                    <i className="bi bi-balloon"></i>
                    {profile.dateOfBirth}
                </div>
                <div className="col-4">
                    <i className="bi bi-calendar2-week"></i>
                    Joined
                    {profile.dateJoined}
                </div>
            </div>

            <div className="row m-lg-3">
                <div className="col-6">
                    Following
                    {profile.followingCount}
                </div>
                <div className="col-6">
                    Followers
                    {profile.followersCount}
                </div>

            </div>
        </div>



    );


};
export default ProfileComponent;