import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Lasagna',
        description: 'Loaded with parmesan cheese and layered with a mix of vegetables and minced lamb',
        price: 549,
    },

    {
        id: 'm2',
        name: 'Caprese Salad with Pesto Sauce',
        description: 'Nothing like a fresh tomatoes and mozzarella cheese salad in summers!',
        price: 179,
    },
    {
        id: 'm3',
        name: 'Margherita Pizza',
        description: 'You just can\'t go wrong with that tomato, basil and fresh mozzarella combo.',
        price: 343,
    },

    {
        id: 'm4',
        name: 'Mushroom Risotto',
        description: 'A plateful of buttery risotto with the goodness of mushrooms.',
        price: 190.50,
    },

    {
        id: 'm5',
        name: 'Classic Pasta Amatriciana',
        description: 'An easy Italian tomato sauce, flavoured with crispy pancetta, sauteed onion and garlic ',
        price: 245.50,
    },

    {
        id: 'm6',
        name: 'Pistachio Panna Cotta',
        description: 'Chilled and served with chopped pistachios garnishing..End your meals, the Italian way! ',
        price: 150,
    },


];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;