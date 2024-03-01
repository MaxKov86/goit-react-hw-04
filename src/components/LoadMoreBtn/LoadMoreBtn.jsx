import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick, children }) => {
  return (
    <div className={css.btnContainer}>
      <button className={css.loadMoreBtn} onClick={onClick} type="button">
        {children}
      </button>
    </div>
  );
};
export default LoadMoreBtn;
