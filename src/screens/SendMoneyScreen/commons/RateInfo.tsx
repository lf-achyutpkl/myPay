import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Panel from '../../../components/Panel';
import { FunctionComponent, useCallback, useMemo, useState } from 'react';
import { Route } from '../../../types';
import { roundOff } from '../../../utils/amount';
import DownArrow from '../../../assets/icons/downArrow.svg';
import UpArrow from '../../../assets/icons/upArrow.svg';
import { colors } from '../../../commons/theme';

type RateInfoProps = {
  route: Route;
  amount: number;
};

const RateInfo: FunctionComponent<RateInfoProps> = (props) => {
  const { route, amount } = props;
  const [show, setShow] = useState<boolean>(false);

  const { currencyFrom, currencyTo, rate, fee } = route || {};

  const feeStr = useMemo(() => {
    const { percentage } = fee || {};
    return amount
      ? `${roundOff(amount * (percentage / 100))} ${currencyFrom}`
      : '';
  }, [route, amount]);

  const renderFeeSection = useCallback(
    () =>
      show && (
        <View style={styles.feeSection}>
          <Text style={styles.feeInfoLabel}>{feeStr || 'N/A'}</Text>
        </View>
      ),
    [feeStr, show],
  );

  if (!route) {
    return <></>;
  }

  return (
    <Panel>
      <View style={styles.container}>
        <Text style={styles.rateInfo}>
          <Text style={styles.bold}>1 </Text>
          <Text style={styles.senderCurrencyLabel}>{currencyFrom} = </Text>
          <Text>{currencyTo} </Text>
          <Text style={styles.bold}>{rate}</Text>
        </Text>

        <TouchableOpacity
          onPress={() => setShow(!show)}
          style={styles.feeButtonContainer}>
          <Text style={styles.feeLabel}>Fees</Text>
          {show ? (
            <UpArrow
              width={10}
              height={10}
              fill={colors.primary}
              style={styles.arrowIcon}
            />
          ) : (
            <DownArrow
              width={10}
              height={10}
              fill={colors.primary}
              style={styles.arrowIcon}
            />
          )}
        </TouchableOpacity>
      </View>
      {renderFeeSection()}
    </Panel>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  feeSection: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 8,
  },
  feeButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  feeLabel: {
    fontWeight: 'bold',
    color: colors.primary,
  },
  arrowIcon: {
    marginLeft: 8,
  },
  feeInfoLabel: {
    color: colors.secondaryText,
    fontWeight: '500',
  },
  rateInfo: {
    color: colors.secondaryText,
    fontSize: 16,
  },
  bold: {
    fontWeight: 'bold',
  },
  senderCurrencyLabel: {
    fontSize: 12,
  },
});

export default RateInfo;
