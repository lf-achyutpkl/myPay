import { StyleSheet, Text, View } from 'react-native';
import Panel from '../../../components/Panel';
import { FunctionComponent, useMemo, useState } from 'react';
import { Route } from '../../../types';
import { roundOff } from '../../../utils/amount';

type RateInfoProps = {
  route: Route;
  amount: number;
};

const RateInfo: FunctionComponent<RateInfoProps> = (props) => {
  const { route, amount } = props;
  const [show, setShow] = useState<boolean>(true);

  const { currencyFrom, currencyTo, rate, fee } = route || {};

  const feeStr = useMemo(() => {
    const { percentage } = fee || {};
    return amount
      ? `${roundOff(amount * (percentage / 100))} ${currencyFrom}`
      : '';
  }, [route, amount]);

  if (!route) {
    return <></>;
  }

  return (
    <Panel>
      <View style={styles.container}>
        <Text>{`1 ${currencyFrom} = ${currencyTo} ${rate}`}</Text>
        {/* <TouchableOpacity onPress={() => setShow(!show)}> */}
        {feeStr && <Text>Fees</Text>}
        {/* </TouchableOpacity> */}
      </View>
      {feeStr && (
        <View style={styles.feeSection}>
          <Text>{feeStr}</Text>
        </View>
      )}
    </Panel>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  feeSection: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 8,
  },
});

export default RateInfo;
