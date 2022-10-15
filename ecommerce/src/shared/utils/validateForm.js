import * as regex from '../constants/regex';

const regexMapper = {
    "first_name": regex.NAME_REGEX,
    "last_name": regex.NAME_REGEX,
    "username": regex.USERNAME_REGEX,
    "email": regex.EMAIL_REGEX,
    "phone": regex.PHONE_REGEX,
    "sex": regex.GENDER_REGEX,
    "address": regex.ADDRESS_REGEX,
    "password": regex.PASSWORD_REGEX
}

const error = {
    "first_name": "Invalid firstname",
    "last_name": "Invalid lastname",
    "username": "Invalid username",
    "email": "Invalid email",
    "phone": "Phone number is invalid",
    "sex": "Please choose one",
    "address": "Invalid address",
    "password": "invalid password"
}
export default function validateForm(name, value) {

    if (value === "") {
        return `Please enter your ${name}`
    } else {
        if (!regexMapper[name].test(value)) {
            return error[name];
        }
    }
    return ""
}

export const onSubmitValidate = (user,form) => {
    let errorObject = {}
    if (form === "signin"){
    const firstNameError = validateForm("first_name", user["first_name"])
    const lastNameError = validateForm("last_name", user["last_name"])
    const userNameError = validateForm("username", user["username"])
    const emailError = validateForm("email", user["email"])
    const phoneError = validateForm("phone", user["phone"])
    const genderError = validateForm("sex",user["sex"])
    const addressError = validateForm("address", user["address"])
    const passwordError = validateForm("password", user["password"])

    errorObject = {
        "first_name": firstNameError,
        "last_name": lastNameError,
        "username": userNameError,
        "email": emailError,
        "phone": phoneError,
        "sex": genderError,
        "address": addressError,
        "password": passwordError
    }
}else if (form === "login"){
    const userNameError = validateForm("username", user["username"])
    const passwordError = validateForm("password", user["password"])

    errorObject = {
        "username": userNameError,
        "password": passwordError
    }

}
    return errorObject

}

