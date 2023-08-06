import { lazy, useContext } from 'react';
import { UserDataContext } from '../../../contexts/userData';
const ProfileDropdown = lazy(() => import('./ProfileDropdown'));

type UserAvatarProps = {
  isDropDownActive: boolean;
  onClick: () => void;
  onBlur: () => void;
};

function UserAvatar({ isDropDownActive, onClick, onBlur }: UserAvatarProps) {
  const { userData } = useContext(UserDataContext);

  return (
    <div className="relative flex items-center justify-evenly w-[50px] h-[50px]">
      {userData?.photoURL && (
        <img
          className="cursor-pointer object-cover w-[50px] h-[50px] rounded-xl"
          src={userData.photoURL}
          alt="User Image profile"
          onClick={onClick}
          onBlur={onBlur}
        />
      )}
      {isDropDownActive && (
        <ProfileDropdown isDropDownActive={isDropDownActive} />
      )}
    </div>
  );
}

export default UserAvatar;
