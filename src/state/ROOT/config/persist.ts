// Configs
import AsyncStorage from '@react-native-async-storage/async-storage';

const root = { key: 'ICSRoot', storage: AsyncStorage, blacklist: ['common', 'modal', 'theme'], timeout: null };

const common = { key: 'ICSsCommon', storage: AsyncStorage, whitelist: ['home'], timeout: null };

export { root, common };
