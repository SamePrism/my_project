import { connect } from "react-redux";
import {
  setCurrentPage,
  followUser,
  unfollowUser,
  getUsers,
} from "../../redux/users-reducer";
import UsersAPI from "./UsersAPI";
import {
  getCurrentPageSelector,
  getFollowingInProgressSelector,
  getIsFetchingSelector,
  getPageSizeSelector,
  getTotalUsersCountSelector,
  getUsersSelector,
} from "../../redux/users-selectors";


let mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
    currentPage: getCurrentPageSelector(state),
    totalUsersCount: getTotalUsersCountSelector(state),
    pageSize: getPageSizeSelector(state),
    inProgress: getIsFetchingSelector(state),
    followingInProgress: getFollowingInProgressSelector(state),
  };
};

const UsersContainer = connect(mapStateToProps, {
  setCurrentPage,
  getUsers,
  followUser,
  unfollowUser,
})(UsersAPI);
export default UsersContainer;
