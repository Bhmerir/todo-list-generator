const Component = require("./component");
const DateModule = require("./date");
class Header extends Component{
    constructor(){
        super();
    }
    
    render(){
        const date = new Date();
        return `<header class="header"><h1>Todo Today</h1><p>${DateModule.formatDate(date)}</p></header>`;
    }
}

module.exports = Header;