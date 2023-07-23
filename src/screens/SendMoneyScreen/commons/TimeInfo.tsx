import { StyleSheet, Text, View } from 'react-native';
import { FunctionComponent } from 'react';
import { Route } from '../../../types';

type TimeInfoProps = {
  route: Route;
};

const TimeInfo: FunctionComponent<TimeInfoProps> = (props) => {
  const { route } = props;

  const { processingTime } = route || {};

  if (!route) {
    return <></>;
  }

  return (
    <View style={styles.container}>
      <Text
        style={styles.timeInfo}>{`Processing time - ${processingTime}`}</Text>
      <Text style={styles.conditionInfo}>
        {'*Normal working hours & public holidays apply'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    zIndex: -1,
  },
  timeInfo: {
    fontWeight: '700',
    textAlign: 'center',
  },
  conditionInfo: {
    padding: 5,
    textAlign: 'center',
    fontSize: 10,
    color: '#7f8086',
  },
});

export default TimeInfo;
