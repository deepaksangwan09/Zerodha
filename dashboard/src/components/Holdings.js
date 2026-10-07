import React, { useState, useEffect } from "react";
// import axios, { all } from "axios";
// import { VerticalGraph } from "./VerticalGraph";

import { holdings } from "../data/data";

const Holdings = () => {
    return (
        <>
        <h3 className="title">Holdings ({holdings.length})</h3>
        <div className="order-table">
            <table>
                <tr>
                    <th>thInstrument</th>
                    <th>thQty.</th>
                    <th>thAvg. cost</th>
                    <th>thLTP</th>
                    <th>thCur. value</th>
                    <th>thP&L</th>
                    <th>thNet chg.</th>
                    <th>thDay Chg.</th>
                </tr>

                {holdings.map((stock, index) => {
                    const curValue = stock.price * stock.qty;
                    const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                    const profClass = isProfit ? "profit" : "loss";
                    const dayClass = stock.isLoss ? "loss" : "profit";

                    return(
                        <tr key={index} >
                            <td>{stock.name}</td> 
                            <td>{stock.qty}</td>
                            <td>{stock.avg.toFixed(2)}</td>
                            <td>{stock.price.toFixed(2)}</td>
                            <td>{curValue.toFixed(2)}</td>
                            <td className={profClass}>{(curValue - stock.avg * stock.qty).toFixed(2)}</td>
                            <td className={profClass}>{stock.net}</td>
                            <td className={dayClass}>{stock.day}%</td>
                        </tr>
                    )
                })}
            </table>
        </div>
        <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
        </>
    );
}


export default Holdings;