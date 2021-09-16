// Configs
import AsyncStorage from '@react-native-async-storage/async-storage';

const root = { key: 'ICSRoot', storage: AsyncStorage, blacklist: ['common', 'modal'], timeout: null };

const common = { key: 'ICSCommon', storage: AsyncStorage, whitelist: ['home'], timeout: null };

export { root, common };
