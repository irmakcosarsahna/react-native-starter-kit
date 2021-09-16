/**
 * Ignore some yellowbox warnings. Some of these are for deprecated functions
 * that we haven't gotten around to replacing yet.
 */
import { LogBox } from 'react-native';
import { IGNORE_LOGS } from '@constants';

// prettier-ignore
LogBox.ignoreLogs(IGNORE_LOGS)
