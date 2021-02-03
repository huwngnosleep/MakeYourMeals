import React from 'react'
import { StyleSheet, } from 'react-native'
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'

const CustomHeaderButton = (props) => {
    return(
        <HeaderButton 
            {...props}
            IconComponent={Ionicons}
            iconSize={23} 
            color="black"
        />
    )
}

const styles = StyleSheet.create({
    
})

export default CustomHeaderButton