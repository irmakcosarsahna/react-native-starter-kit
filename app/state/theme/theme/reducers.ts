// Types
import { SET } from './types';
// Props
import { themeProps } from './theme.props';

const INIT_STATE: themeProps = {
  type: 'default'
};

const theme = (state = INIT_STATE, {type, payload}) => {
  switch (type) {
    case SET:
      return {
        ...state,
        type: payload
      }
    default:
      return state;
  }
};

export {theme};
