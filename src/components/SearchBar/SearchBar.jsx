import css from './SearchBar.module.css';
import { ImSearch } from 'react-icons/im';
import toast, { Toaster } from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  const handelSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const searchValue = form.elements.search.value;
    if (searchValue.trim() === '') {
      toast('Pleas input some name!', {
        duration: 2000,
        style: { border: 'solid 1px black' },
        position: 'top-left',
      });
      return;
    }
    onSubmit(searchValue);
    form.reset();
  };

  return (
    <>
      <header className={css.header}>
        <Toaster className={css.toast} />
        <form className={css.form} onSubmit={handelSubmit}>
          <label className={css.label}>
            <input
              className={css.searchField}
              type="text"
              name="search"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
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
