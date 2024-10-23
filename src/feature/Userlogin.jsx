import React from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import img1 from '../assets/login.png'
import { useForm } from 'react-hook-form'

const Userlogin = () => {
    const { register, handleSubmit, formState: { errors }, trigger } = useForm()
    let FormSubmit = (data) => {
        alert(JSON.stringify("You are Logged in"))
    }

    return (
        <div>
            <Container>
                <br />
                <h1>Login Form</h1>
                <hr />
                <br />
                <Form onSubmit={handleSubmit(FormSubmit)}>
                    <Row>
                        <Col xs={4}>
                            <Image src={img1} fluid width={400} height={600} />
                        </Col>
                        <Col xs={8}><br />
                            <Form.Group >
                                <Form.Label className='mb-4'>Email :</Form.Label>
                                <Form.Control type='text' {...register('email', { required: "Email is required", pattern: { value: /^[\w\!\#\$\%\^\&\*\-\+\=\.]+\@[\w]+\.[a-zA-Z]{3}$/, message: "Invalid Email" } })} onBlur={() => trigger('email')}></Form.Control>
                            </Form.Group>
                            {errors.email && <span className='text-danger'>{errors.email.message}</span>}
                            <Form.Group>
                                <Form.Label className='mt-4'>Password :</Form.Label>
                                <Form.Control type='password'{...register('password', { required: "Email is required", minLength: { value: 6, message: 'Min 6 char allow' }, maxLength: { value: 20, message: 'Max 20 char allow' } })} onBlur={() => trigger('password')}></Form.Control>
                            </Form.Group>
                            {errors.password && <span className='text-danger'>{errors.password.message}</span>}<br /><br />
                            <Button variant="secondary" type='submit'>Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    )
}

export default Userlogin
