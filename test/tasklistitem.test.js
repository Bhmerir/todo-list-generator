const TaskListItem = require("../lib/tasklistitem.js");

describe('TaskListItem', () => {
  describe('render with priority', () => {
    it('make a task list item tag with priority for html', () => {
      // Arrange
      const result = `<li class="tasks-item tasks-item-priority">go home</li>`;
      // Act
      const taskListItem = new TaskListItem('go home','true');
      // Assert
      expect(taskListItem.render()).toEqual(result);
    });
  });
  describe('render w/o priority', () => {
    it('make a task list item tag with priority for html', () => {
      // Arrange
      const result = `<li class="tasks-item tasks-item-priority">rest</li>`;
      // Act
      const taskListItem = new TaskListItem('rest','false');
      // Assert
      expect(taskListItem.render()).toEqual(result);
    });
  });
});