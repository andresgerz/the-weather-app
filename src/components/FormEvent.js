import { Formik } from 'formik'
import * as yup from 'yup';
import { Form, Col, InputGroup, Button } from 'react-bootstrap'
import axios from 'axios'

const schema = yup.object().shape({
  eventName: yup.string().required(),
  category: yup.string().required(),
  description: yup.string().required(),
  file: yup.mixed().required(),
  terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
});

const FormEvent = () => {

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);

        let bodyFormData = new FormData();

        bodyFormData.append('event', values.eventName);                    bodyFormData.append('category', values.category); 
        bodyFormData.append('description', values.description); 
        bodyFormData.append('image', values.file); 

        axios({
          method: "post",
          url: "http://weather-api.lndo.site/api/event",
          data: bodyFormData,
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    }
      initialValues={{
        eventName: 'Tornado',
        category: '',
        description: '',
        file: null,
        terms: false,
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
        hasValidation
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationFormik101">
              <Form.Label>Event</Form.Label>
              <Form.Control
                type="text"
                name="eventName"
                value={values.eventName}
                onChange={handleChange}
                isValid={touched.eventName && !errors.eventName}
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Category</Form.Label>
              <Form.Control as="select"
                type="text"
                name="category"
                value={values.category}
                onChange={handleChange}
                isValid={touched.category && !errors.category}
                >
                <option>Cloud Atlas</option>
                <option>Alert</option>
                <option>Meteoro</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} 
              type="text"
              name="description"
              value={values.description}
              onChange={handleChange}
              isValid={touched.description && !errors.description}
            />
          </Form.Group>
          <Form.Group>
            <Form.File
              className="position-relative"
              required
              name="file"
              label="File"
              onChange={handleChange}
              isInvalid={!!errors.file}
              feedback={errors.file}
              id="validationFormik107"
              feedbackTooltip
            />
          </Form.Group>
          <Form.Group>
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              id="validationFormik106"
              feedbackTooltip
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
}

export default FormEvent