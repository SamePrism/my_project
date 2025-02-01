import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import evening_img from "../../../data/evening.webp";
import night_img from "../../../data/night.jpg";
import day_img from "../../../data/day.jpg";
import morning_img from "../../../data/morning.jpg";
import github from "../../../data/contacts/github.png";
import twitter from "../../../data/contacts/twitter.png";
import vk from "../../../data/contacts/vk.png";
import facebook from "../../../data/contacts/facebook.png";
import youtube from "../../../data/contacts/youtube.png";
import instagram from "../../../data/contacts/instagram.png";
import checkbox_yes from "../../../data/checkbox_yes.png";
import checkbox_no from "../../../data/checkbox_no.png";
import user from "../../../data/user.svg";
import ProfileStatus from "./ProfileStatus";


class ProfileInfo extends React.Component {
  getImage = () => {
    let images = [morning_img, day_img, evening_img, night_img];
    let hour = new Date().getHours();
    let image = "";
    if (hour <= 6) {
      image = images[3];
    } else if (hour > 6 && hour <= 12) {
      image = images[0];
    } else if (hour > 12 && hour <= 18) {
      image = images[1];
    } else {
      image = images[2];
    }
    return image;
  };

  getButtons = () => {
    let link_formatter = (link) => {
      if (!link) {
        return "";
      }
      if (link.includes("https://")) {
        return link;
      }
      return "https://" + link;
    };
    let links = [];
    let imagesLinks = [facebook, vk, twitter, instagram, youtube, github];
    let buttons = [];
    for (let i in this.props.profile.contacts) {
      if (i !== "website" && i !== "mainLink") {
        links.push(link_formatter(this.props.profile.contacts[i]));
      }
    }
    for (let i = 0; i < 6; i++) {
      if (!links[i]) {
        continue;
      }
      buttons.push(
        <a target="_blank" rel="noreferrer" href={links[i]}>
          <img src={imagesLinks[i]} alt="" />
        </a>
      );
    }
    return buttons;
  };

  render() {
    if (!this.props.profile) {
      return <Preloader />;
    }
    
    return (
      <div>
        <div>
          <img className={s.img} src={this.getImage()} alt="" />
        </div>
        <div className={s.profileBlock}>
          <img
            className={s.photo}
            src={
              this.props.profile.photos.large != null
                ? this.props.profile.photos.large
                : user
            }
            alt=""
          />
          <div className={s.descriptionBlock}>
            
            <span className={s.name}>{this.props.profile.fullName}</span>
            <ProfileStatus updateStatus={this.props.updateStatus} status={this.props.status} />
            <span className={s.job}>
              Ищу работу:
              <img
                src={
                  this.props.profile.lookingForAJob ? checkbox_yes : checkbox_no
                }
                alt=""
              />
            </span>
            <span className={s.jobDescription}>
              {this.props.profile.lookingForAJobDescription}
            </span>
            <div className={s.contacts}>{this.getButtons()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileInfo;
