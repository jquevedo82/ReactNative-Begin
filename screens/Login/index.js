import { useState } from "react";
import { TextInput, View } from "react-native";

import AwesomeAlert from 'react-native-awesome-alerts';

import { Dialog, ALERT_TYPE, Toast } from "react-native-alert-notification"

import { Boton } from "../../components/boton";
import { styles } from "./Login.style";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showAlert, setshowAlert] = useState(false);
    const [alertTitle, setalertTitle] = useState("");
    const [alertMsg, setalertMsg] = useState("false");
    const validarMail = () => {
        //validar amil
    }
    const Ingresar = async() => {

        if (email.trim() === "" || password.trim() === "") {

            //usando alertNotification
            Dialog.show({
                type: ALERT_TYPE.DANGER,
                title: "Error",
                textBody: "Complete el formulario",
                button: "Ok",
                closeOnOverlayTap: false,
            });

            //ejemplo awesomeAlert
            // setalertTitle("Error");
            // setalertMsg("Complete el formulario");
            // setshowAlert(true);

            return;
        }
        setLoading(true);
        const dataToSend = {
            username: email,
            password: password
        }
        //console.log(dataToSend);
        await fetch("http://192.168.0.123:8081/auth/login",{
            method:"POST",
            headers: {
                "Content-Type":"application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwicm9sZXMiOlsiYWRtaW4iLCJ1c2VyIl0sImlhdCI6MTcwMDA3NzIyMSwiZXhwIjoxNzAwMDgwODIxfQ.I8yrVSP0bj9dftHpXfWxFIBMNWJkp4ixaut_q5AJxQQ",
            },
            body: JSON.stringify(dataToSend)
        }).then((response) => response.json())
        .then((data) => {
          //  console.log(data);
            Toast.show({
                type:ALERT_TYPE.DANGER,
                title:"Error",
                textBody: JSON.stringify(data),
            })
        })
        .catch((error) => {
            Dialog.show({
                type: ALERT_TYPE.DANGER,
                title: "Error2",
                textBody: error.toString(),

            });
        })
        setLoading(false);
    }


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Correo Electronico"
                placeholderTextColor="#AAAAAA"
                onChangeText={setEmail}
                value={email}
                keyboardType="email-address"
                autoCapitalize="none"
                editable={!loading}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                placeholderTextColor="#AAAAAA"
                onChangeText={setPassword}
                value={password}
                secureTextEntry
                editable={!loading}
            />
            <Boton
                text="Iniciar Sesion"
                onPress={Ingresar}
            />
            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                title={alertTitle}
                message={alertMsg}
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                showCancelButton={false}
                showConfirmButton={true}
                confirmText="OK"
                onConfirmPressed={() => setshowAlert(false)}
            >

            </AwesomeAlert>
        </View>
    );
}
export default Login;