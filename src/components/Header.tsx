import logo from "../assets/images/logo.svg";
import Dropdown from "./Header/Dropdown";

const Header = () => {
  return (
    <div className="flex justify-between w-full py-4 px-16">
      <img src={logo} />
      <Dropdown title="Units">
        <>
          <li>Item 1</li>
          <li>Item 2</li>
        </>
      </Dropdown>
    </div>
  );
};

export default Header;
