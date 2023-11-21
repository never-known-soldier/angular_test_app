module.exports = app => {
  const Tasks = require("../controllers/task.controller.js");

  var router = require("express").Router();

  // Create a new task
  router.post("/", Tasks.create);

  // Retrieve all Tasks
  router.get("/", Tasks.findAll);
  
  // Retrieve a single task with id
  router.get("/:id", Tasks.findOne);

  // Update a task with id
  router.put("/:id", Tasks.update);

  // Delete a task with id
  router.delete("/:id", Tasks.delete);

  // Delete all Tasks
  router.delete("/", Tasks.deleteAll);

  app.use('/api/tasks', router);
};
