class Component {
    constructor(children){
        if(children === ""){
            this.children = [];
        }
        else{
            this.children = children;
        }
    
    }
    render(){
        console.error(`Child class must implement render() method.`);
    }
    renderInnerHTML(){
        for(let i=0; i<this.children.length; i++){
            if((typeof this.children[i])  !== "string"){
                this.children[i].render();
            }
        }
    }
}

module.exports = Component;