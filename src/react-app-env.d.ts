/// <reference types="react-scripts" />

type MainPropsType = {
  setCount: (count: Number) => void;
  action: Number;
  num: Number | ReactNode;
  setNum: (num: Number) => void;
  setAction: (action: Number) => void;
};

type HeaderPropsType = {
  action: Number;
  setAction: (action: Number) => void;
  count: Number | ReactNode;
  setCount: (count: Number) => void;
  setNum: (num: Number) => void;
};

type MenuPropsType = {
  action: Number;
  setAction: (action: Number) => void;
};

type CartPropsType = {
  count: Number | ReactNode;
  setCount: (count: Number) => void;
  setNum: (num: Number) => void;
  cart: Boolean;
  setCart: (cart: Boolean) => void;
};
