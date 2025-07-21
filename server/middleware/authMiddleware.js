const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    const credentials = Buffer.from(
      authHeader.split(" ")[1],
      "base64"
    ).toString();
    const [username, password] = credentials.split(":");

    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      next();
    } else {
      res.status(401).json({ message: "Not authorized, invalid credentials" });
    }
  } catch (error) {
    res.status(401).json({ message: "Not authorized, token failed" });
  }
};

module.exports = { protect };
