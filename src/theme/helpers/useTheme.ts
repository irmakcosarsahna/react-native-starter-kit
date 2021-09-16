import React from 'react';
import { useSelector } from 'react-redux';
import { getTheme } from './veriables';
import { themeProps } from '../../state/theme/theme/theme.props';

const useTheme = (fn: any): any => {
  const { type = 'default' } = useSelector(({ theme }): themeProps => theme);

  const theme = getTheme(type);

  return React.useMemo(() => fn(theme), [fn, theme]);
};

export { useTheme };
