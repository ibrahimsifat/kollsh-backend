const defaults = {
  totalItems: 0,
  pageSize: 25,
  pageNumber: 1,
  sortOrder: "asc",
  sortBy: "updatedAt",
  search: "",
  radix: 10,
  ItemsAllowedSearchFields: ["name", "description"],
  itemAllowedSorByFields: [
    "name",
    "updatedAt",
    "createdAt",
    "price",
    "quantity",
  ],
};

module.exports = Object.freeze(defaults);
