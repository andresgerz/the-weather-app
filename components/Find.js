import { Form, Button } from 'react-bootstrap'

const Find = () => (

    <div className="find-wrapper">
        <Form> 
            <Form.Group className="w-75" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Buenos Aires, AR " />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Find
            </Button>

        </Form>

        <style jsx>{`

            .find-wrapper {
                width: 75%;
                margin: 0 auto;
            }
            
        `
        }
        </style>
    </div>

);

export default Find;