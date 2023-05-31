interface SearchContextProps {
  searchIsActive: boolean;
  setSearchIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  userQuery: string;
  setUserQuery: React.Dispatch<React.SetStateAction<string>>;
}

export default SearchContextProps;
