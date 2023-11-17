import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Boton } from "../components/boton";

const ScreenOne = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Screen One</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.contentText}>Menu</Text>
                <Boton text="Volver a Home" onPress={() => navigation.navigate('Home')}></Boton>
                <Boton text="Ir a Screen Two" onPress={() => navigation.navigate('ScreenTwo')}></Boton>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ACC'
    },
    header: {
        flex: 0.2,
        backgroundColor: '#CFC',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    content: {
        flex: 0.8,
        backgroundColor: '#FFF',
        padding: 20
    },
    contentText: {
        fontSize: 18
    }
});
export default ScreenOne;