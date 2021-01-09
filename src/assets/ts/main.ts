import { State } from './types';
import UIController from './ui';

const App = new class RecipeApp {

    private state: State

    constructor() {
        this.state = {
            background: 0
        }
    }

    router() {

    }

}

UIController.renderNavItems();

export default App;