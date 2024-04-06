import {Container} from "react-bootstrap";

const Home = () => {
return (
    <Container className="text-center">
        <h1 className="text-center" style={{ paddingTop: '3em' }}>Bienvenido a <strong>HAPPY CAKE</strong></h1>
        <h5>El lugar de los pasteles felices</h5>
        <span className="display-1">🎂</span>
    </Container>
  );
}

export default Home