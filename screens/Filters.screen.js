import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View, Switch, Alert } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'
import { useDispatch } from 'react-redux'

import { setFilters } from '../store/actions/meals.action'

import Colors from '../constants/Colors'

const FilterSwitch = (props) => {
    return(
        <View style={styles.filtersContainer}>
            <Text>{props.label}</Text>
            <Switch 
                trackColor={{true: '#00b300', false: Colors.secondary}}
                thumbColor={Colors.mainWhite}
                value={props.state}
                onValueChange={props.onChange}
            />
        </View>
    )
}

const Filters = (props) => {

    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)

    const dispatch = useDispatch()

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            isGlutenFree,
            isLactoseFree,
            isVegan,
            isVegetarian,
        }

        dispatch(setFilters(appliedFilters))
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch])

    useEffect(() => {
        props.navigation.setParams({saveFilters})
    }, [saveFilters])

    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Filters</Text>
            <FilterSwitch 
                label="Gluten-free" 
                state={isGlutenFree} 
                onChange={(newValue) => setIsGlutenFree(newValue)}
            /> 
            <FilterSwitch 
                label="Lactose-free" 
                state={isLactoseFree} 
                onChange={(newValue) => setIsLactoseFree(newValue)}
            /> 
            <FilterSwitch 
                label="Vegan" 
                state={isVegan} 
                onChange={(newValue) => setIsVegan(newValue)}
            /> 
            <FilterSwitch 
                label="Vegetarian" 
                state={isVegetarian} 
                onChange={(newValue) => setIsVegetarian(newValue)}
            /> 
        </View>
    )
}

Filters.navigationOptions = (navData) => {
    return {
        headerLeft: <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
            <Item 
                title="Menu" 
                iconName='ios-menu' 
                onPress={() => {navData.navigation.toggleDrawer()}} 
            />
        </HeaderButtons>,
        headerRight: <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
            <Item 
                title="Save" 
                iconName='ios-checkmark-circle-outline' 
                onPress={() => {
                    navData.navigation.getParam('saveFilters')
                    Alert.alert(
                        'Filters saved',
                        'Go to check your category meals',
                        [{ text: 'Okay', style: 'default'}]
                    )
                }} 
            />
        </HeaderButtons>,
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center',
    },
    filtersContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 10,
    },
})

export default Filters