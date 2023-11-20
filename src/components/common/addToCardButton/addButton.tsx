import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

interface Props {
  buttonClass: string;
  text: string;
}

export function AddButton({ buttonClass, text }: Props): JSX.Element {
  return (
    <button className={`${buttonClass}`}>
      <span>{text}</span>
      <ShoppingBasketIcon />
    </button>
  );
}
