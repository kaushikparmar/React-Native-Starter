import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { ErrorFallbackWidgetStyle } from './ErrorFallbackWidgetStyle';

export const ErrorFallbackWidget:React.FC = ({ error, resetErrorBoundary }: any) => {
  return (
    <SafeAreaView style={ErrorFallbackWidgetStyle.container}>
      <View style={ErrorFallbackWidgetStyle.content}>
        <Text style={ErrorFallbackWidgetStyle.title}>Oops!</Text>
        <Text style={ErrorFallbackWidgetStyle.subtitle}>{'There\'s an error'}</Text>
        <Text style={ErrorFallbackWidgetStyle.error}>{error.toString()}</Text>
        <TouchableOpacity style={ErrorFallbackWidgetStyle.button} onPress={resetErrorBoundary}>
          <Text style={ErrorFallbackWidgetStyle.buttonText}>Try again</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};