export const PreviousPageActionCreator = () => {
  return {
    type: "PREVIOUS-PAGE",
  };
};
export const NextPageActionCreator = () => {
  return {
    type: "NEXT-PAGE",
  };
};

let initialState = {
  news: [
    {
      id: 9,
      title: "Небольшой юбилей",
      description: "Ровно месяц в разработке. Впереди еще много всего",
      date: "29-08-2024",
    },
    {
      id: 8,
      title: "Улучшение интерфейса",
      description: "Добавлена валидация полей во всех разделах соцсети",
      date: "24-08-2024",
    },
    {
      id: 7,
      title: "Обновление в приложении",
      description: "Добавлен механизм входа/выхода из аккаунта",
      date: "22-08-2024",
    },
    {
      id: 6,
      title: "Обновление в приложении",
      description: "Добавлена страница авторизации",
      date: "17-08-2024",
    },
    {
      id: 5,
      title: "Исправление багов",
      description: "Небольшие исправления в скорости загрузки",
      date: "14-08-2024",
    },
    {
      id: 4,
      title: "Обновление в приложении",
      description: "Добавлена страница новостей",
      date: "11-08-2024",
    },
    {
      id: 3,
      title: "Обновление в приложении",
      description: "Добавлена страница пользователей",
      date: "08-08-2024",
    },
    {
      id: 2,
      title: "Обновление в приложении",
      description: "Добавлена страница сообщений",
      date: "05-08-2024",
    },
    {
      id: 1,
      title: "Запуск приложения",
      description: "Созданы первые файлы проекта, создана страница профиля",
      date: "29-07-2024",
    }
    
  ],
  start: 0,
  end: 3,
};

export const newsReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
    case "PREVIOUS-PAGE":
      // return {...state.start === 0 ?}
        
        if (stateCopy.start === 0) {
            return stateCopy;
        }
        stateCopy.start -= 1;
        stateCopy.end -= 1;
        return stateCopy;
    case "NEXT-PAGE":
        
        if (stateCopy.end === stateCopy.news.length) {
            return stateCopy;
        }
        stateCopy.start += 1;
        stateCopy.end += 1;
        return stateCopy;
    default:
      return stateCopy;
  }
};
