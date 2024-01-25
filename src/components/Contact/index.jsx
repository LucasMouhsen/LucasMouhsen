
import { Form, Col, Alert } from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from "./index.module.css"

export default function Contact() {
    const initialValues = {
        strName: '',
        strMail: '',
        strText: '',
    }

    const validationSchema = Yup.object({
        strName: Yup.string().required('El campo nombre es obligatorio'),
        strMail: Yup.string().required('El campo mail es obligatorio'),
        strText: Yup.string().required('El campo mensaje es obligatorio'),
    })
    const handleSubmit = (values) => {
        console.log(values);
    }
    return (
        <section className={styles.boxContact} id="contact">
            <div className={styles.boxTittle}>
                <h1 className={styles.name}>CONTACTO</h1>
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >

                {
                    (formik) => (
                        <Form onSubmit={formik.handleSubmit}>
                            {
                                formik.status && (
                                    <Alert variant='danger' className='text-danger'>
                                        {formik.status}
                                    </Alert>
                                )
                            }
                            <div>
                                <Col md={3}>
                                    <Form.Group className='mb-3'>
                                        <Field
                                            id="strName"
                                            placeholder="Tu Nombre"
                                            name="strName"
                                            as={Form.Control}
                                        />
                                        <ErrorMessage
                                            name="strName"
                                            component={Form.Text}
                                            className='text-danger'
                                        />
                                    </Form.Group>
                                </Col>

                                <Col md={3}>
                                    <Form.Group className='mb-3'>
                                        <Field
                                            id="strMail"
                                            placeholder="Tu Mail"
                                            name="strMail"
                                            as={Form.Control}
                                        />
                                        <ErrorMessage
                                            name="strMail"
                                            component={Form.Text}
                                            className='text-danger'
                                        />
                                    </Form.Group>
                                </Col>

                                <Col md={3}>
                                    <Form.Group className='mb-3'>
                                        <Field
                                            id="strText"
                                            placeholder="Tu Mensaje"
                                            name="strText"
                                            as={Form.Control}
                                        />
                                        <ErrorMessage
                                            name="strText"
                                            component={Form.Text}
                                            className='text-danger'
                                        />
                                    </Form.Group>
                                </Col>
                            </div>
                            <div className=''>
                                <Col md={3}>
                                    <button
                                        className='btn btn-light w-50'
                                        type='submit'
                                    >
                                        {"Enviar Mensaje"}
                                    </button>
                                </Col>
                            </div>
                        </Form>
                    )
                }

            </Formik>
        </section>
    )
}