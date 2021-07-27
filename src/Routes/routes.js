import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

// View imports
import Redux from "../Views/Redux";
import About from "../Views/About";
import ReactRouter from "../Views/ReactRouter";
import ReactForm from "../Views/ReactHookForm";

const Routes = () => {
  return (
    <Router>
      <Container>
        <Row>
          <Col className="text-center">
            <Link className="btn btn-link" to="/">
              Redux
            </Link>
          </Col>

          <Col className="text-center">
            <Link className="btn btn-link" to="/react-router">
              React Router
            </Link>
          </Col>

          <Col className="text-center">
            <Link className="btn btn-link" to="/react-form">
              React Hook Form
            </Link>
          </Col>

          <Col className="text-center">
            <Link className="btn btn-link" to="/about">
              About
            </Link>
          </Col>
        </Row>
      </Container>

      <hr />

      <Switch>
        <Route exact path="/">
          <Redux />
        </Route>
        <Route path="/react-router">
          <ReactRouter />
        </Route>
        <Route path="/react-form">
          <ReactForm />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
