import dropdownIcon from "../../assets/images/icon-dropdown.svg";
import unitIcon from "../../assets/images/icon-units.svg";

type DropdownProps = {
  children: React.ReactNode;
  title: string;
};

const Dropdown = ({ children, title }: DropdownProps) => {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1">
        <img src={unitIcon} alt="unit icon" />
        {title}
        <img src={dropdownIcon} alt="dropdown icon" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content  menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        {children}
      </ul>
    </div>
  );
};

export default Dropdown;
