const { Upload } = require("../../models");
const { notFound, serverError } = require("../../utils/error");
const {
  deleteCloudinarySingleFile,
} = require("../../utils/upload/cloudinarySDK");
/**
 * Destroy (delete) an file by its ID.
 *
 * @param {string} id - The ID of the file to be deleted.
 * @throws {Error} - Throws an error if the file with the provided ID is not found.
 */
const destroy = async (id) => {
  const file = await Upload.findById(id);
  try {
    if (!file) {
      throw notFound("file is not found");
    }
    // delete image
    if (file.public_id) {
      await deleteCloudinarySingleFile(file.public_id);
    }
    await file.deleteOne();
  } catch (error) {
    throw notFound(error);
  }
};
module.exports = destroy;
