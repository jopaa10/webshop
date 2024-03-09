/* eslint-disable @typescript-eslint/no-explicit-any */

export function FilterContainer({
  isOpen,
  items,
  title,
  handleOnChange,
  selectedCheckboxes,
}: any) {
  return (
    <div className={`filter-container__features`}>
      <ul
        className={`filter-container__dropdown-menu ${
          isOpen ? "open" : "not-open"
        }`}
        role="menu"
      >
        {items?.map((item: any, index: number) => (
          <li key={index}>
            <input
              type="checkbox"
              id={item.name}
              name={title}
              onChange={(e: any) => handleOnChange(e)}
              value={item.name}
              checked={selectedCheckboxes?.includes(item.name) ? true : false}
            />
            {/* <span className="checkmark"></span> */}
            <span>&nbsp;</span>
            <label htmlFor={item.name} className="checkmark">
              {item.name}
            </label>
            <span>{item?.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
