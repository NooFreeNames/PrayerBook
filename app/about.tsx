import React, { useState } from 'react';
import { View, Text, ScrollView, useColorScheme, StyleSheet } from 'react-native';
import { Style } from '@/constants/Style';
import { Colors, RedColor } from '@/constants/Colors';
import { useFontSize } from '@/contexts/FontSizeContext';
export default function About() {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    const { smallFontSize } = useFontSize();

    return (
        <ScrollView style={[Style.contentContainer, { backgroundColor: isDarkMode ? Colors.dark.background : Colors.light.background }]}>
            <View>
                <Text style={[styles.header, { fontSize: smallFontSize * 1.3 }]}>
                    По благословению
                    Митрополита
                    Казанского и Татарстанского
                    Кирилла</Text>
                <Text style={[styles.text, { fontSize: smallFontSize / 1.2, color: isDarkMode ? Colors.dark.text : Colors.light.text }]}>
                    {`Составители:\nиерей Виктор Бельских\nиерей Вадим Смоляков\n\nРедактор: Ярослав Суетнов\n\nДизайн: Татьяна Попова\n\nРазработчик: Максим Царёв`}
                </Text>
                <Text style={[styles.footer, { fontSize: smallFontSize * 1.1, color: isDarkMode ? Colors.dark.text : Colors.light.text }]}>
                    Благовещенский Собор
                    Казанского Кремлz <Text style={[styles.year, { fontSize: smallFontSize / 1.3 }]}>2024</Text> год
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 30,
        textAlign: 'center',
        color: RedColor,
        fontFamily: 'TriodionUcs',
        fontSize: 14,
    },
    text: {
        paddingVertical: 50,
        marginLeft: "45%",
        fontFamily: 'OfficinaSansBookC',
        fontSize: 10,
    },
    year: {
        color: RedColor,
        fontFamily: 'Verdana',
        fontSize: 9,
    },
    footer: {
        textAlign: "center",
        fontFamily: 'TriodionUcs',
        fontSize: 12,
    },
});
