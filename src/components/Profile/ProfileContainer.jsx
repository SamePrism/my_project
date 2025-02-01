import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setProfile, getStatus, updateStatus } from "../../redux/profile-reducer";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { withRouter } from "../../HOC/withRouter";
import { compose } from "redux";
import { getProfileSelector, getStatusSelector } from "../../redux/profile.selector";

let mapStateToProps = (state) => ({
  profile: getProfileSelector(state),
  status: getStatusSelector(state),
});

class ProfileContainer extends React.Component {

  componentDidMount = () => {
    let profileID = this.props.router.params.profileId;
    if (!profileID) {
      profileID = 31535;
    }
    // 31535 мой айди
    this.props.setProfile(profileID);
    this.props.getStatus(profileID);

  }
  render() {

    return <Profile {...this.props} />;
  }
}

export default compose(
  connect(mapStateToProps, { setProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
