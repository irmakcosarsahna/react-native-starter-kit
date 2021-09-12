import React from 'react';
import { useSelector } from 'react-redux';
import { getTheme } from './veriables';

const useTheme = (fn: any) => {
    const {type = 'default'} = useSelector(({theme}: { type: string }) => ({theme}));

    const theme = getTheme(type)

    return React.useMemo(
        () => fn(theme),
        [fn, theme]
    );
};

export {useTheme};
