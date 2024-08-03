import { View, TouchableOpacity, Platform } from 'react-native';
import { useFontSize } from '@/contexts/FontSizeContext';
import { MaterialIcons } from '@expo/vector-icons';
import { useColorScheme, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

export default function HeaderRight() {
    const { increaseFontSize, decreaseFontSize } = useFontSize();
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{  }} onPress={decreaseFontSize}>
                <MaterialIcons name="remove" size={24} color={isDarkMode ? Colors.dark.text : Colors.light.text} style={styles.button} />
            </TouchableOpacity>
            <TouchableOpacity style={{  }} onPress={increaseFontSize}>
                <MaterialIcons name="add" size={24} color={isDarkMode ? Colors.dark.text : Colors.light.text} style={styles.button} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginRight: Platform.OS === "web" ? 0 : -10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        padding: 10
    }
});

