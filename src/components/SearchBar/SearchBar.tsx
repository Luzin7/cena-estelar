import { FormEvent, useContext } from 'react';
import { BsSearch } from 'react-icons/bs';
import './css/searchBar.css';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../hooks/contexts/Search';
import { HOME, SEARCH } from '../../utils/paths';

function SearchBar() {
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
      <form id="search_mobile" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="search"
          id="input_search"
          placeholder="Busque por filme, série..."
          value={userQuery}
          onInput={({ target }) =>
            setUserQuery((target as HTMLInputElement).value)
          }
          onBlur={() => closeSearch()}
        />
      </form>
      <form className="search_wrapper" onSubmit={(e) => handleSubmit(e)}>
        <button>
          <BsSearch onClick={() => handleSearch()} />
        </button>
        <input
          type="search"
          id="input_search open"
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
