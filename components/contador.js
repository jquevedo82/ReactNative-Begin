import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Boton } from './boton';

export function Contador({ navigation }) {

    const [contador, setContador] = useState(0);


    const aumentarContador = () => {
        const nuevoValor = contador + 1;
        setContador(nuevoValor)
    }

    const disminuirContador = () => {
        const nuevoValor = contador - 1;
        setContador(nuevoValor)
    }

    return (
        <>
            <View style={styles.container}>

                <Text style={styles.textHolaMundo}>Hola Mundo! Creamos un contador</Text>
                <Text style={styles.textContador}>
                    {contador}
                </Text>
                <Boton onPress={disminuirContador} text="-1" />
                <Boton onPress={aumentarContador} text="+1" />

                <Boton text="Ir a contador 2" onPress={() => navigation.navigate("Contador2")} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    textHolaMundo: {
        fontSize: 20
    },
    textContador: {
        fontSize: 50
    },
    btnText: {
        color: "#FFF"
    },
    btnAlert: {
        backgroundColor: "#0000FF",
        color: "#FFF",
        padding: 15,
        margin: 10,
        borderRadius: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#CCC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        borderColor: "#000",
        borderWidth: 1,
        padding: 10,
        borderRadius: 10

    }
});
;