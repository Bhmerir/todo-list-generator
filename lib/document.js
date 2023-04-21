// TODO: Import your Header, TaskList, and TaskListItem
const Header = require("./header");
const TaskList = require("./tasklist");
const TaskListItem = require("./tasklistitem");

function createDocument(title, tasks = []) {
  // TODO: Create a new Header
  const header = new Header();
  let taskListItemsStr = "";
  for(let task of tasks){
    let taskListItem = new TaskListItem(task.text, task.priority) 
    taskListItemsStr += taskListItem.render();
  }
  let taskList = new TaskList(taskListItemsStr);

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${title}</title>
      <link rel="stylesheet" href="../dist/style.css" />
    </head>
    <body>
      <div class="card">
        ${header.render()}
        ${taskList.render()}
      </div>
    </body>
  </html>
  `;
}

module.exports = { createDocument };
