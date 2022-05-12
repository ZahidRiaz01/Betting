import { Button } from "bootstrap";
import { Dropdown } from "bootstrap";
import React from "react";
import "./cronJob.css";
import { Form } from "react-bootstrap";

export default function CronJob() {
  return (
    <div className="container mainContainer">
      <div className="row d-flex justify-content-center align-items-center pt-5" >
        <div className="col-4 mt-5">
          <Form.Select aria-label="Default select example">
            <option value="1">Bet Bear</option>
            <option value="2">Bet Bull</option>
          </Form.Select>
        </div>
        <div className="col-4 mt-5">
          <Form.Select aria-label="Default select example">
            <option value="1">True</option>
            <option value="2">False</option>
          </Form.Select>
        </div>
      </div>
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-6">
          <button className="myConfirmButton">Confirm</button>
        </div>
      </div>
    </div>
  );
}
