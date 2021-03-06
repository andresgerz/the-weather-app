import Layout from '../src/components/Layout'
import axios from 'axios'
import { useState } from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import { Form, Button, Col } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://weather-api.lndo.site";
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
//let token_var = getToken()["XSRF-TOKEN"];
//axios.defaults.headers.common['X-CSRF-TOKEN'] = token_var;


const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});


function Login() {
 
  return (
  <Layout>
    <Formik
    validationSchema={schema}
    onSubmit={(values) => {
      
      axios.post('/api/user/login', {
        email: values.email,
        password: values.password
      })
      .then((res) => {
        console.log('response post login');
        console.log(res);
      })
      .catch((e) => {
        console.log('error post login');
        console.log(e);
      })
      console.log(response);
      /* 
      axios.get('/sanctum/csrf-cookie')
      .then(response => {

        console.log('csrf-cookie response');
        
      }).catch((e) => {
        console.log(e);
      });

 */
    
      
      }}
      initialValues={{
        email: '',
        password: '',
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
          <Form noValidate onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isValid={touched.password && !errors.password}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Button type="submit">Submit form</Button>
        </Form>
        )}
      </Formik>
    </Layout>  
  );
}


export default Login