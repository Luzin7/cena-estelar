import { useContext } from 'react';
import { UserDataContext } from '../../../contexts/userData';
import ProfileDropdown from './ProfileDropdown';

type UserAvatarProps = {
  isDropDownActive: boolean;
  onClick: () => void;
  onBlur: () => void;
};

function UserAvatar({ isDropDownActive, onClick, onBlur }: UserAvatarProps) {
  const { userData } = useContext(UserDataContext);
  const defaultPfp =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1024px-Default_pfp.svg.png';

  return (
    <div className="relative flex items-center justify-evenly w-[50px] h-[50px]">
      <img
        className="cursor-pointer object-cover w-[50px] h-[50px] rounded-full"
        src={userData?.photoURL ? userData.photoURL : defaultPfp}
        alt={`${userData?.displayName} Image profile`}
        title="Menu"
        onClick={onClick}
        onBlur={onBlur}
      />
      {isDropDownActive && (
        <ProfileDropdown isDropDownActive={isDropDownActive} />
      )}
    </div>
  );
}

export default UserAvatar;
