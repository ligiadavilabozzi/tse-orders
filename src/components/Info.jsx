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
          <img src="https://camo.githubusercontent.com/4e4a3b5c3e9c00501ec866e2f2466c5a6032f838aca5f2cf3b14450e39e8a2f0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742532302d2532333230323332612e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642"></img>
          <img src="https://camo.githubusercontent.com/dfc69d704694f22168bea3d84584663777fa5301dcad5bbcb5459b336da8d554/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6f64652e6a732d3433383533443f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465"></img>
          <img src="https://camo.githubusercontent.com/a0484e6383e852e622da1e934b7724921ab9b69d69246d90f899424b01f6deb1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f56697375616c25323053747564696f253230436f64652d3030373864372e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d76697375616c2d73747564696f2d636f6465266c6f676f436f6c6f723d7768697465"></img>
          <img src="https://camo.githubusercontent.com/ec0d32e85caf4723d5182a75338c89f85a2c3679aed0c46c9ee9fd1c8dc2a316/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769742d2532334630353033332e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d676974266c6f676f436f6c6f723d7768697465"></img>
          <img src="https://img.shields.io/badge/codesandbox-gray?style=for-the-badge"></img>
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
