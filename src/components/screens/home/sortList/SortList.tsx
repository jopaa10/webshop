export function SortList({
  handleSort,
}: {
  handleSort(type: string, sortOrder: string): void;
}): JSX.Element {
  return (
    <div className="sort-list">
      <ul>
        <li onClick={() => handleSort("date", "asc")}>newest first</li>
        <li onClick={() => handleSort("price", "desc")}>cheapest first</li>
        <li onClick={() => handleSort("title", "desc")}>a-z</li>
        <li onClick={() => handleSort("title", "asc")}>z-a</li>
      </ul>
    </div>
  );
}
