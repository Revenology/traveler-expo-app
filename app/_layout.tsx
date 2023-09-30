import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Keyboard, useColorScheme } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import store from './.appSetup/store';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Provider } from 'react-redux';
import { MapDate, MapDateContext } from './.appSetup/context';
import { AutocompleteDropdownContextProvider } from 'react-native-autocomplete-dropdown';
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'landing/Landing',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const DismissKeyboard = ({ children }: { children: React.ReactNode }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const queryClient = new QueryClient();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const [mapDateContext, setMapDateContext] = useState<MapDate>({});

  return (
    <AutocompleteDropdownContextProvider>
      <MapDateContext.Provider
        value={{ mapDate: mapDateContext, setMapDate: setMapDateContext }}
      >
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider
              value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
            >
              <DismissKeyboard>
                <Stack initialRouteName='landing/Landing'>
                  <Stack.Screen
                    name='landing/Landing'
                    options={{ headerShown: false, title: 'home' }}
                  />
                  <Stack.Screen
                    name='login/Login'
                    options={{ presentation: 'modal', headerShown: false }}
                  />
                  <Stack.Screen
                    name='signup/Signup'
                    options={{ presentation: 'modal', headerShown: false }}
                  />
                  <Stack.Screen
                    name='tripFlow/tripPlan/TripPlan'
                    options={{
                      presentation: 'modal',
                      headerShown: false,
                    }}
                  />
                  <Stack.Screen
                    name='tripFlow/map/Map'
                    options={{
                      headerShown: false,
                    }}
                  />
                  <Stack.Screen
                    name='tripFlow/activities/Activities'
                    options={{
                      headerShown: false,
                    }}
                  />
                  <Stack.Screen
                    name='tripFlow/collaborate/Collaborate'
                    options={{
                      headerShown: false,
                    }}
                  />
                  <Stack.Screen
                    name='(tabs)'
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name='modal'
                    options={{ presentation: 'modal' }}
                  />
                </Stack>
              </DismissKeyboard>
            </ThemeProvider>
          </QueryClientProvider>
        </Provider>
      </MapDateContext.Provider>
    </AutocompleteDropdownContextProvider>
  );
}
