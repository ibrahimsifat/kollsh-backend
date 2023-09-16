const { parsePopulatedFields } = require("../../utils/Query/queryParser");
const { State } = require("../../models");
const {
  getSinglePopulatedFields,
} = require("../../utils/Query/getPopulatedFields");
const { notFound } = require("../../utils/error");

/**
 * Find a single state based on provided ID and populate fields if specified.
 *
 * @param {Object} params - The parameters for the query.
 * @param {string} params.id - The ID of the state to find.
 * @param {string[]} params.populate - Fields to populate in the result.
 * @returns {Object} - The state data with populated fields if requested.
 */
const findSingle = async ({ id, populate }) => {
  const populatedFields = parsePopulatedFields(populate);
  let state = await State.findById(id).exec();
  if (!state) {
    throw notFound();
  }

  // Apply population
  if (populatedFields.length > 0) {
    state = await getSinglePopulatedFields(state, populatedFields);
    // state = await state.populate(populatedFields.join(" "));
  }
  return { ...state._doc, id: state.id };
};
module.exports = findSingle;