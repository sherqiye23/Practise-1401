import Container from "react-bootstrap/esm/Container";
import { Helmet } from "react-helmet";
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import {url, string, required, integer, positive, object, shape} from 'yup'

// const validationSchema = object().shape({
//     image: url().required("Required"),
//     name: string().required("Required"),
//     price: positive().integer().required("Required")
// })


export default function AddPage() {
    return (
        <>
            <Helmet>
                <title>Add Page</title>
            </Helmet>
            <Container>
                <Formik
                    initialValues={{ name: '', image: '', price: null }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log(values);
                        
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Field type="text" name="image" />
                            <ErrorMessage name="image" component="div" />
                            <Field type="text" name="name" />
                            <ErrorMessage name="name" component="div" />
                            <Field type="number" name="price" />
                            <ErrorMessage name="price" component="div" />
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </Container>
        </>
    )
}