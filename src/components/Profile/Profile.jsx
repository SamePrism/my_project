import React from "react";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";


const Profile = (props) => {
    if (!props.profile) {
      return <Preloader />;
    }
  return (
    <div>
      <ProfileInfo updateStatus = {props.updateStatus} status= {props.status} profile = {props.profile}/>
      {props.profile.userId === 31535 && <MyPostsContainer />}
    </div>
  );
};

export default Profile;
