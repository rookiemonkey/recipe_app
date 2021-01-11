import App from '../main';
import brand from '../../images/brand.svg';
import icon_ingredients from '../../images/icon_ingredients.svg';
import icon_instructions from '../../images/icon_instructions.svg';

export default class Recipe {

    constructor(
        private recipe: any
    ) { }

    render(): void {

        // parse ingredient/instructions data
        const instructions: string[] = this.recipe.strInstructions.split("\r\n");
        const ingredients = new Map();

        for (let count = 1; count <= 20; count++) {

            if (!Boolean(this.recipe[`strIngredient${count}`])) break;

            const key = this.recipe[`strIngredient${count}`];
            const value = this.recipe[`strMeasure${count}`];
            ingredients.set(key, value)

        }

        // create ingredients element
        const ing_container = document.createElement('ul');

        ingredients.forEach((value, key) => {
            ing_container.innerHTML = `
                ${ing_container.innerHTML}
                <li>${value} ${key}</li>
            `
        })

        // create instructions element
        const ins_container = document.createElement('ol');

        instructions.forEach(ins => {
            if (ins)
                ins_container.innerHTML = `
                    ${ins_container.innerHTML}
                    <li>${ins}</li>
                `
        })


        // create main element  
        const container = document.createElement('div');
        container.id = `recipe_container`;
        container.innerHTML = `
            <nav id="nav">
                <div id="nav_brand">
                    <img class="nav_recipe" src="${brand}" alt="brand" style="cursor: pointer"/>
                    <h1  class="nav_recipe" style="cursor: pointer">Cusina</h1>
                </div>
            </nav>
            <section id="recipe_details">
                <div class="recipe_details_image">
                    <h2>${this.recipe.strMeal}</h2>
                    <h3>${this.recipe.strArea} &nbsp; | &nbsp; ${this.recipe.strCategory}</h3>
                </div>
                <div class="recipe_details_meta">
                    <div class="recipe_details_meta_ingredients">
                        <h4><img src="${icon_ingredients}" /> Ingredients</h4>
                        <ul id="list_ingredients">
                            ${ing_container.innerHTML}
                        </ul>
                    </div>
                    <div class="recipe_details_meta_instructions">
                        <h4><img src="${icon_instructions}" /> Instructions</h4>
                        <ol id="list_instructions">
                            ${ins_container.innerHTML}
                        </ol>
                    </div>
                </div>
            </section>
        `;

        // mount to DOM
        const parent = document.querySelector('#recipe') as HTMLElement;
        parent.appendChild(container);


        // mount image
        const image = document.querySelector('.recipe_details_image') as HTMLDivElement;
        image.style.backgroundImage = `linear-gradient(275deg, white, transparent), url('${this.recipe.strMealThumb}')`


        // mount event listener to navigation
        const navigations: any = [...document.querySelectorAll('.nav_recipe')!];
        navigations.forEach((n: any) => n.onclick = () => App.router('list'));

    }

}