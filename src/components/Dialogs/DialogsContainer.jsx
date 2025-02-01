import {
  sendMessage,
  selectDialog
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { compose } from "redux";
import { getDialogsPageSelector } from "../../redux/dialogs-selector";

let mapStateToProps = (state) => {
  return {
    dialogsPage: getDialogsPageSelector(state),
  };
};



export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { sendMessage, selectDialog})
)(Dialogs)
