import { Form, Button } from 'react-bootstrap'

const Find = () => (

  <div className="find-wrapper">
    <Form className="form-wrapper"> 
      
      <Form.Control className="form-display" name="form-display" placeholder="Buenos Aires, AR " autoFocus/>
      <Button className="form-button" type="submit">
        Find
      </Button>

      
    </Form>

    <style jsx>{`

      .find-wrapper {
        width: 80%;
        padding: 70px 0px 0px 178px;
      }
      
      .form-wrapper {
        width: 600px;
        height: 50px;
        border: 1px solid red;
        
      }
      
      .form-display {
        width: 500px;
        height: 156px;
        float: left;

      }


      .form-button {
        margin: -40px 0px 0px 0px;
        color: red;
        float: right;

      }

    `}
    </style>
  </div>

);

export default Find;