import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReadRecipeScreen from './screens/ReadRecipeScreen';
import WriteRecipeScreen from './screens/WriteRecipeScreen';

export default class App extends React.Component {
    render() {
        return (
            <AppContainer/>
            )
    }
}

const TabNavigator = createBottomTabNavigator({
    WriteRecipe: { screen: WriteRecipeScreen },
    ReadRecipe: { screen: ReadRecipeScreen }
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: () => {
                const routeName = navigation.state.routeName
                if (routeName === 'ReadRecipe') {
                    return (
                        <Image source={require("./assets/cartoon-chef.jpg")}
                            style={{width: 40, height: 40}}/>
                    )
                } else if (routeName === 'WriteRecipe') {
                    return (
                        <Image source={require("./assets/cartoon-recipe-book.jpg")}
                            style={{ width: 40, height: 40 }}/>
                    )
                }
            }
        })
    }
)

const AppContainer = createAppContainer(TabNavigator)