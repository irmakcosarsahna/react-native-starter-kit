import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {withNetwork} from '@hocs';
// Hocs
import {StartMiddleware} from './middleware';
import {
    FriendsScreen,
    GameScreen,
    HistoryScreen,
    HomeScreen,
    MarketScreen,
    RatingScreen,
    SettingsScreen,
    WelcomeScreen
} from "../screens";

export type PrimaryParamList = {
    bottomTab: undefined;
};

const Stack = createStackNavigator<PrimaryParamList>();

const stacks = [
    {
        name: 'StartMiddleware',
        component: StartMiddleware,
    },
    {
        name: 'WelcomeScreen',
        component: WelcomeScreen,
    },
    {
        name: 'HomeScreen',
        component: HomeScreen,
    },
    {
        name: 'MarketScreen',
        component: MarketScreen,
    },
    {
        name: 'GameScreen',
        component: GameScreen,
    },
    {
        name: 'RatingScreen',
        component: RatingScreen,
    },
    {
        name: 'SettingsScreen',
        component: SettingsScreen,
    },
    {
        name: 'HistoryScreen',
        component: HistoryScreen,
    },
    {
        name: 'FriendsScreen',
        component: FriendsScreen,
    },
];

const Navigator = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            gestureEnabled: false,
            cardStyle: {backgroundColor: 'transparent'},
            cardOverlayEnabled: true,
            cardStyleInterpolator: ({current: {progress}}) => ({
                cardStyle: {
                    opacity: progress.interpolate({
                        inputRange: [0, 0.5, 0.9, 1],
                        outputRange: [0, 0.25, 0.7, 1],
                    }),
                },
                overlayStyle: {
                    opacity: progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 0.5],
                        extrapolate: 'clamp',
                    }),
                },
            }),
        }}
    >
        {stacks.map((stack, i) => (
            <Stack.Screen key={i.toString()} {...stack} />
        ))}
    </Stack.Navigator>
  );

const MainNavigator = withNetwork(Navigator);

export { MainNavigator };

const exitRoutes = ['bottomTab'];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
