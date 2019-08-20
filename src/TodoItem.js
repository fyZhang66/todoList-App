import React,{Component} from 'react'

export default class TodoItem extends Component{
    toggle(e){
        this.props.onToggle(e,this.props.todo)  //把传过来的item传回去，父组件就知道是哪个被点击
    }
    render(){
        return (
            <div>
                <input type="checkbox" checked={this.props.todo.status === 'completed'}
                    onChange = {this.toggle.bind(this)}/>{this.props.todo.title}
            </div>
        )
    }
}