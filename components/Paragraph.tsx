import { Text, StyleSheet, Platform, useColorScheme } from "react-native";
import { Colors, RedColor } from "@/constants/Colors";
import { useFontSize } from "@/contexts/FontSizeContext";

export default function Paragraph({ id, subBlocks }: { id: number, subBlocks: any[] }): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    const { smallFontSize } = useFontSize();

    const renderSubBlock = (subBlock: any[]) => {
        const [type, id, content] = subBlock;
        const text_style = type === 1 ? style.redtext : { color: isDarkMode ? Colors.dark.text : Colors.light.text };
        return <Text key={id} style={text_style}>{content}</Text>;
    }

    return (
        <Text style={[style.paragraph, { fontSize: smallFontSize }]} key={id}>
            {subBlocks && subBlocks.map((subBlock: any[]) => renderSubBlock(subBlock))}
        </Text>
    )
}


const style = StyleSheet.create({
    text: {
    },
    redtext: {
        color: RedColor,
    },
    paragraph: {
        textAlign: Platform.OS === "android" ? "auto" : "justify",
        fontFamily: 'TriodionUcs',
    }
});

