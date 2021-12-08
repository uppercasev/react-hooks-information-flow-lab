function Filter(props) {
  return (
    <div className="Filter">
      <select name="filter" onChange={(event) => props.onCategoryChange(event)}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;