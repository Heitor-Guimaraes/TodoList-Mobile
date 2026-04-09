import { StyleSheet } from "react-native";

import { theme } from "../../Styles/global";

export const styles = StyleSheet.create({

    modalBody: {
        flex: 1,
        backgroundColor: theme.colors.background,
        padding: 25,
        paddingTop: 50,
    },

    label:{

        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },

    input: {

        backgroundColor: '#ffff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',

    },

    btnText:{
        color: '#fff',
        fontWeight: 'bold',
    },

    btnSave: {

        backgroundColor: theme.colors.primary,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },


    btncancelar: {


        textAlign: 'center',
        marginTop: 20,
        color: '#f00'


    },

    



});