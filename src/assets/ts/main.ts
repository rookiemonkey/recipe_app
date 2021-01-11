import { State } from './types';
import UIController from './ui';

const App = new class RecipeApp {

    private state: State

    constructor() {
        this.state = {
            route: 'list',
            background: 0
        }
    }


    router(route: string) {
        const displays = [...document.querySelectorAll(`[data-route]`)]
        this.state.route = route;

        if (route != 'recipe')
            document.querySelector('[data-route="recipe"]')!.innerHTML = ``

        displays.forEach((display: any) => {

            display.dataset.route == route
                ? display.style.display = 'block'
                : display.style.display = 'none'

        })

    }


    getState(): State {
        return { ...this.state }
    }


    onload(): void {
        UIController.renderCategoryItems();
        UIController.renderRecipeCards();
    }


    onchangeBackground(): void {
        this.state.background++

        if (this.state.background >= 10) this.state.background = 0
    }

}

window.onload = App.onload;

export default App;