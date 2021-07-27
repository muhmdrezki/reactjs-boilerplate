import "./style/main.scss";
import { Routes } from "./Routes";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <header className="my-4">
        <h4 className="text-center"> Simple React Boilerplate </h4>
        <h6 className="text-center">
          ReactBootstrap, Router, React Hook Form and Redux ready
        </h6>
      </header>

      <Routes />
    </Container>
  );
}

export default App;
