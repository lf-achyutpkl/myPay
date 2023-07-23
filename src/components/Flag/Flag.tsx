import React from 'react';
import * as flags from '../../assets/flags';
import { Currency } from '../../types';

const Flag = (props: { currency: Currency }) => {
  const Icon = flags[`${props.currency}`];

  if (!Icon) {
    return <></>;
  }

  return <Icon width={25} height={25} />;
};

export default Flag;
