// Components
import { Modal, RequestComponent } from '@components';
import React from 'react';

const withNetwork = (WrappedComponent) => (props) =>
  (
    <>
      <RequestComponent />
      <Modal />
      <WrappedComponent {...props} />
    </>
  );

export { withNetwork };
