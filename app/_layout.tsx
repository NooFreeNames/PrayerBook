import React, { useState } from 'react';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';
import { View } from 'react-native';
import { Stack } from 'expo-router';
import { FontSizeProvider } from '@/contexts/FontSizeContext';
import HeaderRight from '@/components/HeaderRight';
import { Colors } from '@/constants/Colors';
import { Style } from '@/constants/Style';
import { loadFontSize } from '@/contexts/FontSizeContext';


SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const [fontSizes, setFontSizes]: any = useState(null);

  const [loaded, error] = useFonts({
    'TriodionUcs': require('../assets/fonts/triodion_ucs.ttf'),
    'Verdana': require('../assets/fonts/Verdana.ttf'),
    'OfficinaSansBookC': require('../assets/fonts/OfficinaSansBookC.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      if (loaded || error) {
        const loadedfontSizes = await loadFontSize();
        await SplashScreen.hideAsync();
        setFontSizes(loadedfontSizes);
      }
    }
    prepare();
  }, [loaded, error]);

  if (fontSizes === null) {
    return (
      <View style={[Style.container, { backgroundColor: isDarkMode ? Colors.dark.tintBackground : Colors.light.tintBackground }]}></View>
    )
  }

  return (
    <FontSizeProvider initSmallFontSize={fontSizes.smallFontSize} initLargeFontSize={fontSizes.largeFontSize}>
      <View style={[Style.container, { backgroundColor: isDarkMode ? Colors.dark.tintBackground : Colors.light.tintBackground }]}>
        <Stack screenOptions={{
          headerStyle: {
            backgroundColor: isDarkMode ? Colors.dark.tintBackground : Colors.light.tintBackground, // Задайте здесь цвет фона заголовка
          },

          contentStyle: {
            alignItems: 'center',
            backgroundColor: isDarkMode ? Colors.dark.tintBackground : Colors.light.tintBackground, // Задайте здесь цвет фона контента
          },


          headerTintColor: isDarkMode ? Colors.dark.text : Colors.light.text,
          headerRight: () => <HeaderRight />,
          animation: 'slide_from_right'
        }}>
          <Stack.Screen name="index" options={{ title: 'Оглавление' }} />
          <Stack.Screen name="book" options={{ title: 'Молитвослов' }} />
          <Stack.Screen name="about" options={{ title: 'О приложении' }} />
        </Stack>

      </View>
    </FontSizeProvider>
  );
}