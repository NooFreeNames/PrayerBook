import { TouchableOpacity, Text, useColorScheme, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { RedColor } from '@/constants/Colors';
import { useFontSize } from '@/contexts/FontSizeContext';
import { Colors } from '@/constants/Colors';

export default function Footer() {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    const { smallFontSize } = useFontSize();
    return (
        <TouchableOpacity onPress={() => router.navigate('/about')}>
            <Text style={[styles.itemText,
            {
                fontSize: smallFontSize / 1.2,
            }, { color: isDarkMode ? Colors.dark.border : Colors.light.border }]}>{"О приложении >>>"}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        paddingVertical: 5,
        borderBottomWidth: 1,
    },
    itemText: {
        marginTop: 30,
        padding: 20,
        textAlign: 'center',
    },
});