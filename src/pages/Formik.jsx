import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as  Yup from "yup";

const FormikSignUP = () => {


    const initialData = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    }

    const signUpSchema = Yup.object({
        firstName: Yup.string().min(4, "first name should be greather 3").max(8, "firstName should be less than 9").required("should not be empty"),

        lastName: Yup.string().min(4, "last name should be greather 3").max(8, "last Name should be less than 9").required("should not be empty"),
        email: Yup.string().email("should be valid email").required("required *"),

        password: Yup.string().min(4, "should be greater than 3").max(6, "should be less than 7").required("*"),

    })


    return (
        <div className="container">
            <Formik
                initialValues={initialData}

                validationSchema={signUpSchema}

                onSubmit={(values) => {
                    console.log("values:", values)
                }}
            >
                {() => {
                    return <Form>
                        <label>First Name</label>
                        <Field type="text" name="firstName" />
                        <br />
                        <ErrorMessage className='text-danger' name='firstName' /> <br />
                        <label>Last Name</label>
                        <Field type="text" name="lastName" /> <br />
                        <ErrorMessage className='text-secondary' name='lastName' /> <br />
                        <label>email</label>
                        <Field type="email" name="email" /> <br />
                        <ErrorMessage className='text-primary bg-danger' name='email' /> <br />
                        <label>password</label>
                        <Field type="password" name="password" /> <br />
                        <ErrorMessage className='text-danger' name='password' /> <br />
                        <button className='btn btn-success' type='submit'>submit</button>
                    </Form>
                }

                }
            </Formik>
        </div>
    )
}

export default FormikSignUP;