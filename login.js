import React from "react";
import { View, Text, Button, StyleSheet, Image, TextInput } from "react-native";

const Login = ({ navigation }) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-start", backgroundColor: "#FEBBCC" , paddingLeft: 40  }}>
        <Image source={require("./assets/icon2.png")} style={styles.img} />
        <Text style={styles.logtxt}>Login</Text>
        <Text style={styles.email}>Email/Username</Text>
        <View style={styles.placelist}>
            <TextInput placeholder="Email/Username" style={styles.holderemail} />
        </View>
        <Text style={styles.email}>Password</Text>
        <View style={styles.placelist}>
            <TextInput placeholder="Password" style={styles.holderemail} />
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </View>
        <Button onPress={() => navigation.navigate("Home")} title="Login" color="black" style={styles.btn} />
        <Text style={styles.signupText}>
            Don't have an account?{" "}
            <Text style={styles.signupLink} onPress={() => navigation.navigate("Signup")}>
                Click here
            </Text>
        </Text>
    </View>
);

const styles = StyleSheet.create({
    logtxt: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "left",
        paddingBottom: 100,
        paddingTop: 50,
    },
    email: {
        fontSize: 20,
        textAlign: "auto",
        fontWeight: "bold",
    },
    img: {
        width: 130,
        height: 150,
    },
    holderemail: {
        height: 40,
        width: 300,
        margin: 5,
        fontSize: 18,
        textAlign: "left",
        borderRadius: 10,
        padding: 10,
        backgroundColor: "#F3FDE8",
    },
    placelist: {
        marginBottom: 20,
    },
    forgotPassword: {
        fontSize: 14,
        textAlign: "right",
        color: "red",
        marginTop: 5,
    },
    signupText: {
        marginTop: 10,
        fontSize: 14,
    },
    signupLink: {
        fontWeight: "bold",
        color: "blue",
    },
    btn: {
        marginTop: 20
    },
});

export default Login;
