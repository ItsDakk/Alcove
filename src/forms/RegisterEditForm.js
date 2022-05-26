import React from 'react';
import * as Yup from 'yup';
import { formControlClasses } from "@mui/material";
import { useFormik } from 'formik';
import Button from '../components/Button';
import TextField from '@mui/material/TextField';
import { FormControl, FormHelperText, InputLabel, Select } from '@mui/material';

const FormSchema = Yup.object(
    {
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
        email: Yup.string().email("Must be a valid e-mail format").required(),
        password: Yup.string().required()
    }
)


export default function RegisterEditForm({ user }) 

{
    const initialValues = {
        firstName: user?.firstName ?? '',
        lastName: user?.lastName ?? '',
        email: user?.email ?? '',
        password: user?.password ?? ''
    }


    const handleSubmit = (values, resetForm) => {
        if (user) {
            console.log('Edit Profile')
        } else {
            console.log('Register')
        }
        console.log(values)
        resetForm(initialValues)
}

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: FormSchema,
        onSubmit: (values, { resetForm }) => { handleSubmit(values, resetForm) },
        enableReinitialize: true
    })

    return(
    <form onSubmit = { formik.handleSubmit }>
        <TextField
            id = 'firstName'
            name = 'firstName'
            fullWidth
            sx = {{ mb:2, mt:2 }}
            label = ''
            placeholder = 'First Name'
            value = { formik.handleChange }
            onChange = { formik.handleChange }
            error = { formik.touched.firstName && Boolean(formik.errors.firstName) }
            helperText = { formik.touched.firstName && formik.errors.firstName }
        />

    <TextField
            id = 'lastName'
            name = 'lastName'
            fullWidth
            sx = {{ mb:2}}
            label = ''
            placeholder = 'Last Name'
            value = { formik.handleChange }
            onChange = { formik.handleChange }
            error = { formik.touched.lastName && Boolean(formik.errors.lastName) }
            helperText = { formik.touched.lastName && formik.errors.lastName }
        />

    <TextField
            id = 'email'
            name = 'email'
            fullWidth
            sx = {{ mb:2}}
            label = ''
            placeholder = 'Email'
            value = { formik.handleChange }
            onChange = { formik.handleChange }
            error = { formik.touched.email && Boolean(formik.errors.email) }
            helperText = { formik.touched.email && formik.errors.email }
        />

    <TextField
            id = 'password'
            name = 'password'
            fullWidth
            sx = {{ mb:2}}
            label = ''
            placeholder = 'Password'
            value = { formik.handleChange }
            onChange = { formik.handleChange }
            error = { formik.touched.password && Boolean(formik.errors.password) }
            helperText = { formik.touched.password && formik.errors.password }
        />

    <Button type='submit' sx = {{ width: '100px' }}>Register</Button>  

    </form>
    )
}