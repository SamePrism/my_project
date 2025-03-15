import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar"
import { Route, Routes } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import { withRouter } from "./HOC/withRouter";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const Login = React.lazy(() => import('./components/Login/Login'))
const Music = React.lazy(() => import('./components/Music/Music'))
const NewsContainer = React.lazy(() => import('./components/News/NewsContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
    console.log("App initialized");
  }
  render() {
    if (!this.props.initialized) {
      console.log(this.props.initialized);
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          {
            <React.Suspense fallback={<Preloader />}>
              <Routes>
                <Route path="/dialogs/*" element={<DialogsContainer />} />
                <Route path="/profile/*" element={<ProfileContainer />} />
                <Route
                  path="/profile/:profileId?"
                  element={<ProfileContainer />}
                />
                
                <Route path="/music" element={<Music />} />
                <Route path="/news" element={<NewsContainer />} />
                <Route path="/users" element={<UsersContainer />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </React.Suspense>
          }
        </div>
      </div>
    );
  }
}
let mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
