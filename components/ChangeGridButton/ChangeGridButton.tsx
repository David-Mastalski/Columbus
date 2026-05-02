import IconGrid from "../icons/IconGrid";
import IconGridLarge from "../icons/IconGridLarge";

type ButtonProps = {
  isLargeGrid: boolean;
  handleClick: () => void;
};

function ChangeGridButton({ isLargeGrid, handleClick }: ButtonProps) {
  return (
    <button
      onClick={handleClick}
      aria-expanded={isLargeGrid}
      aria-label={
        isLargeGrid
          ? "Change to smaller grid view"
          : "Change to large grid view"
      }
      aria-controls="products-list"
    >
      {isLargeGrid ? <IconGridLarge /> : <IconGrid />}
    </button>
  );
}

export default ChangeGridButton;
