import React from "react";

import Grid from "./Grid";

export const Testes = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
          border: "1px solid black",
        }}
      >
        <Grid gap={1} xs={12} justifyContent="flex-end">
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
