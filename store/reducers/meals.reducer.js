import { MEALS } from '../../data/dummy-data'
import { SET_FILTERS, TOGGLE_FAVORITE } from '../actions/meals.action';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex((meal) => meal.id === action.mealId)
            if(existingIndex >= 0) {
                const curFavMeals = [...state.favoriteMeals]
                curFavMeals.splice(existingIndex, 1)
                return {...state, favoriteMeals: curFavMeals}
            } else {
                const addedMeal = state.meals.find((meal) => meal.id === action.mealId)
                return {...state, favoriteMeals: state.favoriteMeals.concat(addedMeal)}
            }
        case SET_FILTERS:
            const appliedFilters = action.filters
            const filteredMeals = state.meals.filter((meal) => {
                if(appliedFilters.isGlutenFree && !meal.isGlutenFree) {
                    return false
                }
                if(appliedFilters.isLactoseFree && !meal.isLactoseFree) {
                    return false
                }
                if(appliedFilters.isVegan && !meal.isVegan) {
                    return false
                }
                if(appliedFilters.isVegetarian && !meal.isVegetarian) {
                    return false
                }
                return true
            })
            return {...state, filteredMeals}

        default: 
            return state
    }  
}

export default mealsReducer