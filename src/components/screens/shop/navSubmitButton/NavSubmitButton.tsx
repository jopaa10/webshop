export function NavSubmitButton({
  onClick,
  clsName = "",
  text,
  isCard = false,
}) {
  return (
    <button className={clsName} onClick={onClick}>
      {isCard ? <h3>{text}</h3> : text}
    </button>
  );
}
