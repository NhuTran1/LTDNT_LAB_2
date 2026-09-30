import { View, StyleSheet } from 'react-native';
import InfoRow from './InfoRow';

export default function InfoCard({ items }) {
  return (
    <View style={styles.card}>
      {items.map((item, index) => (
        <View key={item.label}>
          <InfoRow icon={item.icon} text={item.value} />
          {index < items.length - 1 && <View style={styles.divider} />}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#1b263b',
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  divider: {
    height: 1,
    backgroundColor: '#2d3a52',
    marginLeft: 38,
  },
});