require("dotenv").config();

// This middleware checks if the user is authenticated before allowing access to protected endpoints
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).send("user is not authenticated");
  }

  jwt.verify(token, process.env.MY_SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(403)
        .send("You are not authorized to access this website");
    }

    req.user = decoded;
    next();
  });
};

module.exports = authenticateToken;
