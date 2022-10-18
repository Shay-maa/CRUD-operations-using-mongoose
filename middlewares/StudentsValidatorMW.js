const validator = require("../util/StudentsValidator");

module.exports = (res, req, nxt) => {
  let valid = validator(req.body);
  if (valid) {
    req.valid = 1;
    nxt();
  } else {
    res.status(403).send("Forbidden command ... ");
  }
};
