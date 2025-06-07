const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
console.log("test");


exports.handleLogin = async (req, res) => {
  const errors = [];

  if (typeof req.body.username !== "string") req.body.username = "";
  if (typeof req.body.password !== "string") req.body.password = "";

  req.body.username = req.body.username.trim();

  if (!req.body.username) errors.push("You must provide a username.");
  if (req.body.username && req.body.username.length < 3)
    errors.push("Username must be at least 3 characters.");
  if (req.body.username && req.body.username.length > 10)
    errors.push("Username cannot exeed 10 characters.");
  if (req.body.username && !req.body.username.match(/^[a-zA-Z0-9]+$/))
    errors.push("Username can only contain letters and numbers");

  if (!req.body.password) errors.push("You must provide a Password.");
  if (req.body.password && req.body.password.length < 8)
    errors.push("Password must be at least 8 characters.");
  if (req.body.password && req.body.password.length > 50)
    errors.push("Password cannot exeed 50 characters.");

  if (errors.length) {
    return res.status(400).json({ errors });
  }
  console.log("Tworzenie użytkownika...");
  const user = await prisma.user.create({ data: { name: req.body.username, password: req.body.password } });
  console.log("Utworzono:", user);

  res.send("Thank you for filling out the form");
};

