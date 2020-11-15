import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { Text, Button, Input, Image } from 'react-native-elements';
import Spacer from './Spacer';
import NavLink from './NavLink';

const AuthForm = ({headerText, errorMessage, onSubmit, submitButtonText, route, link}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Spacer>
                <Image
                    source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/flutter-chat-8b2e0.appspot.com/o/others%2Fpngwing.com.png?alt=media&token=e8752884-3c51-43cb-bd40-3d142b3f2bbd' }}
                    style={styles.image}
                />
            </Spacer>
            <Spacer>
                <Text h3 style={styles.title}>{headerText}</Text>
            </Spacer>
            <TextInput
                placeholder="Correo"
                placeholderTextColor="#FFFFFF"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputView}
            />
            <Spacer />
            <TextInput
                secureTextEntry
                placeholder="Contraseña"
                placeholderTextColor="#FFFFFF"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputView}
            />
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <Spacer>
                <NavLink linkText={link} routeName={route} style={styles.forgot}/>
            </Spacer>
            <Spacer>
                <TouchableOpacity style={styles.loginBtn} onPress={() => onSubmit({ email, password })}>
                    <Text style={styles.loginText}>{submitButtonText}</Text>
                </TouchableOpacity>
            </Spacer>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#fb5b5a",
        marginBottom: 5,
        alignContent: "stretch",
        justifyContent: "center",
        alignSelf: "center",
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15,
        textAlign: "center",
        fontWeight: "bold",
    },
    image: {
        width: 100,
        height: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    inputView: {
        width: "80%",
        backgroundColor: "#465881",
        borderRadius: 25,
        height: 60,
        marginBottom: 2.5,
        justifyContent: "center",
        padding: 20,
        color: "#FFFFFF",
    },
    loginBtn: {
        width: 300,
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        marginBottom: 10
    },
    loginText: {
        color: "white"
    }
});

export default AuthForm;