import React, { useState, useEffect } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import {styles} from "./style";
import { normalizePriority } from "../../Styles/global";

const emptyTask = {
  title: "",
  description: "",
  start: "",
  end: "",
  priority: "Média",
};

const EditTask = ({ visible, onClose, taskData, onSave }) => {
  const [currentTask, setCurrentTask] = useState(emptyTask);

  useEffect(() => {
    setCurrentTask(taskData || emptyTask);
  }, [taskData, visible]);

  const handleUpdate = () => {
    const title = (currentTask?.title || "").trim();

    if (!title) {
      Alert.alert("Campo obrigatório", "Informe um título para a tarefa.");
      return;
    }

    onSave?.({
      ...currentTask,
      title,
      description: (currentTask?.description || "").trim(),
      start: (currentTask?.start || "").trim(),
      end: (currentTask?.end || "").trim(),
      priority: normalizePriority(currentTask?.priority),
    });
    onClose?.();
  };

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.modal}>
        <Text style={styles.titulo}>Editar Tarefa</Text>

        <TextInput
          value={currentTask?.title || ""}
          style={styles.input}
          placeholder="Título"
          onChangeText={(t) => setCurrentTask({ ...currentTask, title: t })}
        />

        <TextInput
          value={currentTask?.description || ""}
          style={styles.input}
          placeholder="Descrição"
          onChangeText={(t) => setCurrentTask({ ...currentTask, description: t })}
        />

        <TextInput
          value={currentTask?.start || ""}
          style={styles.input}
          placeholder="Data de Início: DD/MM"
          onChangeText={(t) => setCurrentTask({ ...currentTask, start: t })}
        />

        <TextInput
          value={currentTask?.end || ""}
          style={styles.input}
          placeholder="Data de Fim: DD/MM"
          onChangeText={(t) => setCurrentTask({ ...currentTask, end: t })}
        />

        <TextInput
          value={currentTask?.priority || "Média"}
          style={styles.input}
          placeholder="Prioridade: Baixa, Média ou Alta"
          autoCapitalize="words"
          onChangeText={(t) => setCurrentTask({ ...currentTask, priority: t })}
        />

        <TouchableOpacity style={styles.button} onPress={handleUpdate}>
          <Text style={styles.buttonText}>Atualizar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
          <Text style={styles.cancelText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default EditTask;
