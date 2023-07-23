import { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { shades } from '../../commons/theme';

type PanelProps = {
  children: React.ReactNode;
};

const Panel: FunctionComponent<PanelProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    zIndex: -1,
    padding: 12,
    backgroundColor: shades[50],
    borderRadius: 8,
    width: '100%',
  },
});

export default Panel;
