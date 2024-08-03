import { View, Text, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';
import { router } from 'expo-router';
import { RedColor } from '@/constants/Colors';
import { useFontSize } from '@/contexts/FontSizeContext';
import { Colors } from '@/constants/Colors';


export default function ChapterItem({ id, text }: { id: number, text: string }) {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    const { smallFontSize } = useFontSize();
    return (
        <View style={[styles.itemContainer, { borderBottomColor: isDarkMode ? Colors.dark.border : Colors.light.border }]} key={`ChapterItem${id}`}>
            <TouchableOpacity onPress={() => router.navigate({ pathname: '/book', params: { index: id } })} key={`touch${id}`}>
                <Text style={[styles.itemText,
                {
                    fontSize: smallFontSize,
                }]} key={`text${id}`}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        paddingVertical: 5,
        borderBottomWidth: 1,
        // borderBottomColor: '#ddd',
    },
    itemText: {
        fontFamily: 'TriodionUcs',
        color: RedColor,
    },
});