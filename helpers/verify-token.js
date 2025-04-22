const jwt = require("jsonwebtoken");
const getToken = require("./get-token.js");

const checkToken = (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(200).json({ message: "Acesso negado!" });
  }

  const token = getToken(req);

  if (!token) {
    res.status(200).json({ message: "Acesso negado!" });
  }

  try {

    const verified = jwt.verify(token, 'secret')
    req.user = verified
    next()

  } catch (err) {
    res.status(200).json({ message: "Acesso negado!" });
  }

};

module.exports = checkToken;
