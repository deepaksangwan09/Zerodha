import React from "react";

function CreateTicket() {
  return (
    <div className="container ">
      <div className="row  p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>
        <div className="col-3 p-5 mt-5 mb-5 ">
          <h4 className="">
            <i class="fa fa-plus-circle" aria-hidden="true"></i>Account Opening
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" , fontSize:"14px"}}>
            Resident individual
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5", fontSize:"14px" }}>
            Minor
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" , fontSize:"14px"}}>
            Non Residient Indian(NRI)
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5", fontSize:"14px" }}>
            Company, Partnership, HUF 
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5", fontSize:"14px" }}>
            Glossary
          </a>
          <br />
        </div>
      
        <div className="col-3 p-5 mt-5 mb-5 ">
          <h4 className=""><i class="fa fa-user" aria-hidden="true"></i>Your Zerodha Account
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5", fontSize:"14px" }}>
            Your Profile
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5", fontSize:"14px" }}>
            Account modification
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5", fontSize:"14px" }}>
            Client Master Report (CMR) 
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" , fontSize:"14px" }}>
            Nomination
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" , fontSize:"14px" }}>
            Transfer and conversion 
          </a>
          <br />
        </div>
        <div className="col-3 p-5 mt-5 mb-5 ">
          <h4 className="fs-3"><i class="fa fa-wpexplorer" aria-hidden="true"></i>Funds
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" , fontSize:"14px"}}>
            Add money
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" , fontSize:"14px"}}>
            Withdraw money
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" , fontSize:"14px"}}>
            Add bank accounts
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" , fontSize:"14px"}}>
           eMandates
          </a>
        </div>
        <div className="col-3 p-5 mt-5 mb-5 ">
          <h4 className="fs-3"><i class="fa fa-circle-o-notch" aria-hidden="true"></i>Coin
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" , fontSize:"14px" }}>
            Mutual funds
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" , fontSize:"14px" }}>
            National Pension Schemes(NPS)
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" , fontSize:"14px" }}>
            Fixed Deposit (FD)
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" , fontSize:"14px" }}>
            Feature on Coin
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" , fontSize:"14px" }}>
            Payments and Orders
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" , fontSize:"14px" }}>
            General
          </a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
