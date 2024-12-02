import * as Yup from 'yup'

export const validation = Yup.object({
    name:Yup.string().min(2).required("enter your name"),
    email:Yup.string().email().required("Enter your email"),
    password:Yup.string().min(6).required("enter password"),
    cpassword:Yup.string().matches(Yup.ref('password'))
})