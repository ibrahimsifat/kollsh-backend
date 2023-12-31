const { testBaseUrl } = require("../../src/config");
const replyTestUrl = `${testBaseUrl}/replies`;
const replyData1 = {
  content: "Reply 1",
  comment: "string or id",
};
const replyData2 = {
  content: "Reply 2",
  comment: "string or id",
};
const newReplyData = {
  content: "New Reply",
  comment: "string or id",
  user: "6502a59b35d01ff95a2c2527",
};
const updatedReplyData = {
  content: "Updated Reply",
  comment: "string or id",
};
const editReplyData = {
  content: "Edit Reply",
  comment: "string or id",
};
const existingReplyData = {
  content: "Existing Reply",
  comment: "string or id",
};
const existingReply = {
  id: "existingReplyId",
  content: "Existing Reply Name",
};
const replyTestData = {
  id: "replyId",
  content: "Test Reply",
  comment: "string or id",
  user: "6502a59b35d01ff95a2c2527",
};
const mockReply = {
  id: "replyId",
  content: "Test Reply",
  comment: "string or id",
};
const mockUpdatedReply = {
  id: "replyId",
  content: "Updated Reply",
  comment: "string or id",
};
const updatedContent = { content: "Updated Reply" };
const createReplyData = [
  {
    content: "string",
    comment: "string or id",
  },
  {
    content: "reply name",
    comment: "string or id",
  },
];
const permissionsData = {
  controller: "reply",
  actions: ["read", "write", "delete", "update"],
  description: "Read Users",
  createdBy: null,
};

const rolesData = {
  name: "user",
  description: "User Role",
  permissions: [],
  createdBy: "650d880858e6f8be2bb7b421",
};
const replyTestQuery = {
  sort: "name",
  fields: "content",
  pageSize: 10,
  pageNumber: 1,
};
module.exports = {
  replyData1,
  replyData2,
  newReplyData,
  updatedReplyData,
  editReplyData,
  existingReplyData,
  existingReply,
  updatedContent,
  replyTestData,
  createReplyData,
  mockReply,
  mockUpdatedReply,
  replyTestUrl,
  permissionsData,
  rolesData,
  replyTestQuery,
};
