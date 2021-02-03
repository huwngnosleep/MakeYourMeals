import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { Ionicons } from '@expo/vector-icons'

import Categories from '../screens/Categories.screen'
import CategoryMeals from '../screens/CategoryMeals.screen'
import MealDetail from '../screens/MealDetail.screen'
import Favorites from '../screens/Favorites.screen'
import Filters from '../screens/Filters.screen'

import Colors from '../constants/Colors'

const defaultStackNavigationOptions = {
    headerStyle: {
        backgroundColor: Colors.primary,
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold',
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: 'black',
}

const MealsStackNavigator = createStackNavigator({
    Categories: {
        screen: Categories,
        navigationOptions: {
            headerTitle: 'Meal Categories',
        },
    },
    CategoryMeals: {
        screen: CategoryMeals,
    },
    MealDetail: {
        screen: MealDetail,
    },
}, {
    defaultNavigationOptions: defaultStackNavigationOptions
})

const FavStackNavigator = createStackNavigator({
    Favorites: {
        screen: Favorites,
        navigationOptions: {
            headerTitle: 'Your Favorites'
        }
    },
    MealDetail: {
        screen: MealDetail,
    }
}, {
    defaultNavigationOptions: defaultStackNavigationOptions
})

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsStackNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons 
                    name="ios-restaurant"
                    size={25}
                    color={tabInfo.tintColor}
                />
            }
        }
    },
    Favorites: {
        screen: FavStackNavigator,
        navigationOptions: {
            tabBarLabel: "Favorite!!!",
            tabBarIcon: (tabInfo) => {
                return <Ionicons 
                    name="ios-star"
                    size={25}
                    color={tabInfo.tintColor}
                />
            }
        }
    },
}, {
    tabBarOptions: {
        labelStyle: {
            fontFamily: 'open-sans',
        },
        activeTintColor: Colors.secondary,
    }
})

const FiltersNavigator = createStackNavigator({
    Filters: {
        screen: Filters,
        navigationOptions: {
            headerTitle: 'Filter Meals'
        }
    }
}, {
    contentOptions: {
        activeTintColor: Colors.primary,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
})

const MainNavigator = createDrawerNavigator({
    Meals: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: {
        screen: FiltersNavigator,
        navigationOptions: {

        }
    }
})

export default createAppContainer(MainNavigator)