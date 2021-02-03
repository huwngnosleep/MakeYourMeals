import React from 'react'
import { Button, StyleSheet, Text, View, } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import { CATEGORIES, MEALS } from '../data/dummy-data'

import MealList from '../components/MealList'

const CategoryMeals = (props) => {
    const categoryId = props.navigation.getParam('categoryId')

    const displayedMeals = MEALS.filter(
        (meal) => meal.categoryIds.indexOf(categoryId) >= 0 
    )
    
    
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
    
})

export default CategoryMeals