import { useFontSize } from "@/contexts/FontSizeContext";
import { Text, StyleSheet } from "react-native";
import { RedColor } from "@/constants/Colors";

export default function ChapterHeader({ id, text }: { id: number, text: string }) {
    const { largeFontSize } = useFontSize();
    
    return <Text style={[styles.header, { fontSize: largeFontSize }]} key={id}>{text}</Text>;
}

const styles = StyleSheet.create({
    header: {
        textAlign: "center",
        color: RedColor,
        fontFamily: 'TriodionUcs',
    }
})