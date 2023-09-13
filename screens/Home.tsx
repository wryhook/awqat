import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts, SourceSans3_900Black_Italic } from '@expo-google-fonts/source-sans-3';

export default function Home() {
  let [fontsLoaded, fontError] = useFonts({
    SourceSans3_900Black_Italic,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: 'white', fontFamily: 'SourceSans3_300Light' }}>Home</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
    backgroundColor: '#0C1214',
    fontFamily: 'SourceSans3_900Black_Italic'
  },
});