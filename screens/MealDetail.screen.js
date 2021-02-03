import React from 'react'
import { Button, StyleSheet, View, Text, ScrollView, Image, } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { MEALS } from '../data/dummy-data'

import CustomHeaderButton from '../components/CustomHeaderButton'

const MealDetail = (props) => {
    const mealId = props.navigation.getParam('mealId')

    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

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
    const mealId = navigationData.navigation.getParam('mealId')
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)
    
    return {
        headerTitle: selectedMeal.title,
        headerRight: 
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="Favorite" iconName="ios-star"
                    onPress={() => {}} 
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