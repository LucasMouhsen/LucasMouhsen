
import { Form, Col, Alert } from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from "./index.module.css"
import { useState } from 'react';

export default function Contact() {
    const [loading, setLoading] = useState(false)
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
        setLoading(true)
        const { strName, strMail, strText } = values;
        const mensaje = `${strText}\n\nMail: ${strMail}\n\nNombre: ${strName}`
        // Número de teléfono de destino (debe incluir el código de país)
        const phoneNumber = '+5491131890767'; // Aquí pon el número de teléfono al que quieres enviar el mensaje

        // Construir la URL de WhatsApp con el mensaje y el número de teléfono
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensaje)}`;

        // Redirigir al usuario a la URL de WhatsApp
        window.location.href = whatsappURL;
        setLoading(false)
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
                                        className='btn btn-dark w-50'
                                        type='submit'
                                    >
                                        { !loading ? "Enviar Mensaje" : 'Cargando'}
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