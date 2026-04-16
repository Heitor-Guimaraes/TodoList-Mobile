import React, { useMemo, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from "./src/Styles/global";
import SearchBar from "./src/components/SearchBar";
import TaskCard from "./src/components/TaskCard";
import EditTask from "./src/components/EditTask";
import AddTask from "./src/components/AddTask";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [addVisible, setAddVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const addTask = (newTask) => {
    setTasks((prev) => [...prev, { ...newTask, id: Date.now().toString() }]);
    setAddVisible(false);
  };

  const updateTask = (updatedTask) => {
    if (!updatedTask?.id) return;
    setTasks((prev) => prev.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
    setEditVisible(false);
    setSelectedTask(null);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const filteredTasks = tasks.filter((t) =>
    (t?.title || '').toLowerCase().includes(searchText.toLowerCase()),
  );

  const handleEditOpen = (task) => {
    setSelectedTask(task);
    setEditVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Minhas Tarefas</Text>

      <SearchBar value={searchText} onChangeText={setSearchText} />
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        contentContainerStyle={filteredTasks.length === 0 ? styles.emptyContainer : undefined}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhuma tarefa encontrada.</Text>}
        renderItem={({ item }) => (
          <TaskCard item={item} onEdit={handleEditOpen} onDelete={deleteTask} />
        )}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => setAddVisible(true)}
      >
        <Text style={styles.adicionar}>+</Text>
      </TouchableOpacity>

      <AddTask
        visible={addVisible}
        onSave={addTask}
        onClose={() => setAddVisible(false)}
      />

      <EditTask
        visible={editVisible}
        taskData={selectedTask}
        onSave={updateTask}
        onClose={() => setEditVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 20,
    paddingTop: 60,
  },

  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: theme.colors.textMain,
  },
  button: {
    position: "absolute",
    bottom: 30,
    right: 30,
    backgroundColor: theme.colors.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  adicionar: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 30,
  },
  emptyContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: theme.colors.textSub,
    fontSize: 16,
  },
});