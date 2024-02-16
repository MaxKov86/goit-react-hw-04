import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = () => {
  const handelClick = e => {
    console.log(e.target);
  };
  return (
    <div className={css.btnContainer}>
      <button className={css.loadMoreBtn} onClick={handelClick} type="click">
        Load More
      </button>
    </div>
  );
};
export default LoadMoreBtn;
