import { useContext, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import './css/searchBar.css';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../contexts/Search';
import { HOME, SEARCH } from '../../utils/paths';

function SearchBar() {
  const { searchIsActive, setSearchIsActive, userQuery, setUserQuery } =
    useContext(SearchContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userQuery !== '') {
      navigate(SEARCH);
    }
  }, [userQuery]);

  const openSearch = () => {
    setSearchIsActive(true);
  };

  const closeSearch = () => {
    if (searchIsActive && userQuery !== '') {
      return;
    }
    setSearchIsActive(false);
    setUserQuery('');
    navigate(HOME);
  };

  return (
    <>
      {searchIsActive ? (
        <form
          className="search_wrapper"
          id="open"
          onSubmit={(e) => e.preventDefault()}
        >
          <button>
            <BsSearch />
          </button>
          <input
            type="search"
            id="input_search open"
            placeholder="Busque por um filme, série..."
            value={userQuery}
            autoFocus
            onInput={({ target }) => setUserQuery((target as HTMLInputElement).value)}
            onBlur={() => closeSearch()}
          />
        </form>
      ) : (
        <form
          id="suspense"
          className="search_wrapper"
          onSubmit={(e) => e.preventDefault()}
        >
          <button
            type="button"
            onClick={() => {
              openSearch();
            }}
          >
            <BsSearch id="search" />
          </button>
        </form>
      )}
    </>
  );
}

export default SearchBar;
