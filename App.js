import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { BottomTabBar, createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import {Provider as TrackProvider} from './src/context/TrackContext';
import {setNavigator} from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';  
 
const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: {    
      screen: createStackNavigator({
        TrackList: TrackListScreen,
        TrackDetail: TrackDetailScreen,
      }),
      navigationOptions:{
        tabBarLabel: 'Lista Track',
        tabBarIcon: ({tintColor})=>(  
          <Icon name="layer-group" color={'#fb5b5a'} size={25}/>  
      ),
      style: {
        backgroundColor: '#003f5c'
      },
      },
    },
    TrackCreate: {
      screen: TrackCreateScreen,
      navigationOptions:{
        tabBarLabel: 'Crear Track',
        tabBarIcon: ({tintColor})=>(  
          <Icon name="walking" color={'#fb5b5a'} size={25}/>  
      ),
      style: {
        backgroundColor: '#003f5c'
      }
      }
    },
    Account: {
      screen: AccountScreen, 
      navigationOptions:{
        tabBarLabel: 'Cuenta',
        tabBarIcon: ({tintColor})=>(  
          <Icon name="user" color={'#fb5b5a'} size={25}/>  
      ),
      },
      tabBarOptions:{
        style: {
          backgroundColor: '#003f5c'
        }
      },
    },
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <TrackProvider>
    <LocationProvider>
    <AuthProvider>
      <App  
      ref={(navigator) => {
        setNavigator(navigator)
        }}
        />
    </AuthProvider>
    </LocationProvider>
    </TrackProvider>
  );
};