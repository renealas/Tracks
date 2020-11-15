import React, {useContext} from 'react';
import { View, StyleSheet} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = ({ navigation }) => {
    const { state, signin, clearErrorMessage} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents 
                onWillFocus={clearErrorMessage}
            />
            <AuthForm 
            headerText="Iniciar Session para Tracker"
            errorMessage ={state.errorMessage}
            onSubmit={signin}
            submitButtonText="Iniciar Session"            
            route="Signup"
            link ="Todavia No tienes Cuenta? Mejor Registrate"
             />
        </View>
    );
};

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});

export default SigninScreen;
