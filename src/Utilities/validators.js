export const composeValidators =
(...validators) =>
(value) =>
  validators.reduce(
    (error, validator) => error || validator(value),
    undefined
  );

export const requiredField = value => {
    if (value) return undefined
    return 'Это поле не может быть пустым!'
}


export const maxLength500 = value => {
    if (value.length <= 500) return undefined
    return `Максимальная длина поля - 500 символов`
}

export const emailValidate = value => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (emailRegex.test(value)) return undefined
    return 'Неверный формат электронной почты!'
}