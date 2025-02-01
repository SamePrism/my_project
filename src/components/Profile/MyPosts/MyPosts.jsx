import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Form, Field } from "react-final-form";
import { maxLength500, requiredField, composeValidators } from "../../../Utilities/validators";
import { FormControls } from "../../common/Forms/FormsControls";



const MyPosts = React.memo((props) => {
  let postsElements = props.posts.map((p) => (
    <Post
      id={p.id}
      message={p.message}
      likesCount={p.likesCount}
      commentsCount={p.commentsCount}
      toggleLikes={props.toggleLikes}
      like={p.like}
    />
  ));

  let addPosts = (text) => {
    props.addPosts(text);
  };

  return (
    <div className={s.postsBlock}>
      <Form
        initialValues={{}}
        onSubmit={(values) => {
          addPosts(values.postInput);
        }}
        validate={(values) => {}}
      >
        {({ handleSubmit, pristine, submitting }) => (
          <form onSubmit={handleSubmit}>
            <h3>Мои публикации</h3>
            <div>
              <Field
                element={"textarea"}
                component={FormControls}
                placeholder={"Начинайте творить..."}
                name="postInput"
                className={s.text}
                validate={composeValidators(requiredField, maxLength500)}
              />

              <div>
                <button
                  type="submit"
                  className={s.btn}
                  disabled={pristine || submitting}
                >
                  Опубликовать
                </button>
              </div>
            </div>
          </form>
        )}
      </Form>

      <div className={s.posts}>{postsElements}</div>
    </div>
  );
});

export default MyPosts;
