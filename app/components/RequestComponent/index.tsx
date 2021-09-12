import React, { memo } from 'react';
// Redux
import { useSelector } from 'react-redux';
import _ from 'lodash';
// Loader
import { RequestLoader } from './loader';

const RequestComponent = memo(() => {
    // Redux
    const queue = useSelector(({ common }) => common.queue);
    // Check show
    const isShow = !_.isEmpty(queue);

    if (!isShow)
        return (
          <></>
        );

    return (
      <RequestLoader />
    );
});

export {RequestComponent};
