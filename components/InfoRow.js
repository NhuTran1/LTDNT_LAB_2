import { View, Text, StyleSheet } from 'react-native';

export default function InfoRow({ icon, text }) {
  return (
    <View style={styles.row}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  icon: {
    fontSize: 22,
    marginRight: 16,
  },
  text: {
    fontSize: 15,
    color: '#e0e0e0',
    flex: 1,
  },
});