import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';

const NavLink = ({navigation, linkText, routeName}) => {

    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Spacer>
            <Text style={styles.forgot}>{linkText}</Text>
        </Spacer>
    </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    forgot:{
        color:"#FFFFFF",
        fontSize:14,
      },
});

export default withNavigation(NavLink);