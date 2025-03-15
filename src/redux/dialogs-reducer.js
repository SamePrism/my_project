export const sendMessage = (newMessageText) => {
  return {
    type: "SEND-MESSAGE",
    newMessageText: newMessageText,
  };
};

export const selectDialog = (id) => {
  return {
    type: "SELECT-DIALOG",
    id: id,
  };
};

let initialState = {
  dialogs: [
    {
      id: 1,
      name: "диалог 1",
      messages: [
        { id: 1, message: "Кдассный проект!" }
      ],
      active: true,
    },
    {
      id: 2,
      name: "диалог 2",
      messages: [{ id: 5, message: "амогус" }],
      active: false,
    },
    { id: 3, name: "диалог 3", messages: [{ id: 6, message: "Классный проект!" }], },
    { id: 4, name: "диалог 4", messages: [{ id: 7, message: "Классный проект!" }], },
    { id: 5, name: "диалог 5", messages: [{ id: 8, message: "Классный проект!" }], },
    { id: 6, name: "диалог 6", messages: [{ id: 9, message: "Классный проект!" }], },
  ],
  
  newMessageText: "",
};

export const dialogsReducer = (state = initialState, action) => {
  let stateCopy = { ...state };
  switch (action.type) {
    case "SEND-MESSAGE":
      
      let newMessage = {
        id: 6,
        message: action.newMessageText,
      };
      let activeIndex = stateCopy.dialogs.findIndex((d) => d.active === true);
      stateCopy.dialogs[activeIndex].messages = [...state.dialogs[activeIndex].messages];
      stateCopy.dialogs[activeIndex].messages.push(newMessage);
      stateCopy.newMessageText = "";
      return stateCopy;



    case "SELECT-DIALOG":
      let index = stateCopy.dialogs.findIndex((d) => d.id === action.id);
      stateCopy.dialogs.forEach((d) => {
        d.active = false;
      });
      stateCopy.dialogs[index].active = !stateCopy.dialogs[index].active;
      return stateCopy;
    default:
      return stateCopy;
  }
};
