import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'

import { useSelector } from 'react-redux'

import MealList from '../components/MealList'

const CategoryMeals = (props) => {
    const categoryId = props.navigation.getParam('categoryId')

    const availableMeals = useSelector((state) => state.meals.filteredMeals)

    const displayedMeals = availableMeals.filter(
        (meal) => meal.categoryIds.indexOf(categoryId) >= 0 
    )
    
    if(displayedMeals.length === 0) {
        return <View style={styles.textContainer}>
            <Text>No meals found, maybe check your filters?</Text>
        </View>
    }
    
    return(
        <MealList listData={displayedMeals} navigation={props.navigation} />
    )
}

CategoryMeals.navigationOptions = (navigationData) => {
    const categoryId = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find((item) => item.id === categoryId)

    return {
        headerTitle: selectedCategory.title
    }
}

const styles = StyleSheet.create({
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default CategoryMeals