import { useState } from 'react';
import css from './SearchBar.module.css';
import { ImSearch } from 'react-icons/im';
import toast, { Toaster } from 'react-hot-toast';

const notify = () =>
  toast('Pleas input something!', {
    duration: 2500,
    style: { border: 'solid 1px black', backgroundColor: 'orange' },
    position: 'top-left',
  });

const SearchBar = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');
  const handelSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const value = form.elements.search.value;

    if (value.trim() === '') {
      notify();
      return;
    }

    onSubmit(value);
   
  };

  return (
    <>
      <header className={css.header}>
        <Toaster className={css.toast} />
        <form className={css.form} onSubmit={handelSubmit}>
          <label className={css.label}>
            <input
              onChange={e => {
                setSearchValue(e.target.value);
              }}
              className={css.searchField}
              type="text"
              name="search"
              value={searchValue}
              autoComplete="off"
              autoFocus
              placeholder="Search images..."
            />
            <button className={css.searchBtn} type="submit">
              <ImSearch />
            </button>
          </label>
        </form>
      </header>
    </>
  );
};

export default SearchBar;
