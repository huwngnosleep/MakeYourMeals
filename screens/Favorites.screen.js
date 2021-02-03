import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList'

const Favorites = (props) => {
    const favoriteMeals = useSelector((state) => state.meals.favoriteMeals)

    if( favoriteMeals.length === 0 ) {
        return <View style={styles.content}>
            <Text>No favorite meals found!. Start adding some!</Text>
        </View>
    }
    return(
        <MealList listData={favoriteMeals} navigation={props.navigation} />
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Favorites