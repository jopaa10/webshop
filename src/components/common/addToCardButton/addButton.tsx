import { DeleteForever } from "@mui/icons-material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

interface Props {
  buttonClass: string;
  text: string;
  handleOnClick?: () => void;
  isDelete?: boolean;
}

export function AddButton({
  buttonClass,
  text,
  handleOnClick,
  isDelete,
}: Props): JSX.Element {
  return (
    <button className={`${buttonClass}`} onClick={handleOnClick}>
      <span>{text}</span>
      {isDelete ? <DeleteForever /> : <ShoppingBasketIcon />}
    </button>
  );
}
