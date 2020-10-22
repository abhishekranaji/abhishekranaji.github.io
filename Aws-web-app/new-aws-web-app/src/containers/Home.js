import React from "react";
import "./Home.css";
import Charts from "./charts";
import { BrowserRouter as Router } from 'react-router-dom';
import { Storage } from "aws-amplify";
export default function Home() {
  console.log("check")
  Storage.list('2020/') // for listing ALL files without prefix, pass '' instead
    .then(result => console.log(result))
    .catch(err => console.log(err));
  const data = [
    ['x', 'dogs'],
    [0, 0],
    [1, 10],
    [2, 23],
    [3, 17],
    [4, 18],
    [5, 9],
    [6, 11],
    [7, 27],
    [8, 33],
    [9, 40],
    [10, 32],
    [11, 35],]
  return (
    <div className="Home">
      <div className="lander">
        <Router>
          <Charts{...data} />
        </Router>
      </div>
    </div>
  );
}