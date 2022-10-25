const bcrypt = require("bcrypt");

exports.hashPass = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 8);
    next();
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
