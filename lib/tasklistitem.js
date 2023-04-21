const Component = require("./component")

class TaskListItem extends Component{
    constructor(children, priority){
        super(children);
        this.priority = priority
    }
    render(){
        if(this.priority){
            return `<li class="tasks-item tasks-item-priority">${this.children}</li>`;
        }else{
            return `<li class="tasks-item">${this.children}</li>`;
        }
    }
}
module.exports = TaskListItem;