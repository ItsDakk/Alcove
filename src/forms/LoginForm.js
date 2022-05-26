import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '../components/Button';

const FormSchema = Yup.object(
    {
        email: Yup.string().email("Must be a valid email formet").required(),
        password: Yup.string().required()
    }
)

const initialValues = {
    email: '',
    password: '',

}

const handlSubmit = (values) => {
    console.log(values)
}

export default function LoginForm() {

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: FormSchema,
        onSubmit: (values) => { handlSubmit(values) }
    })


return(
    <form onSubmit = { formik.handleSubmit }>
        <TextField
            id = 'email'
            name = 'email'
            fullWidth
            sx = {{ mb:2, mt:2 }}
            label = 'Email'
            value = { formik.values.email }
            onChange = { formik.handleChange }
            error = { formik.touched.email && Boolean(formik.errors.email) }
            helperText = { formik.touched.email && formik.errors.email }
        />

        <TextField
            id = 'password'
            name = 'assword'
            fullWidth
            sx = {{ mb:2, mt:2 }}
            label = 'Password'
            value = { formik.values.password }
            onChange = { formik.handleChange }
            error = { formik.touched.password && Boolean(formik.errors.password) }
            helperText = { formik.touched.password && formik.errors.password }
        />

        <Button type='submit' sx = {{ width: '100px' }}>Login</Button>

    </form>
)
}