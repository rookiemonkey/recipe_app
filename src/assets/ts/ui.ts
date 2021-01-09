import NavItem from './components/NavItem';
import variables from './utilities/_variables';
const { base_url } = variables;

const UIController = new class UIController {

    async renderNavItems() {
        try {
            const parent = document.querySelector('#nav_options')!;
            const raw = await fetch(`${base_url}/categories.php`);
            const { categories } = await raw.json();

            for (const category of categories) {
                const { strCategory, idCategory } = category
                const li = await new NavItem(strCategory, idCategory).node();
                parent.appendChild(li);
            }
        }

        catch (error) {
            alert('Error in Rendering NavItems')
            console.log('Error in Rendering NavItems', error)
        }
    }



}

export default UIController;