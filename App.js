import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Avatar from './components/Avatar';
import InfoCard from './components/InfoCard';

export default function App() {
  const USER = {
    name: 'Trần Quang Như',
    title: 'React Native Developer',
    avatar: 'https://th.bing.com/th/id/OIP.FKAxkcRCOu6dtlYRQuIeiwHaH6?w=169&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    contacts: [
      { icon: '📞', label: 'phone', value: '0912 345 678' },
      { icon: '✉️', label: 'email', value: 'nhuobt@example.com' },
      { icon: '📍', label: 'address', value: 'Đà Nẵng, Việt Nam' },
    ],
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />

      <View style={styles.container}>
        <Avatar uri={USER.avatar} />

        <Text style={styles.name}>{USER.name}</Text>
        <Text style={styles.title}>{USER.title}</Text>

        <InfoCard items={USER.contacts} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0d1b2a',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  name: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 6,
    textAlign: 'center',
  },
  title: {
    fontSize: 16,
    color: '#FFD700',
    letterSpacing: 2,
    marginBottom: 32,
    textAlign: 'center',
  },
});