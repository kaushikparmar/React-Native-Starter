import React, { type PropsWithChildren } from 'react';
import { Text, useColorScheme, View } from 'react-native';
import { SectionStyle } from './section.style';
import { Button, theme } from 'native-base';
import { SearchStore } from '../../store';
import { observer } from 'mobx-react-lite';

export const Section: React.FC<PropsWithChildren<{title: string;}>> = observer(({ children, title }) => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
      <View style={SectionStyle.sectionContainer}>
        <Text
          style={[
            SectionStyle.sectionTitle,
            {
              color: isDarkMode ? theme.colors.white : theme.colors.black,
            },
          ]}>
          {title} {SearchStore.amount} 
        </Text>
        <Text
          style={[
            SectionStyle.sectionDescription,
            {
              color: isDarkMode ? theme.colors.lightText : theme.colors.darkText,
            },
          ]}>
          {children}
        </Text>
        <Button onPress={() => SearchStore.setAmount(3)}>Amount</Button>
      </View>
    );
  });