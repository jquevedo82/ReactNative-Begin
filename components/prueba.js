import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Boton } from "./boton";

export const Prueba = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Encabezado</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.contentText}>Contenido</Text>
                <Boton text="Ir a Contador" onPress={() => navigation.navigate('Contador')}></Boton>
                <Boton text="Ir a Flex" onPress={() => navigation.navigate('Flex')}></Boton>
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
        backgroundColor: '#CCC',
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