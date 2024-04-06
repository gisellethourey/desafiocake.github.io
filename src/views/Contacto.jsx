import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Contacto = () => {
    return (
    
        <Form  style={{ display: 'block', textAlign: 'center' }}>
            <h1 className="text-center" style={{ paddingTop: '3em' }}>Cuentanos, ¿en qué te podemos ayudar?</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
            <h6>Correo:</h6>
            </Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasiDescription">
            <Form.Label>
            <h6>Descripción</h6>
            </Form.Label>
          <Form.Control style= {{height: '10em'}}type="description" />
          </Form.Group>
          <Button variant="danger" type="submit">
        Enviar
      </Button>
          </Form>
      );
}
 
export default Contacto;