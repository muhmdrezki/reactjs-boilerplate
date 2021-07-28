import React from "react";
import { useSelector, useDispatch } from "react-redux";

// import actions
import increment from "../Store/actions/increment";
import decrement from "../Store/actions/decrement";

// import react bootstrap component
import { Button } from "react-bootstrap";

function Redux() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h3 className="text-center"> Redux is installed</h3>
      <h5 className="text-center"> Checkout the demo below </h5>
      <hr />

      <h5 className="text-center"> Counter </h5>
      <h5 className="text-center">{counter}</h5>

      <br />

      <div className="buttons text-center">
        <Button variant="primary" onClick={() => dispatch(increment())}>
          Increment
        </Button>
        &nbsp;
        <Button variant="secondary" onClick={() => dispatch(decrement())}>
          Decrement
        </Button>
      </div>
    </div>
  );
}

export default Redux;
