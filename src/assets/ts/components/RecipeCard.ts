import UIController from '../ui';

export default class RecipeCard {

    constructor(
        private idMeal: string,
        private strMeal: string,
        private strMealThumb: string,
        private strArea: string,
        private strCategory: string,
        private strSource: string
    ) { }

    async render(): Promise<HTMLLIElement> {
        const li = document.createElement('li') as HTMLLIElement;

        li.id = this.idMeal;
        li.classList.add('list_recipecards_item');

        // get the country flag
        let flag = null;
        if (this.strArea !== undefined && this.strArea !== 'Unknown')
            flag = await import(`../../images/flag_${this.strArea}.svg`)

        li.innerHTML = `
            <div class="recipe_image" id="image_${this.idMeal}">
                <div class="overlay"></div>
            </div>
            <div class="recipe_meta">
                <h2>${this.strMeal}</h2>

                ${flag
                ? `<h5>
                    <img src="${flag.default}" />
                    ${this.strArea} &nbsp; | &nbsp; ${this.strCategory}
                </h5>`
                : `<h5>&nbsp; ${this.strCategory}</h5>`}

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