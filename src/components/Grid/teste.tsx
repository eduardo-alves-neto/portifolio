import React from "react";

import Grid from "./Grid";

export const Testes = () => {
  return (
    <>
      <div>
        <Grid gap={1} >
          <div style={{ backgroundColor: "lightblue", height: "100px" }}>
            Item 1
          </div>
          <div style={{ backgroundColor: "lightcoral", height: "100px" }}>
            Item 2
          </div>
          <div style={{ backgroundColor: "lightgreen", height: "100px" }}>
            Item 3
          </div>
          <div style={{ backgroundColor: "lightgreen", height: "100px" }}>
            Item 3
          </div>
          <div style={{ backgroundColor: "lightgreen", height: "100px" }}>
            Item 3
          </div>
        </Grid>
      </div>
    </>
  );
};
