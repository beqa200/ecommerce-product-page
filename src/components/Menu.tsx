import { MenuWrapper } from "../styled-components";
import { close } from "../images";
const Menu = (props: MenuPropsType) => {
  return (
    <MenuWrapper action={props.action}>
      <img
        src={close}
        onClick={() => {
          props.setAction(0);
        }}
      />
      <p>Collections</p>
      <p>Men</p>
      <p>Women</p>
      <p>About</p>
      <p>Contact</p>
    </MenuWrapper>
  );
};

export default Menu;
