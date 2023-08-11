import { FormEvent, useContext, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../contexts/Search';
import { ViewPortContext } from '../../contexts/ViewPort';
import { HOME, SEARCH } from '../../utils/paths';
import './css/searchBar.css';

function SearchBar() {
  const { windowWidth } = useContext(ViewPortContext);
  const [isMobile, setIsMobile] = useState<boolean>(
    windowWidth < 768 ? true : false,
  );
  const { userQuery, setUserQuery } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSearch();
  };

  const handleSearch = () => {
    if (userQuery !== '') {
      navigate(SEARCH);
    }
  };

  const closeSearch = () => {
    if (userQuery !== '') {
      return;
    }
    setUserQuery('');
    navigate(HOME);
  };

  return (
    <>
      <form
        className="search_wrapper flex justify-center rounded-lg"
        onSubmit={(e) => handleSubmit(e)}
      >
        {!isMobile && (
          <button className="flex justify-center items-center border-none cursor-pointer text-2xl px-2">
            <BsSearch onClick={() => handleSearch()} />
          </button>
        )}

        <input
          type="search"
          className="p-3 outline-none border-none text-base  placeholder:font-medium"
          placeholder="Busque por filme, série..."
          value={userQuery}
          onInput={({ target }) =>
            setUserQuery((target as HTMLInputElement).value)
          }
          onBlur={() => closeSearch()}
        />
      </form>
    </>
  );
}

export default SearchBar;
