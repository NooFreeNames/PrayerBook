import { StyleSheet, Platform } from 'react-native';

export const Style = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    contentContainer: {
        paddingHorizontal: 10,
        paddingLeft: Platform.OS === "android" ? 15 : 10,
        // width: Platform.OS === 'web' ? 700 : "auto",
        width: "100%",
    },
});