import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import MealItem from './MealItem'



const MealList = (props) => {
    const renderMealItem = (itemData) => {
        return(
            <MealItem 
                title={itemData.item.title}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                image={itemData.item.imageUrl}
                onSelectMeal={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetail',
                        params: {
                            mealId: itemData.item.id
                        }
                    })    
                }}
            />
        )
    }

    return(
        <View style={styles.container}>
            <FlatList 
                data={props.listData}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
                style={{width: '90%',}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    }
})

export default MealList