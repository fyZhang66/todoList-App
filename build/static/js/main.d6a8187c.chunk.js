(window["webpackJsonptodolist-app"]=window["webpackJsonptodolist-app"]||[]).push([[0],[,,,,,,,,function(t,e,n){t.exports=n(17)},,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),i=n(7),s=n.n(i),c=(n(13),n(1)),r=n(2),l=n(4),u=n(3),h=n(5),d=(n(14),n(15),n(16),function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(r.a)(e,[{key:"changeTitle",value:function(t){this.props.onChange(t)}},{key:"render",value:function(){return a.a.createElement("input",{type:"text",onKeyPress:this.submit.bind(this),value:this.props.content,onChange:this.changeTitle.bind(this)})}},{key:"submit",value:function(t){"Enter"===t.key&&this.props.onSubmit(t)}}]),e}(o.Component)),p=function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(r.a)(e,[{key:"toggle",value:function(t){this.props.onToggle(t,this.props.todo)}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("input",{type:"checkbox",checked:"completed"===this.props.todo.status,onChange:this.toggle.bind(this)}),this.props.todo.title)}}]),e}(o.Component),m=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={newTodo:"",todoList:[]},n}return Object(h.a)(e,t),Object(r.a)(e,[{key:"addTodo",value:function(t){this.state.todoList.push({id:g(),title:t.target.value,status:null,deleted:!1}),this.setState({newTodo:"",todoList:this.state.todoList})}},{key:"changeTitle",value:function(t){this.setState({newTodo:t.target.value,todoList:this.state.todoList})}},{key:"toggle",value:function(t,e){e.status="completed"===e.status?"":"completed",this.setState(this.state)}},{key:"render",value:function(){var t=this,e=this.state.todoList.map(function(e,n){return a.a.createElement("li",{key:e.id},a.a.createElement(p,{todo:e,onToggle:t.toggle.bind(t)}))});return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"\u6211\u7684\u5f85\u529e"),a.a.createElement("div",{className:"inputWrapper"},a.a.createElement("h3",null,"New Task"),a.a.createElement(d,{content:this.state.newTodo,onSubmit:this.addTodo.bind(this),onChange:this.changeTitle.bind(this)})),a.a.createElement("div",{className:"itemWrapper"},a.a.createElement("ol",null,e)))}}]),e}(o.Component),b=0;function g(){return b+=1}var v=m;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.d6a8187c.chunk.js.map