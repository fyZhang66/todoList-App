import React, { Component } from 'react'

export default class TodoInput extends Component {
    changeTitle(e){
        this.props.onChange(e)
    }
    render() {
        return <input type="text"
            onKeyPress={this.submit.bind(this)}
            value={this.props.content} 
            onChange = {this.changeTitle.bind(this)}/>
    }
    submit(e) {
        if (e.key === 'Enter') {
            this.props.onSubmit(e)
        }
    }
}