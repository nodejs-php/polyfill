import { useState } from "react";

const Rating = ({
  totalItems,
  currentRating,
  onItemClick,
  ratingItem,
  isLoading,
  loaderItem,
}) => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const isItemFilled = (index) =>
    hoverIndex !== null ? index <= hoverIndex : index < currentRating;

  return (
    <div className="rating-container">
      {Array.from({ length: totalItems }).map((item, i) => (
        <span
          key={i}
          onMouseEnter={() => setHoverIndex(i)}
          onMouseLeave={() => setHoverIndex(null)}
          onClick={() => {
            onItemClick(i + 1);
          }}
        >
          {ratingItem(isItemFilled(i))}
        </span>
      ))}

      {isLoading && loaderItem()}
    </div>
  );
};

export default Rating;
