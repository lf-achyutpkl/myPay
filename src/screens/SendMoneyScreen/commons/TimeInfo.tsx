import { StyleSheet, Text, View } from 'react-native';
import { FunctionComponent } from 'react';
import { Route } from '../../../types';

import Thunder from '../../../assets/icons/thunder.svg';

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
      <View style={styles.processingTimeContainer}>
        <Thunder width={20} height={20} />
        <Text style={styles.timeInfo}>
          {`Processing time - ${processingTime}`}
        </Text>
      </View>
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
    justifyContent: 'center',
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
  processingTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TimeInfo;
