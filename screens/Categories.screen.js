import React from 'react'
import { StyleSheet, View, Text, Dimensions, } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'

import { CATEGORIES } from '../data/dummy-data'


const Categories = (props) => {

    const renderListItem = (itemData) => {
        return(
            <TouchableOpacity 
                activeOpacity={0.7}
                style={styles.listItem}
                onPress={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params: {
                            categoryId: itemData.item.id,
                        }
                    })
                }}
            >
                <View style={{ ...styles.itemContainer, backgroundColor: itemData.item.color}}>
                    <Text style={styles.title}>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        )       
    }    

    return(
        <View style={styles.container}>
            <FlatList
                data={CATEGORIES}
                numColumns={2}
                renderItem={renderListItem}
                keyExtractor={(item) => item.id}
            />
        </View>
        
    )
}

Categories.navigationOptions = (navData) => {
    return {
        headerLeft: <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
            <Item 
                title="Menu" 
                iconName='ios-menu' 
                onPress={() => {navData.navigation.toggleDrawer()}} 
            />
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    itemContainer: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2,},
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: Dimensions.get('window').width / 2.5,
    },
    listItem: {
        flex: 1,
        margin: 15,
        height: 150,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: Dimensions.get('window').height > 700 ? 22 : 18,
        textAlign: 'right',
    },  
})

export default Categories