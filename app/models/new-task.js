import Model, { attr } from '@ember-data/model';

export default class NewTaskModel extends Model {
  @attr('string') title;
  @attr('string') description;
  @attr('date') date;
}
