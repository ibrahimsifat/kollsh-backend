const itemService = require("../../../../lib/item");

const destroy = async (req, res, next) => {
  const { id } = req.params;

  try {
    await itemService.destroy(id);
    res.status(202).json("ok");
  } catch (error) {
    next(error);
  }
};

module.exports = destroy;
