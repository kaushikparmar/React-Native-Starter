import { NativeBaseProvider } from 'native-base';
import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, StatusBar, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Section } from './screens/section/section';
import SplashScreen from 'react-native-splash-screen';
import { forceCheckUpdateNeeded } from './store/ForceUpdate';
import ErrorBoundary from 'react-native-error-boundary';

export const App: React.FC = () => {

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    setTimeout(() => { SplashScreen.hide(); }, 2000)
  }, [])


  useEffect(() => {
    forceCheckUpdateNeeded();
  }, []);

  const ErrorFallbackHandler = ({ error, resetErrorBoundary}: any) => {
    return <View  /> //TODO: Error Fallback screen
  }

  const myErrorHandler = (error: Error, stackTrace: string) => {
    console.log('ErrorHandler', error);
  }

  return (

    <NativeBaseProvider>
      <SafeAreaView >
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ErrorBoundary FallbackComponent={ErrorFallbackHandler} onError={myErrorHandler}>
          <ScrollView >
            <Section title="Hello World"></Section>
          </ScrollView>
        </ErrorBoundary>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

