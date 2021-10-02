import _ from 'lodash';
import { colors } from '../colors';
import { typography } from '../typography';
import { timing } from '../timing';
import { spacing as _spacing } from '../spacing';
import { themeProps } from '../theme.props';

// Get Color
const getColor = ({ root }: { root: string }) => _.get(colors, root) || {};
// Get Spacing
const getSpacing = ({ spacing: s, root }: { root: string; spacing: string }) => _.get(_spacing, s || root) || {};

const getTheme = (veriables: { spacing: string; root: string }): themeProps => {
  // Color
  const color = getColor(veriables);
  // Spacing
  const spacing = getSpacing(veriables);

  // Return
  return {
    color,
    typography,
    spacing,
    timing,
  };
};

export { getColor, getTheme };
