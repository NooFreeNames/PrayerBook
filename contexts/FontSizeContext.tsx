import { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FontSizeContext = createContext(
    {
        smallFontSize: 25,
        largeFontSize: 35,
        increaseFontSize: () => { },
        decreaseFontSize: () => { }
    }
);

export const loadFontSize = async () => {
    try {
        const smallFontSize = await AsyncStorage.getItem('smallFontSize');
        const largeFontSize = await AsyncStorage.getItem('largeFontSize');
        if (smallFontSize === null || largeFontSize === null) {
            return { smallFontSize: 25, largeFontSize: 35 };
        }
        return {
            smallFontSize: parseFloat(smallFontSize),
            largeFontSize: parseFloat(largeFontSize),
        }
    } catch (e) {
        console.error("Failed to load font sizes from storage", e);
        return { smallFontSize: 25, largeFontSize: 35 };
    }
}


export const FontSizeProvider = ({ initSmallFontSize, initLargeFontSize, children }: { initSmallFontSize: number, initLargeFontSize: number, children: React.ReactNode }) => {
    const [smallFontSize, setSmallFontSize] = useState(initSmallFontSize);
    const [largeFontSize, setLargeFontSize] = useState(initLargeFontSize);


    useEffect(() => {
        const saveFontSizes = async () => {
            try {
                await AsyncStorage.setItem('smallFontSize', smallFontSize.toString());
                await AsyncStorage.setItem('largeFontSize', largeFontSize.toString());
            } catch (e) {
                console.error("Failed to save font sizes to storage", e);
            }
        };

        saveFontSizes();
    }, [smallFontSize, largeFontSize]);

    const maxFontSize = 100;
    const minFontSize = 10;
    const ratio = 1.1;
    const increaseFontSize = () => {
        if (smallFontSize * ratio > maxFontSize) return;
        setSmallFontSize(prev => prev * ratio)
        setLargeFontSize(prev => prev * ratio)
    };
    const decreaseFontSize = () => {
        if (smallFontSize / ratio < minFontSize) return;
        setSmallFontSize(prev => prev / ratio)
        setLargeFontSize(prev => prev / ratio)
    };
    return (
        <FontSizeContext.Provider value={{
            smallFontSize,
            largeFontSize,
            increaseFontSize,
            decreaseFontSize,
        }}>
            {children}
        </FontSizeContext.Provider>
    );
};

export const useFontSize = () => useContext(FontSizeContext);