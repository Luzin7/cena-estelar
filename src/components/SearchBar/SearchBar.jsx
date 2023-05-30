import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import './css/searchBar.css';
// import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [searchIsActive, setSearchIsActive] = useState(false);
  const [userQuery, setUserQuery] = useState('');
  // const navigate = useNavigate();

  const openSearch = () => {
    setSearchIsActive(true);
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
            <BsSearch onClick={() => {}} />
          </button>
          <input
            type="search"
            id="input_search open"
            placeholder="Busque por um filme, série..."
            value={userQuery}
            autoFocus
            onInput={({ target }) => setUserQuery(target.value)}
            onBlur={() => setSearchIsActive(false)}
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
