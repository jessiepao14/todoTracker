// import Model from '@ember-data/model';
import Model, { attr } from '@ember-data/model';
import { action } from '@ember/object';
// import DS from 'ember-data';

export default class TaskModel extends Model {
  @attr('string') title;
  @attr('string') description;
  @attr('date') date;
}
