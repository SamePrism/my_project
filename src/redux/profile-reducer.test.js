
import { profileReducer, addPosts } from './profile-reducer';

it('новый пост добавлен', () => {
    let testData = {
        posts: [
          {
            id: 1,
            message: "Всем привте",
            likesCount: 12,
            commentsCount: 12,
            like: false,
          },
          {
            id: 2,
            message: "Мой второй пост",
            likesCount: 7,
            commentsCount: 3,
            like: false,
          },
          {
            id: 3,
            message: "Какой-то текст",
            likesCount: 4,
            commentsCount: 1,
            like: false,
          },
          { id: 4, message: "Вау", likesCount: 9, commentsCount: 5, like: false },
        ]}
    let newData = profileReducer(testData, addPosts('sus'));

    expect(newData.posts.length).toBe(testData.posts.length + 1);
});

it('корректное число лайков нового поста', () => {
    let testData = {
        posts: [
          {
            id: 1,
            message: "Всем привте",
            likesCount: 12,
            commentsCount: 12,
            like: false,
          },
          {
            id: 2,
            message: "Мой второй пост",
            likesCount: 7,
            commentsCount: 3,
            like: false,
          },
          {
            id: 3,
            message: "Какой-то текст",
            likesCount: 4,
            commentsCount: 1,
            like: false,
          },
          { id: 4, message: "Вау", likesCount: 9, commentsCount: 5, like: false },
        ]}
    let newData = profileReducer(testData, addPosts('sus'));

    expect(newData.posts[newData.posts.length-1].likesCount).toBe(0);
});
it('корректный текст нового поста', () => {
    let testData = {
        posts: [
          {
            id: 1,
            message: "Всем привте",
            likesCount: 12,
            commentsCount: 12,
            like: false,
          },
          {
            id: 2,
            message: "Мой второй пост",
            likesCount: 7,
            commentsCount: 3,
            like: false,
          },
          {
            id: 3,
            message: "Какой-то текст",
            likesCount: 4,
            commentsCount: 1,
            like: false,
          },
          { id: 4, message: "Вау", likesCount: 9, commentsCount: 5, like: false },
        ]}
    let newData = profileReducer(testData, addPosts('sus'));

    expect(newData.posts[newData.posts.length-1].message).toBe('sus');
});