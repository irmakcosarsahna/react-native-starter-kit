import _ from 'lodash';
import { colors } from '../colors';
import { typography } from '../typography';
import { timing } from '../timing';
import { spacing } from '../spacing';

const getColor = (type: string) => _.get(colors, type) || {};

const getTheme = (type: string = 'default') => {
    const color = getColor(type)
    return {
        color,
        typography,
        spacing,
        timing,
    }
};

export {
    getColor,
    getTheme
}
