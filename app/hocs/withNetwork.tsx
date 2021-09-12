import React from 'react';
// Components
import { Modal, RequestComponent } from '@components';

const withNetwork = (WrappedComponent) => (props) => (
    <>
        <RequestComponent/>
        <Modal/>
        <WrappedComponent {...props} />
    </>
);

export {withNetwork};
