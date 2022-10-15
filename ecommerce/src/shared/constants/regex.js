export const NAME_REGEX = /^[a-zA-Z\s]+$/;
export const USERNAME_REGEX = /^([a-zA-Z0-9._@-]{2,20})$/;
export const EMAIL_REGEX = /^([a-zA-Z0-9]{5,20})+@([a-zA-Z]{3,5})+\.([a-zA-Z\.]{3,10})$/;
export const PHONE_REGEX = /^([9876])[0-9]{9}$/;
export const GENDER_REGEX = /^[MFO]$/
export const ADDRESS_REGEX = /^[a-zA-Z0-9\s.,/-]+$/;
export const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
