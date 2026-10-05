import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className=" p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5 m-5">
        <div className="col-6 p-5 " id="supportSearch">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" />
          <a href="">Track account openings</a>
          <a href="">Track segment activations</a>
          <a href="">Intraday margins</a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-3">Featured</h1>
          <ol className="mt-3">
            <li className="mb-3">
                <a href="" >Current Takeovers and Delisting - January 2026</a> <br />
            </li>
            <li >
                <a href="" >Latest Intraday leverages - MIS</a>
            </li>
          </ol>
          
        </div>
      </div>
    </section>
  );
}

export default Hero;
