import React, { useState } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles.js";

export default function addTask({ visible, onClose, onSave }) {
  const [task, settask] = useState({
    title: "",
    description: "",
    prority: "",
    start: "",
    end: "",
  });

  const handleSave = () => {
    onSave(task);
    settask({
      title: "",
      description: "",
      prority: "",
      start: "",
      end: "",
    });
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modal}>
        <Text style={styles.titulo}>Nova Tarefa</Text>

        <TextInput
          style={styles.input}
          placeholder="Título"
          value={task.title}
          onChangeText={(t) => settask({ ...task, title: t })}
        />

        <TextInput
          style={styles.input}
          placeholder="Descrição"
          value={task.description}
          onChangeText={(t) => settask({ ...task, description: t })}
        />

        <TextInput
          style={styles.input}
          placeholder="Data de Início: DD/MM"
          value={task.start}
          onChangeText={(t) => settask({ ...task, start: t })}
        />

        <TextInput
          style={styles.input}
          placeholder="Data de Fim: DD/MM"
          value={task.end}
          onChangeText={(t) => settask({ ...task, end: t })}
        />

        <TextInput
          style={styles.input}
          placeholder="Prioridade: Baixa, Média ou Alta"
          value={task.prority}
          onChangeText={(t) => settask({ ...task, prority: t })}
        />

        <TouchableOpacity style={styles.btnSalvar} onPress={handleSave}>
          <Text>Salvar Tarefa</Text>
        </TouchableOpacity>

        <TouchableOpacity  onPress={onClose}>
          <Text style={styles.txtCancelar}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
