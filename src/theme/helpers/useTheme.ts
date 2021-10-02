import { themeProps } from '@theme/theme.props';
import React from 'react';
import { useSelector } from 'react-redux';
import { getTheme } from './veriables';

const useTheme = (fn: any) => {
  // Veriables
  const veriables = useSelector(({ theme }: themeProps) => theme);

  // Get theme
  const theme = getTheme(veriables);

  // Return
  return React.useMemo(() => fn(theme), [fn, theme]);
};

export { useTheme };
