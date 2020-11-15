import React, { useContext } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
    const { state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();

    return <>
        <TextInput
            onChangeText={changeName}
            value={name}
            placeholder="Titulo: Mi Track"
            placeholderTextColor="#FFFFFF"
            style={styles.inputView}
        />
        {recording
            ? <TouchableOpacity
                style={styles.loginBtnStop}
                onPress={stopRecording}
            >
                <Text style={styles.loginTextStop}>Parar Track</Text>
            </TouchableOpacity>
            : <TouchableOpacity
                style={styles.loginBtnStart}
                onPress={startRecording}
            >
                <Text style={styles.loginTextStart}>Comenzar Track</Text>
            </TouchableOpacity>
        }
        {
            !recording && locations.length
                ? <TouchableOpacity
                    style={styles.loginBtnSave}
                    onPress={saveTrack}
                >
                    <Text style={styles.loginTextStop}>Guardar Track</Text>
                </TouchableOpacity>
                : null
        }
    </>
}

const styles = StyleSheet.create({
    inputView: {
        width: "80%",
        backgroundColor: "#465881",
        borderRadius: 25,
        height: 60,
        justifyContent: "center",
        padding: 20,
        color: "#FFFFFF",
        marginBottom: 5,
        alignSelf: "center",
        textAlign: "center",
    },
    loginBtnStop: {
        width: 300,
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        marginBottom: 5,
        alignSelf: "center",
    },
    loginBtnStart: {
        width: 300,
        backgroundColor: "#9bfb5b",
        borderRadius: 25,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 5,
        alignSelf: "center",
    },
    loginBtnSave: {
        width: 300,
        backgroundColor: "#9932cc",
        borderRadius: 25,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 40,
        alignSelf: "center",
    },
    loginTextStop: {
        color: "white"
    },
    loginTextStart: {
        color: "black"
    }
});

export default TrackForm;
