import { TextInput } from "react-native";
import { styles } from "./style";

export default function SearchBar({ value, onChangeText }) {


    return (
        <TextInput
        style={styles.input}
        placeholder="Pesquisar por título..."
        value={value}
        onChangeText={onChangeText}
        />
    );




}
