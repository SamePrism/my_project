import React, { useState, useEffect } from "react";
import s from "./ProfileInfo.module.css";


const ProfileStatus = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect( () => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    if (props.status !== status) {
        props.updateStatus(status); 
      }
  };
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div className={s.about}>
      {editMode ? (
        <input
          data-testid = "input_status"
          onChange={onStatusChange}
          autoFocus={true}
          onBlur={deactivateEditMode}
          value={status}
        />
      ) : (
        <span data-testid = "span_status" onDoubleClick={activateEditMode}> {status} </span>
      )}
    </div>
  );
};

export default ProfileStatus;
