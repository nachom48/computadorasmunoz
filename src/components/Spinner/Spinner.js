import { useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: flex;
  margin-right:auto;
  margin-left:auto;
  justify-content:center;
  align-items:center;
  border:thick solid black;
  margin-top:25rem;
`;

const Spinner=()=> {
 

  return (
    <div className="sweet-loading">

      <ClipLoader size={300} css={override} />
    </div>
  );
}

export default Spinner;