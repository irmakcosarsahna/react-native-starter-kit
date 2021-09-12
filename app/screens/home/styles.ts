import {Dimensions, Platform, StyleSheet} from 'react-native';
import {colors} from '../../theme';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: colors.default.background.primary,
  },
  logoBox: { paddingTop: Platform.select({ ios: 30, android: 0 }) },
  logo: { height: height / 12 },
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  lobbyAvatar: {
    borderRadius: 80,
    aspectRatio: 1,
    borderColor: colors.default.alert.error,
    height: height / 7,
    borderWidth: width / 50,
  },
  authBox: {
    flexDirection: 'row',
    marginHorizontal: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: height / 7,
    maxHeight: height / 7,
    marginBottom: Platform.select({ ios: 0, android: 10 }),
  },
  authInfoBox: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  imageBackground: {
    flex: 1,
    backgroundColor: colors.default.background.primary,
    borderBottomRightRadius: 30,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.31,
    shadowRadius: 20.16,
    shadowColor: colors.default.alert.error,
    borderBottomLeftRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  playButton: {
    alignSelf: 'center',
    paddingBottom: 20,
  },
  lobbyBox: {
    position: 'absolute',
    top: height / 4,
    left: width / 2,
    height: 0,
    width: 0,

    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreLevelBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: -10,
  },
  scoreLevelContainer: {
    borderWidth: 0.5,
    borderColor: colors.default.alert.error,
    borderRadius: 10,
    marginBottom: 40,
  },
  animatedMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 10,
  },
});

export { styles };
