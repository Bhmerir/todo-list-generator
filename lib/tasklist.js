const Component = require("./component")
const TaskListItems = require("./tasklistitem")

class TaskList extends Component{
    constructor(children){
        super(children);
    }
    render(){
        return `<ul class="tasks">${this.children.join("\n")}</ul>`;
    }
}
module.exports = TaskList;