// Types
import { SET } from './types';

const actionSetThemeType = (payload: string = 'default') => ({
    type: SET,
    payload
});

// Export
export {
    actionSetThemeType
};
