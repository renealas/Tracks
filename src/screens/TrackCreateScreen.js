import '../_mockLocation';
import React, {useContext, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView, withNavigationFocus} from 'react-navigation';
import Map from '../components/Map';
import {Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackFrom from '../components/TrackForm';

const TrackCreateScreen = ({isFocused}) => {
    const {state: {recording}, addLocation} = useContext(LocationContext);
    const callback = useCallback((location) => {
        addLocation(location, recording);
    }, [recording])
    const [err] = useLocation(isFocused || recording, callback);

    return ( 
        <SafeAreaView forceInset={{top: 'always'}} >
        <View style={styles.container}>
        <Text h3 style={styles.title}>Crear Track</Text>
        <Map/>
        {err ? <Text style={styles.error}>Porfavor active el Permiso de Localización</Text>: null}
        <TrackFrom/>
        </View>
        </SafeAreaView>
        );
}	

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: '#003f5c',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    title: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#fb5b5a",
        marginBottom: 5,
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 30,
    },
    error: {
        fontSize: 16,
        color: 'red',
        marginTop: 5,
        marginBottom: 5,
        textAlign: "center",
        fontWeight: "bold",
    }
});

export default withNavigationFocus(TrackCreateScreen);