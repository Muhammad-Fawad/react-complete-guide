import React from 'react';

const withClass = (WrapperComponent, className) => {
    return props => (
        <div className={className}>
        <WrapperComponent {...props}></WrapperComponent>
        </div>
    );
};

export default withClass;