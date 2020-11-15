import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';

const TrackDetailScreen = ({ navigation }) => {
    const { state } = useContext(TrackContext);
    const _id = navigation.getParam('_id');

    const track = state.find(t => t._id === _id);
    const initialCoords = track.locations[0].coords;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{track.name}</Text>
            <MapView
                initialRegion={{
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01,
                    ...initialCoords
                }}
                style={styles.map}
            >
                <Polyline coordinates={track.locations.map(loc => loc.coords)} strokeColor='#58DB00' strokeWidth={4}/>
            </MapView>
        </View>
    );
};

TrackDetailScreen.navigationOptions = {
    title: 'Detalle de Track'
};


const styles = StyleSheet.create({
    map: {
        height: '50%',
        width: '90%',
        borderColor: '#fb5b5a',
        borderWidth: 8,
        borderRadius: 9,
        marginBottom: 10,
        alignSelf: "center",
    },
    container: {
        height: "100%",
        backgroundColor: '#003f5c',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    title: {
        fontWeight: "bold",
        fontSize: 30,
        color: "#fb5b5a",
        marginBottom: 5,
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 10,
    }
});

export default TrackDetailScreen;