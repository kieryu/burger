import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import MainNavigation from './components/MainNavigation'
import MainLayout from './components/MainLayout'

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.sectionTitle}>YUMMY BURGER</Text>

      <ScrollView style={styles.scrollView}>
        <MainLayout />
      </ScrollView>

      <MainNavigation />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
    paddingVertical: 30,
  },
  scrollView: {
    paddingHorizontal: 20,
    marginBottom: 22,
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#EE841C',
    marginVertical: 10,
  }
});
