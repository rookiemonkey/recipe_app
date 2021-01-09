import UIController from '../ui';
import toHighlightCategory from '../utilities/toHighlightCategory';

export default class CategoryItem {

    constructor(
        private category: string,
        private categoryId: string
    ) { }


    async render(): Promise<HTMLLIElement> {

        // create the element
        const li = document.createElement('li') as HTMLLIElement;
        const module = await import(`../../images/${this.category.toLowerCase()}.svg`);

        li.id = this.categoryId;
        li.classList.add('nav_options_item');

        li.innerHTML = `
            <img src='${module.default}' alt="${this.category.toLowerCase()}" title="${this.category}" data-categoryid="${this.categoryId}" />
            ${this.category}
        `

        // attach onlick event listener
        li.onclick = () => {
            toHighlightCategory(this.categoryId);
            UIController.renderProductCardsByCat(this.category);
        }

        // return the element
        return li
    }

}