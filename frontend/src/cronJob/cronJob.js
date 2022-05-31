import React, { useRef, useState } from "react";
import { Button, Toast } from "bootstrap";
import { Dropdown } from "bootstrap";

import "./cronJob.css";
import axios from "axios";
import { toast } from "react-toastify";

export default function CronJob() {
  let userEnteredAmount = useRef();
  let userEnteredLimit = useRef(0);
  let [selectedMethod, setSelectedMethod] = useState("betBull");
  let [selectedBool, setSelectedBool] = useState(false);
  const getMethod = (e) => {
    // console.log("You have selected", e.target.value);
    setSelectedMethod(e.target.value);
  };
  const getBool = (e) => {
    // console.log(" Your bool value is ", e.target.value);
    setSelectedBool(e.target.value);
  };

  const sendDatatoApi = async () => {
    let myAmount = userEnteredAmount.current.value;
    let maxLimit = userEnteredLimit.current.value;
    let myId = 1;
    // console.log("myAmount", myAmount);
    if (myAmount > 0) {
      if (maxLimit >= 0) {
        try {
          // const response = await axios.post(
          //   "https://prediction-auto-bot.herokuapp.com/api/startBatting",
          //   {
          //     bol: selectedBool,
          //     method: selectedMethod,
          //     amount: myAmount,
          //     id: myId,
          //     // Enter your body parameters here
          //   }
          // );
          // console.log("response", response);
          toast.success("Updated DataSuccessfully");
        } catch (e) {
          // Handle your error here
          toast.error("Error while posting data to Api");
          console.log("Error while Posting data to api", e);
        }
      } else {
        toast.error("Max Limit cannot b less than 0");
      }
    } else {
      toast.error("Amount must be greater than 0");
    }
  };

  return (
    <div className="container mainContainer">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-4 ">
          <select
            onChange={(e) => getMethod(e)}
            className="form-select myDropDowns"
            aria-label="Default select example"
          >
            <option value="betBear">Bet Bear</option>
            <option value="betBull">Bet Bull</option>
          </select>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-4 mt-2 ">
          <select
            onChange={(e) => getBool(e)}
            className="form-select"
            aria-label="Default  select example"
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-4 mt-2 light-form">
          <div className="field">
            <input ref={userEnteredAmount} type="text" placeholder="Amount" />
            <input
              className="mt-2"
              ref={userEnteredLimit}
              type="text"
              placeholder="Max Limit"
            />

            <button type="submit" className="button">
              OK
            </button>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-4 mt-2">
          <button
            onClick={() => sendDatatoApi()}
            className="myConfirmButton mt-5"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
