import React, {useContext } from 'react';
import { View, StyleSheet} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage} = useContext(AuthContext);
    

    console.log(state);

    return (
        <View style={styles.container}>
            <NavigationEvents 
                onWillFocus={clearErrorMessage}
            />
            <AuthForm 
            headerText="Registrate para Tracker"
            errorMessage ={state.errorMessage}
            submitButtonText="Registrarse"
            onSubmit={signup}
            route="Signin"
            link ="Ya tienes Cuenta? Mejor Inicia Session"
             />
        </View>
    );
};

SignupScreen.navigationOptions = () => {
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

export default SignupScreen;
