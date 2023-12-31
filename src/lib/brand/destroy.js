const { Brand } = require("../../models");
const { notFound } = require("../../utils/error");
/**
 * Destroy (delete) an brand by its ID.
 *
 * @param {string} id - The ID of the brand to be deleted.
 * @throws {Error} - Throws an error if the brand with the provided ID is not found.
 */
const destroy = async (id) => {
  const brand = await Brand.findById(id);
  if (!brand) {
    throw notFound("brand not found.");
  }
  await brand.deleteOne();
};
module.exports = destroy;
