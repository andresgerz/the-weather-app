import { Form, Button } from 'react-bootstrap'

const Find = () => (

  <div className="find-wrapper">
    <Form className="form-wrapper"> 
      
      <Form.Control className="form-control" placeholder="Buenos Aires, AR " autoFocus/>
      <Button className="form-button" variant="primary" type="submit">
        Find
      </Button>

      
    </Form>

    <style jsx>{`

      .find-wrapper {
        width: 900px;
        height: 50px;
        margin: 0 auto;
        border: 1px solid pink;
      }
      
      .form-control {
        width: 500px;
        height: 156px;
        float: left;
      }

      .form-wrapper {
        height: 400px;
        border: 1px solid red;

      }

      .form-button {
        float: right;
      }

    `}
    </style>
  </div>

);

export default Find;