const TaskList = require("../lib/tasklist.js");

describe('TaskList', () => {
  describe('render', () => {
    it('make a task list with all child', () => {
      // Arrange
      const taskarr = ["<li>first task</li>","<li>second task</li>"]
      const result = `<ul class="tasks"><li>first task</li>\n<li>second task</li></ul>`;
      // Act
      const taskList = new TaskList(taskarr);
      // Assert
      expect(taskList.render()).toEqual(result);
    });
  });
});