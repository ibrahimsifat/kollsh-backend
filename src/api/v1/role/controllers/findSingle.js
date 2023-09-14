const roleService = require("../../../../lib/role");

const findSingle = async (req, res, next) => {
  const { id } = req.params;
  const { populate } = req.query || "";

  try {
    const role = await roleService.findSingle({ id, populate });
    const response = {
      data: role,
      links: {
        self: `/items/${role.id}`,
      },
    };

    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = findSingle;
