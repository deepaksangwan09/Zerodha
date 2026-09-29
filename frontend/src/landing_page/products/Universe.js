import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row mt-5 text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-small text-muted mt-1">
            Thematic investment platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-small text-muted mt-1">
            Systematic trading platform{" "}
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-small text-muted mt-1">
            Options trading platform{" "}
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-small text-muted mt-1">
            Asset management venture{" "}
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-small text-muted mt-1">
            Investment research platform{" "}
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png " />
          <p className="text-small text-muted mt-1">
            Personalized advice and health insurance.
          </p>
        </div>

        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          {" "}
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
