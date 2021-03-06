const serviceUser = require('../services/userService');

const login = (req, res) => {
  const userRequest = {login: req.body.login, password: req.body.password};
  serviceUser.findByLogin(userRequest).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.sendStatus(500);
  });
};

const create  = (req, res) => {
  const user = {login:req.body.login, password: req.body.password, name: req.body.name};
  serviceUser.create(user).then((data) => {
      res.send(200, {"id": data.id});
  });
}


module.exports = {
  login,
  create
}
