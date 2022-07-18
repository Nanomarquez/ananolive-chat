import React from "react";
import * as C from "./styles";
import { Audio } from  'react-loader-spinner'

const Loading = () => {
  return (
    <C.Container>
      <Audio
    height="100"
    width="100"
    color='grey'
    ariaLabel='loading'
  />
    </C.Container>
  );
};

export default Loading;