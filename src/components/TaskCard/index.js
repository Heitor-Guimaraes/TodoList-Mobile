import { View, Text, TouchableOpacity } from 'react-native';

import { theme, normalizePriority } from '../../Styles/global';
import { styles } from './style';

export default function TaskCard({ item, onDelete, onEdit }) {
    const priority = normalizePriority(item?.priority);
    const priorityColor = theme.colors.priority[priority] || theme.colors.textSub;

    return (
        <View style={[styles.card, { borderLeftColor: priorityColor }]}>
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>
                    {item?.title || "Sem título"}
                </Text>
                <Text style={styles.desc}>
                    {item?.description || "Sem descrição"}
                </Text>
                <Text style={[styles.badge, { color: priorityColor }]}>● {priority}</Text>
                <Text style={styles.date}>
                    {item?.start || "--/--"} - {item?.end || "--/--"}
                </Text>
            </View>

            <View style={styles.actions}>
                <TouchableOpacity onPress={() => onEdit?.(item)}>
                    <Text style={styles.icon}>✏️</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onDelete?.(item?.id)}>
                    <Text style={styles.icon}>🗑️</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}