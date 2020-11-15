import React, {useContext} from 'react';
import {StyleSheet, FlatList, TouchableOpacity, View} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {ListItem} from 'react-native-elements';
import {Context as TrackContext} from '../context/TrackContext';

const TrackListScreen = ({navigation}) => {
    const {state, fetchTracks} = useContext(TrackContext);

    console.log(state);

    return <View style={styles.container}>
        <NavigationEvents onWillFocus={fetchTracks} />
        <FlatList
        contentContainerStyle={styles.lista}
        data={state}
        keyExtractor={item => item._id}
        renderItem={({item}) => {
            return <TouchableOpacity onPress={() => 
                navigation.navigate('TrackDetail', {_id: item._id})
            }>
                <ListItem>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Chevron />
                </ListItem>
            </TouchableOpacity>
        }}
        />
       </View>
};

TrackListScreen.navigationOptions = {
    title: 'Tracks'
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    lista:{
        marginTop: '20%',
        justifyContent: "center",
    },

});

export default TrackListScreen;