import { Modal, View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { useState, useEffect } from "react";

export default function TaskModal({ visible, onClose, onSave, taskToEdit }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    start: "",
    end: "",
    priority: "",
  });

  useEffect(() => {
    if (taskToEdit) setForm(taskToEdit);
    else
      setForm({
        title: "",
        description: "",
        start: "",
        end: "",
        priority: "Média",
      });
  }, [taskToEdit, visible]);

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalBody}>
        <Text style={styles.label}>
          {taskToEdit ? "Editar Tarefa" : "Nova Tarefa"}
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Título"
          value={form.title}
          onChangeText={(v) => setForm({ ...form, title: v })}
        />

        <TextInput
          style={styles.input}
          placeholder="Descrição"
          value={form.description}
          onChangeText={(v) => setForm({ ...form, description: v })}
        />

        <TextInput
          style={styles.input}
          placeholder="Data de Início: DD/MM"
          value={form.start}
          onChangeText={(v) => setForm({ ...form, start: v })}
        />

        <TextInput
          style={styles.input}
          placeholder="Data de Término: DD/MM"
          value={form.end}
          onChangeText={(v) => setForm({ ...form, end: v })}
        />

        <TextInput
          style={styles.input}
          placeholder="Prioridade (Baixa, Média, Alta)"
          value={form.priority}
          onChangeText={(v) => setForm({ ...form, priority: v })}
        />

        <TouchableOpacity
          style={styles.btnSave}
          onPress={() => {onSave(form); }}>
          <Text style={styles.btnText}>

            Salvar Tarefa

          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onClose}>
          <Text style={styles.btncancelar}>
            Cancelar
            </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
