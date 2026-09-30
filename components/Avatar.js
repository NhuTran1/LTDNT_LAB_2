import { Image, StyleSheet } from 'react-native';

export default function Avatar({ uri }) {
  return <Image source={{ uri }} style={styles.avatar} />;
}

const styles = StyleSheet.create({
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#FFD700',
    marginBottom: 20,
  },
});