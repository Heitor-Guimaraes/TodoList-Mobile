import React, { useState } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "./style";
import { normalizePriority } from "../../Styles/global";

export default function AddTask({ visible, onClose, onSave }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "",
    start: "",
    end: "",
  });

  const handleSave = () => {
    const title = task.title.trim();
    if (!title) {
      Alert.alert("Campo obrigatório", "Informe um título para a tarefa.");
      return;
    }

    onSave({
      ...task,
      title,
      description: task.description.trim(),
      priority: normalizePriority(task.priority),
      start: task.start.trim(),
      end: task.end.trim(),
    });

    setTask({
      title: "",
      description: "",
      priority: "",
      start: "",
      end: "",
    });
    onClose?.();
  };

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.modal}>
        <Text style={styles.titulo}>Nova Tarefa</Text>

        <TextInput
          style={styles.input}
          placeholder="Título"
          value={task.title}
          onChangeText={(t) => setTask({ ...task, title: t })}
          returnKeyType="next"
        />

        <TextInput
          style={styles.input}
          placeholder="Descrição"
          value={task.description}
          onChangeText={(t) => setTask({ ...task, description: t })}
        />

        <TextInput
          style={styles.input}
          placeholder="Data de Início: DD/MM"
          value={task.start}
          onChangeText={(t) => setTask({ ...task, start: t })}
        />

        <TextInput
          style={styles.input}
          placeholder="Data de Fim: DD/MM"
          value={task.end}
          onChangeText={(t) => setTask({ ...task, end: t })}
        />

        <TextInput
          style={styles.input}
          placeholder="Prioridade: Baixa, Média ou Alta"
          value={task.priority}
          onChangeText={(t) => setTask({ ...task, priority: t })}
          autoCapitalize="words"
        />

        <TouchableOpacity style={styles.btnSalvar} onPress={handleSave}>
          <Text style={styles.btnSalvarTexto}>Salvar Tarefa</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onClose}>
          <Text style={styles.txtCancelar}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
