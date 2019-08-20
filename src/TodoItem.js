import React,{Component} from 'react'

export default class TodoItem extends Component{
    toggle(e){
        this.props.onToggle(e,this.props.todo)  //把传过来的item传回去，父组件就知道是哪个被点击
    }
    delete(e){
        this.props.onDelete(e,this.props.todo)
    }
    render(){
        return (
            <div>
                <input type="checkbox" checked={this.props.todo.status === 'completed'}
                    onChange = {this.toggle.bind(this)}/>
                <span className="title">{this.props.todo.title}</span>
                <button onClick = {this.delete.bind(this)}>删除</button>
            </div>
        )
    }
}