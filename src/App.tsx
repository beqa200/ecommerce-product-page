import React from "react";
import { BodyWrapper } from "./styled-components";
import { Header, Main, Menu, Slider } from "./components";
import { close } from "./images";
import { useState } from "react";
function App() {
  const [count, setCount] = useState<Number>(0);
  const [action, setAction] = useState<Number>(0);
  const [num, setNum] = useState<Number>(0);

  return (
    <BodyWrapper action={action}>
      <div className="forDark">
        <Header
          action={action}
          setAction={setAction}
          count={count}
          setCount={setCount}
          setNum={setNum}
        />
        <Main
          setCount={setCount}
          action={action}
          setAction={setAction}
          num={num}
          setNum={setNum}
        />
      </div>
      <Menu action={action} setAction={setAction} />
      <div className="desktop-slider2">
        <img
          src={close}
          className="close"
          onClick={() => {
            setAction(0);
          }}
        />
        <Slider />
      </div>
    </BodyWrapper>
  );
}

export default App;
