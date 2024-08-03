import { useFontSize } from "@/contexts/FontSizeContext";
import { Text, StyleSheet } from "react-native";
import { RedColor } from "@/constants/Colors";

export default function SectionHeader({ id, text }: { id: number, text: string }) {
    const { smallFontSize } = useFontSize();
    return <Text style={[styles.header, { fontSize: smallFontSize }]} key={id}>{text}</Text>;
}

const styles = StyleSheet.create({
    header: {
        textAlign: "center",
        paddingTop: 15,
        color: RedColor,
        fontFamily: 'TriodionUcs',
    }
})