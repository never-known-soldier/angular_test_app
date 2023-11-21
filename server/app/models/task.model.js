module.exports = (sequelize, Sequelize) => {
  const Task = sequelize.define("task", {
    due_date: {
      type: Sequelize.DATE
    },
    created_by: {
      type: Sequelize.STRING
    },
    project_date: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    client:{
      type:Sequelize.STRING
    },
    project:{
      type:Sequelize.STRING
    },
    task:{
      type:Sequelize.STRING
    },
    status:{
      type:Sequelize.STRING
    },
    assignee:{
      type:Sequelize.STRING
    },
    send_mail:{
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    task_type:{
      type:Sequelize.STRING
    },
    priority:{
      type:Sequelize.STRING
    },
    note:{
      type:Sequelize.STRING
    },
    email_notes:{
      type:Sequelize.STRING
    },
  });

  return Task;
};
