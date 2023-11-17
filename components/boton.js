import { StyleSheet, TouchableOpacity, Text } from "react-native";

export function Boton({onPress,text}) {
    //console.log(text);
    text = (text  ?  text : 'BOTON');
    return (
        <>
            <TouchableOpacity style={styles.btn} onPress={onPress}>
                <Text style={styles.btnText}>{text}</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    btnText:{
        color: "#FFF"
      },
      btn: {
        backgroundColor: "#0000FF",
        color: "#FFF",
        padding: 15,
        margin: 10,
        borderRadius: 10
      },
});