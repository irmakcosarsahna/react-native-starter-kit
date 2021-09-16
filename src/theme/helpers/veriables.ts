import _ from 'lodash';
import { colors } from '../colors';
import { typography } from '../typography';
import { timing } from '../timing';
import { spacing } from '../spacing';
import { themeProps } from '../theme.props';

const getColor = (type: string) => _.get(colors, type) || {};
const getSpacing = () => _.get(spacing, 'default') || {};

const getTheme = (type: string = 'default'): themeProps => {
  const color = getColor(type);
  const spacing = getSpacing();
  return {
    color,
    typography,
    spacing,
    timing,
  };
};

export { getColor, getTheme };
