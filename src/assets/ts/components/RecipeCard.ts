import UIController from '../ui';

export default class RecipeCard {

    constructor(
        private idMeal: string,
        private strMeal: string,
        private strMealThumb: string,
        private strCategory: string,
        private strSource: string
    ) { }

    render(): HTMLLIElement {
        const li = document.createElement('li') as HTMLLIElement;

        li.id = this.idMeal;
        li.classList.add('list_recipecards_item');

        li.innerHTML = `
            <div class="recipe_image" id="image_${this.idMeal}">
                <div class="overlay"></div>
            </div>
            <div class="recipe_meta">
                <h2>${this.strMeal}</h2>
                <h5>${this.strCategory}</h5>
                ${this.strSource
                ? `<p><a href="${this.strSource}" target="_blank">Source</a></p>`
                : ''
            }
            </div>
        `

        li.onclick = async () => UIController.renderRecipe(this.idMeal)

        return li;
    }
}