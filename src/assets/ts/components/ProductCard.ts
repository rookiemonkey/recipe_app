
export default class ProductCard {

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
        li.style.backgroundImage = `url(${this.strMealThumb})`;
        li.classList.add('list_recipecards_item');

        li.innerHTML = `
            <div class="overlay">
                <h3>${this.strMeal}</h3>
                <h5>${this.strCategory}</h5>
                <p><a href="${this.strSource}">Source</a></p>
            </div>
        `

        return li;
    }
}