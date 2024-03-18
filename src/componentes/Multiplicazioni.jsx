import React from "react";

function Multiplicazioni({ numero }) {
  let int = parseInt(numero);
  let ris = 0;
  let tab = [];
  if (numero != 0) {
    for (let i = 0; i < 11; i++) {
      ris = int * i;
      tab.push(
        <>
          <p key={i}>
            {int} x {i} = {ris}
          </p>
        </>
      );
    }
  }

  return (
    <>
      <label>Tabbelina del {int}</label> <div>{tab}</div>
    </>
  );
}

export default Multiplicazioni;
