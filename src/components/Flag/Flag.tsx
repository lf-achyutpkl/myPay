import React, { FunctionComponent } from 'react';
import * as flags from '../../assets/flags';
import { Currency } from '../../types';

type FlagProps = {
  currency: Currency;
};

const Flag: FunctionComponent<FlagProps> = (props: { currency: Currency }) => {  
  const Icon = flags[`${props.currency}`];

  if (!Icon) {
    return <></>;
  }

  return <Icon width={25} height={25} />;
};

export default Flag;
