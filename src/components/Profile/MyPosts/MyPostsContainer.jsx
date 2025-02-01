import MyPosts from "./MyPosts";

import {

  addPosts,
  toggleLikes
} from "../../../redux/profile-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});



const MyPostsContainer = connect(mapStateToProps, {
  addPosts,
  toggleLikes
})(MyPosts);

export default MyPostsContainer;
