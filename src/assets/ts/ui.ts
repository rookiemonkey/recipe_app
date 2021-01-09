import CategoryItem from './components/CategoryItem';
import ProductCard from './components/ProductCard';
import BtnMore from './components/BtnMore';
import variables from './utilities/_variables';
const { base_url } = variables;

const UIController = new class UIController {

    async renderCategoryItems(): Promise<void> {
        try {
            const parent = document.querySelector('#nav_options') as HTMLLIElement;
            const raw = await fetch(`${base_url}/categories.php`);
            const { categories } = await raw.json();

            for (const category of categories) {
                const { strCategory, idCategory } = category
                const li = await new CategoryItem(strCategory, idCategory).render();
                parent.appendChild(li);
            }
        }

        catch (error) {
            alert('Error in Rendering NavItems')
            console.log('Error in Rendering NavItems', error)
        }
    }


    async renderProductCards(): Promise<void> {
        try {
            const more = document.querySelector('#btn_more') as HTMLButtonElement;
            const parent = document.querySelector('#list_recipecards') as HTMLLIElement;
            const datas: any[] = new Array();

            for (let count = 1; count <= 9; count++) {
                const raw = await fetch(`${base_url}/random.php`);
                const { meals } = await raw.json();
                datas.push(meals[0])
            }

            for (const meal of datas) {
                const { idMeal, strMeal, strCategory, strMealThumb, strSource } = meal;
                const li = new ProductCard(idMeal, strMeal, strMealThumb, strCategory, strSource).render();
                parent.appendChild(li);
            }

            if (!more) new BtnMore('/random.php').render();
        }

        catch (error) {
            alert('Error in Rendering ProductCards')
            console.log('Error in Rendering ProductCards', error)
        }
    }

}

export default UIController;