const db = require("../../models");
const md5 = require("md5");

module.exports = function (app) {
  app.get("/api/users", (req, res) => {
    db.User.find({})
      .then((data) => res.json(data))
      .catch((err) => console.log(err));
  });

  app.get("/api/users/:id", (req, res) => {
    db.User.findById(req.params.id)
      .then((data) => res.json(data))
      .catch((err) => console.log(err));
  });

  app.post("/api/register", (req, res) => {
    const newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      username: req.body.username,
      password: md5(req.body.password),
    };

    db.User.create(newUser)
      .then((data) => res.json(`User ${data._id} has been added.`))
      .catch((err) => console.log(err));
  });

  app.delete("/api/users/:id", (req, res) => {
    db.User.findByIdAndDelete(req.params.id)
      .then((data) => res.json(`User ${data._id} has been deleted.`))
      .catch((err) => console.log(err));
  });
};
