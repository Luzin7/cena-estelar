import { BiMenu, IoCloseOutline } from 'react-icons/all';

type MenuProps = {
  isAriaActive: boolean;
  onClick: () => void;
};

function MenuButton({ isAriaActive, onClick }: MenuProps) {
  return (
    <button
      className="text-[42.5px] rounded-md sm:hidden"
      aria-expanded={isAriaActive}
      onClick={onClick}
    >
      {isAriaActive ? (
        <IoCloseOutline id="menu_icon" />
      ) : (
        <BiMenu id="menu_icon" />
      )}
    </button>
  );
}

export default MenuButton;
