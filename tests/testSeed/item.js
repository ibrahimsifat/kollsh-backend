const { testBaseUrl } = require("../../src/config");
const itemTestUrl = `${testBaseUrl}/items`;
const itemData1 = {
  name: "Item 1",
  slug: "item-1",
  released: "2023-09-22",
  thumbnail: "string or id",
  subcategory: "string or id",
  state: "string or id",
  cities: ["string or id", "string or id"],
  price: 0,
  negotiable: true,
  is_argent: true,
  brand: "string or id",
  item: "string or id",
  description: "string",
  images: ["string or id", "string or id"],
  contactNumber: "123456789",
  whatsappNumber: "123456789",
  email: "user@example.com",
  address: "string",
  latitude: "123456789",
  longitude: "123456789",
  metadata: "string or id",
};
const itemData2 = {
  name: "Item 2",
  slug: "item-2",
  released: "2023-09-22",
  thumbnail: "string or id",
  subcategory: "string or id",
  state: "string or id",
  cities: ["string or id", "string or id"],
  price: 0,
  negotiable: true,
  is_argent: true,
  brand: "string or id",
  item: "string or id",
  description: "string",
  images: ["string or id", "string or id"],
  contactNumber: "123456789",
  whatsappNumber: "123456789",
  email: "user@example.com",
  address: "string",
  latitude: "123456789",
  longitude: "123456789",
  metadata: "string or id",
};
const newItemData = {
  id: "newItemId",
  name: "New Item",
  slug: "new-item",
  released: "2023-09-22",
  thumbnail: "string or id",
  subcategory: "string or id",
  state: "string or id",
  cities: ["string or id", "string or id"],
  price: 0,
  negotiable: true,
  is_argent: true,
  brand: "string or id",
  item: "string or id",
  description: "string",
  images: ["string or id", "string or id"],
  contactNumber: "123456789",
  whatsappNumber: "123456789",
  email: "user@example.com",
  address: "string",
  latitude: "123456789",
  longitude: "123456789",
  metadata: "string or id",
};
const updatedItemData = {
  name: "Updated Item",
  slug: "updated-item",
  released: "2023-09-22",
  thumbnail: "string or id",
  subcategory: "string or id",
  state: "string or id",
  cities: ["string or id", "string or id"],
  price: 0,
  negotiable: true,
  is_argent: true,
  brand: "string or id",
  item: "string or id",
  description: "string",
  images: ["string or id", "string or id"],
  contactNumber: "123456789",
  whatsappNumber: "123456789",
  email: "user@example.com",
  address: "string",
  latitude: "123456789",
  longitude: "123456789",
  metadata: "string or id",
  seller: "sellerId",
};
const editItemData = {
  name: "Edit Item",
  negotiable: true,
};
const existingItemData = {
  name: "Existing Item",
  slug: "existing-item",
  released: "2023-09-22",
  thumbnail: "string or id",
  subcategory: "string or id",
  state: "string or id",
  cities: ["string or id", "string or id"],
  price: 0,
  negotiable: true,
  is_argent: true,
  brand: "string or id",
  item: "string or id",
  description: "string",
  images: ["string or id", "string or id"],
  contactNumber: "123456789",
  whatsappNumber: "123456789",
  email: "user@example.com",
  address: "string",
  latitude: "123456789",
  longitude: "123456789",
  metadata: "string or id",
};
const existingItem = {
  id: "existingItemId",
  name: "Existing Item Name",
};
const itemTestData = {
  id: "itemId",
  name: "Test Item",
  slug: "test-item",
  released: "2023-09-22",
  thumbnail: "string or id",
  subcategory: "string or id",
  state: "string or id",
  cities: ["string or id", "string or id"],
  price: 0,
  negotiable: true,
  is_argent: true,
  brand: "string or id",
  item: "string or id",
  description: "string",
  images: ["string or id", "string or id"],
  contactNumber: "123456789",
  whatsappNumber: "123456789",
  email: "user@example.com",
  address: "string",
  latitude: "123456789",
  longitude: "123456789",
  metadata: "string or id",
};
const mockItem = {
  id: "itemId",
  name: "Test Item",
  released: "2023-09-22",
  thumbnail: "string or id",
  subcategory: "string or id",
  state: "string or id",
  cities: ["string or id", "string or id"],
  price: 0,
  negotiable: true,
  is_argent: true,
  brand: "string or id",
  item: "string or id",
  description: "string",
  images: ["string or id", "string or id"],
  contactNumber: "123456789",
  whatsappNumber: "123456789",
  email: "user@example.com",
  address: "string",
  latitude: "123456789",
  longitude: "123456789",
  metadata: "string or id",
};
const mockUpdatedItem = {
  id: "itemId",
  name: "Updated Item",
  released: "2023-09-22",
  thumbnail: "string or id",
  subcategory: "string or id",
  state: "string or id",
  cities: ["string or id", "string or id"],
  price: 0,
  negotiable: true,
  is_argent: true,
  brand: "string or id",
  item: "string or id",
  description: "string",
  images: ["string or id", "string or id"],
  contactNumber: "123456789",
  whatsappNumber: "123456789",
  email: "user@example.com",
  address: "string",
  latitude: "123456789",
  longitude: "123456789",
  metadata: "string or id",
};
const updatedNegotiable = { negotiable: false };
const createItemData = [
  {
    name: "string",
    slug: "string",
    released: "2023-09-22",
    thumbnail: "string or id",
    subcategory: "string or id",
    state: "string or id",
    cities: ["string or id", "string or id"],
    price: 0,
    negotiable: true,
    is_argent: true,
    brand: "string or id",
    item: "string or id",
    description: "string",
    images: ["string or id", "string or id"],
    contactNumber: "123456789",
    whatsappNumber: "123456789",
    email: "user@example.com",
    address: "string",
    latitude: "123456789",
    longitude: "123456789",
    metadata: "string or id",
  },
  {
    name: "item name",
    slug: "item-name",
    released: "2023-09-22",
    thumbnail: "string or id",
    subcategory: "string or id",
    state: "string or id",
    cities: ["string or id", "string or id"],
    price: 0,
    negotiable: true,
    is_argent: true,
    item: "string or id",
    brand: "string or id",
    description: "string",
    images: ["string or id", "string or id"],
    contactNumber: "123456789",
    whatsappNumber: "123456789",
    email: "user@example.com",
    address: "string",
    latitude: "123456789",
    longitude: "123456789",
    metadata: "string or id",
  },
];
const permissionsData = {
  controller: "item",
  actions: ["read", "write", "delete", "update"],
  description: "Read Users",
  createdBy: null,
};

const rolesData = {
  name: "user",
  description: "Admin Role",
  permissions: [],
  createdBy: "650d880858e6f8be2bb7b421",
};
const itemTestQuery = {
  sort: "name",
  fields: "name,negotiable",
  pageSize: 10,
  pageNumber: 1,
};
module.exports = {
  itemData1,
  itemData2,
  newItemData,
  updatedItemData,
  editItemData,
  existingItemData,
  existingItem,
  updatedNegotiable,
  itemTestData,
  createItemData,
  mockItem,
  mockUpdatedItem,
  permissionsData,
  rolesData,
  itemTestUrl,
  itemTestQuery,
};
