const sendAllUsers = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.usersArray));
  };

  const sendUserById = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.user));
  };

  const sendUserCreated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.user));
  }; 

  const sendUserUpdated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify({ message: "Игра обновлена" }));
  }; 

  const sendUserDeleted = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.game));
    };
  
  module.exports = {
    sendAllUsers,
    sendUserById,
    sendUserCreated,
    sendUserUpdated,
    sendUserDeleted,
  };