import React from 'react';
import { ScrollView, useColorScheme } from 'react-native';
import { BookData } from '@/constants/BookData';
import { Style } from '@/constants/Style';
import { Colors } from '@/constants/Colors';
import ChapterItem from '@/components/ChapterItem';

export default function Index() {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    return (
        <ScrollView key={"ScrollView"} style={[Style.contentContainer, { backgroundColor: isDarkMode ? Colors.dark.background : Colors.light.background }]}>
            {BookData.map((item: any[], index) => <ChapterItem key={index} id={index} text={item[0][2]} />)}
        </ScrollView>
    );
}