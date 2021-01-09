import UIController from '../ui';

export default class CategoryItem {

    constructor(
        private category: string,
        private categoryId: string
    ) { }


    async render(): Promise<HTMLLIElement> {

        // create the element
        const li = document.createElement('li') as HTMLLIElement;
        const module = await import(`../../images/${this.category.toLowerCase()}.svg`);

        li.classList.add('nav_options_item');

        li.innerHTML = `
            <img src='${module.default}' alt="${this.category.toLowerCase()}" title="${this.category}" data-categoryid="${this.categoryId}" />
            ${this.category}
        `

        // attach onlick event listener
        li.onclick = () => UIController.renderCatergoryCards(this.category)

        // return the element
        return li
    }

}