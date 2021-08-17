/* eslint-disable ember/no-classic-classes */
import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class TasksNewController extends Controller {
  @action
  addTask() {
    let title = this.title;
    let description = this.description;
    let date = this.date;

    //Create New Task
    let newTask = this.store.createRecord('new-task', {
      title: title,
      description: description,
      date: new Date(date),
    });
    //Save to Database
    
    newTask.save().then(response => {
      alert("Thank you your item was added")
    })

    // alert(this.store.findAll('new-task'))
    // //Clear Form
    this.setProperties({
      title: '',
      description: '',
      date: '',
    });
  }
}
