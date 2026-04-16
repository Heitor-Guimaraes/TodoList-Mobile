import { StyleSheet } from "react-native";
import { theme } from "../../Styles/global";


export const styles = StyleSheet.create({
    modal: {
        flex: 1,
        padding: 30,
        backgroundColor: theme.colors.background,
},
    titulo: {

        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        color: theme.colors.textMain,
    },

    input: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 8,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: theme.colors.border,
    },

    button: {
        backgroundColor: theme.colors.primary,
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        borderColor: '#ddd',
        marginTop: 8,
    },

    buttonText: {
        color: '#fff',
        fontWeight: '700',
    },

    cancelButton: {
        backgroundColor: '#e5e7eb',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },

    cancelText: {
        color: theme.colors.textMain,
        fontWeight: '700',
    }
});