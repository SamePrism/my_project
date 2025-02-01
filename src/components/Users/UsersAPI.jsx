import React from "react";
import User from "./User/User";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersAPI extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  getUsers() {
    let usersList = this.props.users.map((user) => (
      <User
        id={user.id}
        photoUrl={user.photos.small}
        name={user.name}
        status={user.status}
        country={"Россия"}
        city={"Москва"}
        followed={user.followed}
        
        followingInProgress={this.props.followingInProgress}
        
        followUser={this.props.followUser}
        unfollowUser={this.props.unfollowUser}
      />
    ));
    return usersList;
  }

  onPageChanged = (page) => {
    this.props.getUsers(page, this.props.pageSize);
    this.props.setCurrentPage(page);
  };

  render() {
    return (
      <>
        {this.props.inProgress ? (
          <Preloader />
        ) : (
          <Users
            inProgress={this.props.inProgress}
            onPageChanged={this.onPageChanged}
            usersList={this.getUsers()}
            currentPage={this.props.currentPage}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
          />
        )}
      </>
    );
  }
}

export default UsersAPI;
