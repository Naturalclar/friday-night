import React from 'react';

import {DetailedTwitt} from './components/Detail';

export const Details = props => {
  return <DetailedTwitt {...props.route.params} />;
};
