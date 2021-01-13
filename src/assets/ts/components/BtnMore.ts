import RecipeCard from './RecipeCard';
import arrow from '../../images/arrow.svg';
import variables from '../utilities/_variables';
const { base_url } = variables;

export default class BtnMore {

    constructor(
        private request: string
    ) { }

    async render(): Promise<void> {

        // create the element
        const div = document.createElement('div');
        div.id = `btn_more_container`;

        div.innerHTML = `
            <button id="btn_more">
                Random<img src="${arrow}" />
            </button>
        `


        // mount to DOM
        const main = document.querySelector('#list') as HTMLElement;
        main.appendChild(div);



        // attach onlick event listener
        const button = document.querySelector('#btn_more') as HTMLButtonElement

        button.onclick = async () => {
            const parent = document.querySelector('#list_recipecards') as HTMLLIElement;

            for (let count = 1; count <= 9; count++) {
                const raw = await fetch(`${base_url}${this.request}`);
                const { meals } = await raw.json();
                const meal = meals[0]
                const { idMeal, strMeal, strCategory, strMealThumb, strSource, strArea } = meal
                const li = await new RecipeCard(idMeal, strMeal, strMealThumb, strArea, strCategory, strSource).render();

                parent.appendChild(li);

                const image = document.getElementById(`image_${idMeal}`) as HTMLDivElement;
                image.style.backgroundImage = `url(${strMealThumb})`;
            }
        }
    }
}