import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { safeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
	const { signout } = useContext(AuthContext);

	return (
		<SafeAreaView forceInset={{top: 'always'}}>
		<View style={styles.container}>
			<Text style={styles.title}>Cuenta</Text>
			<Spacer>
				<TouchableOpacity style={styles.loginBtn} onPress={signout}>
					<Text style={styles.loginText}>Cerrar Session</Text>
				</TouchableOpacity>
			</Spacer>
		</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		height:"100%",
		backgroundColor: '#003f5c',
		alignItems: 'center',
		justifyContent: 'center',
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
	},
	title: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#fb5b5a",
        marginBottom: 10,
        alignContent: "center",
        justifyContent: "center",
    }
});

export default AccountScreen;
