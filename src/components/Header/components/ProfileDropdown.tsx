import DropDownProfile from '../../DropdownProfile';

type DropDownProfileProps = {
  isDropDownActive: boolean;
};

function ProfileDropdown({ isDropDownActive }: DropDownProfileProps) {
  return (
    <div
      className="bg-colorBgSecondary absolute flex flex-col min-w-min top-[8vh] right-0 z-10 p-3 sm:top-[6vh] md:right-[-50%]"
      style={{ display: isDropDownActive ? 'block' : 'none' }}
    >
      <DropDownProfile />
    </div>
  );
}

export default ProfileDropdown;
