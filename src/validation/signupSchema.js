import * as yup from "yup";

const signupSchema = yup.object().shape({
    username: yup
    .string()
    .trim()
    .required("Please enter your username"),
    
    password: yup
    .string()
    .trim()
    .required("Please enter your password"),
})

export default signupSchema;