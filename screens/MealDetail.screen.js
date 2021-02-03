import React, { useEffect, useCallback }  from 'react'
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector, useDispatch } from 'react-redux'

import { toggleFavorite } from '../store/actions/meals.action'

import CustomHeaderButton from '../components/CustomHeaderButton'

const MealDetail = (props) => {
    const availableMeals = useSelector((state) => state.meals.meals)
    
    const mealId = props.navigation.getParam('mealId')
    
    const selectedMeal = availableMeals.find((meal) => meal.id === mealId)
    
    const isFavorite = useSelector((state) => state.meals.favoriteMeals.some((meal) => meal.id === mealId))
    
    const dispatch = useDispatch()

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId))
    }, [dispatch, mealId])

    useEffect(() => {
        props.navigation.setParams({
            toggleFavorite: toggleFavoriteHandler,
            isFavorite,
        })
    }, [toggleFavoriteHandler, isFavorite])

    return(
        <ScrollView 
            contentContainerStyle={{
                marginTop: 20,
                paddingBottom: 40,
                
            }}
        >
            <View style={styles.imageContainer}>
                <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
            </View>
            
            <View style={styles.detail}>
                <Text style={{fontFamily: 'open-sans-bold'}}>{selectedMeal.duration}m</Text>
                <Text style={{fontFamily: 'open-sans-bold'}}>{selectedMeal.complexity}</Text>
                <Text style={{fontFamily: 'open-sans-bold'}}>{selectedMeal.affordability.toUpperCase()}</Text>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map((ingredient) => <Text style={styles.text} key={ingredient} >- {ingredient}</Text>)}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map((step) => <Text style={styles.text} key={step} >- {step}</Text>)}
            <View style={styles.screen}>
                
            </View>
        </ScrollView>
    )
}

MealDetail.navigationOptions = (navigationData) => {
    const mealTitle = navigationData.navigation.getParam('mealTitle')
    
    const toggleFavorite = navigationData.navigation.getParam('toggleFavorite')
    
    const isFavorite = navigationData.navigation.getParam('isFavorite')
    
    return {
        headerTitle: mealTitle,
        headerRight: 
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                    title="Favorite" 
                    iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
                    onPress={toggleFavorite} 
                />
            </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: 200,
        alignItems: 'center'
    },
    image: {
        height: '100%',
        width: '90%',
    },
    detail: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around',
    },
    title: {
        fontSize: 25,
        marginTop: 20,
        fontFamily: 'open-sans-bold',
        textAlign: 'center',
    },
    text: {
        fontSize: 18,
        marginVertical: 10,
        marginHorizontal: 20,
    },
})

export default MealDetail