
export default class NavItem {


    constructor(
        private category: string,
        private categoryId: string
    ) { }


    async node(): Promise<any> {
        const lc = this.category.toLowerCase();
        const li = document.createElement('li') as HTMLLIElement;
        const module = await import(`../../images/${lc}.svg`);

        li.classList.add('nav_options_item');

        li.innerHTML = `
            <img src='${module.default}' alt="${lc}" title="${this.category}" data-categoryid="${this.categoryId}" />
            ${this.category}
        `
        return li
    }

}