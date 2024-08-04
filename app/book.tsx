import React from 'react';
import { Text, FlatList, useColorScheme, View } from 'react-native';
import { BookData } from '@/constants/BookData';
import { useLocalSearchParams } from 'expo-router';
import Paragraph from '@/components/Paragraph';
import ChapterHeader from '@/components/ChapterHeader';
import SectionHeader from '@/components/SectionHeader';
import { Colors } from '@/constants/Colors';
import { Style } from '@/constants/Style';
import Footer from '@/components/Footer';

function renderItem(item: any[]): JSX.Element {
    const [type, id, content] = item;
    switch (type) {
        case 3:
            return <ChapterHeader id={id} text={content} />;
        case 2:
            return <SectionHeader id={id} text={content} />;
        case 4:
            return <Paragraph id={id} subBlocks={content} />;
        default:
            return <Text key={id}>{content}</Text>;
    }
}

export default function Book() {
    const { index: indexParam } = useLocalSearchParams();
    const index = Array.isArray(indexParam) ? parseInt(indexParam[0], 10) : parseInt(indexParam, 10);

    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';

    if (isNaN(index) || index < 0 || index >= BookData.length) {
        return (
            <View style={[Style.contentContainer, { backgroundColor: isDarkMode ? Colors.dark.background : Colors.light.background, justifyContent: 'center', alignItems: 'center' }]}>
                <Text style={{ color: isDarkMode ? Colors.dark.text : Colors.light.text, fontSize: 24 }}>Not Found</Text>
            </View>
        );
    }

    return (
        <View>
            <FlatList
                style={[Style.contentContainer, { backgroundColor: isDarkMode ? Colors.dark.background : Colors.light.background }]}
                data={BookData[index]}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={(item: any[]) => item[1]}
                ListFooterComponent={<Footer />}
            />
        </View>

    );
}
