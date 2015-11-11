import Ember from "ember";

export default Ember.Controller.extend({
  todos: Em.A([
    "Buy milk",
    "Clean the room",
    "Learn Ember.js"
  ]),
  todoName: "",

  actions: {
    addTodo() {
      var todoName = this.get('todoName');

      if (!todoName) {return;}

      this.get('todos').pushObject(todoName);
      this.set('todoName', null);
    }
  }
});