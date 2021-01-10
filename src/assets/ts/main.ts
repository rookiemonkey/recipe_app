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

    onload() {
        UIController.renderCategoryItems();
        UIController.renderRecipeCards();
    }

}

window.onload = App.onload;

export default App;