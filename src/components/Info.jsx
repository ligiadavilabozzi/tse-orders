import React from "react";
import "../styles/styles.css";

export default function Info() {
  return (
    <div className="info">
      <h1> Information</h1>
      <h2>Lígia D'Ávila Bozzi</h2>
      <div>
        <h3>This mini-project was created by using:</h3>
        <div className="technologies">
          <ion-icon name="logo-react"></ion-icon>

          <p>React</p>
        </div>
      </div>
      <div className="references">
        <h3>References:</h3>
        <a href="https://www.taniarascia.com/front-end-tables-sort-filter-paginate/">
          - Front End Tables: Sorting, Filtering, and Pagination
        </a>
        <a href="https://codesandbox.io/s/8v85f">- React Router Navbar</a>
      </div>
    </div>
  );
}
