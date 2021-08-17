import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TasksListRoute extends Route {
    @service store;
    model() {
        alert(this.store.findAll('task'))
        return this.store.findAll('task')
    }
}
