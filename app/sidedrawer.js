import React, { Component } from 'react'
import { Text, StyleSheet, View ,Button} from 'react-native'
import {NavigationActions} from 'react-navigation'
export default class sidedrawer extends Component {
    navigateToScreen=(route)=>()=>{
        const navigateAction = NavigationActions.navigate({
            routeName:route
        })
        this.props.navigation.dispatch(navigateAction)
    }
    render() {
        return (
            <View style={styles.container}>
                <Text> Hello Drawer </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
