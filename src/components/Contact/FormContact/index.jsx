import { Form, Col, Alert } from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import './index.css'

export default function FormContact() {
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
        setLoading(true);
        const { strName, strMail, strText } = values;
        const message = `${strText}\n\nMail: ${strMail}\n\nNombre: ${strName}`;
        // Número de teléfono de destino (debe incluir el código de país)
        const phoneNumber = '+5491131890767'; // Aquí pon el número de teléfono al que quieres enviar el mensaje

        // Construir la URL de WhatsApp con el mensaje y el número de teléfono
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // Abrir la URL de WhatsApp en una nueva pestaña
        window.open(whatsappURL, '_blank');

        setLoading(false);
    };
    return (

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

                            <div className="boxTittle">
                                <h1 className="name">CONTACTAME</h1>
                            </div>
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
                        </div>
                        <div className=''>
                            <Col md={3}>
                                <button
                                    className='btn btn-dark'
                                    type='submit'
                                >
                                    {!loading ? "Enviar Mensaje" : 'Cargando'}
                                </button>
                            </Col>
                        </div>
                    </Form>
                )
            }

        </Formik>

    )
}