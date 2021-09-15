import React, { useEffect, useState } from 'react';
import { Keyboard, Pressable, StyleSheet, View } from 'react-native';
import { Text } from '@components';
import { color } from '@theme';
import { Icon } from '@icons';
import LinearGradient from 'react-native-linear-gradient';
import Tabbar from './tab-bar';
import { colors } from '../../theme';

export default function TabBar({ state, descriptors, navigation }) {
  const [showTab, setShowTab] = useState(true);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    const hideSubscription = Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const _keyboardDidShow = () => {
    setShowTab(false);
  };

  const _keyboardDidHide = () => {
    setShowTab(true);
  };

  return (
    <>
      {showTab && (
        <View style={style.tabbar}>
          <View style={style.tabBarImageBase}>
            <Tabbar color="#fff" />
          </View>

          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];

            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            return (
              <Pressable key={label} style={style.item} onPress={onPress}>
                {label === 'anasayfa' && (
                  <View style={style.inner}>
                    <Icon
                      name="Home"
                      width={25}
                      height={25}
                      fill={isFocused ? colors.default.alert.error : colors.default.alert.error}
                    />
                    <Text
                      style={{
                        ...style.text,
                        ...{ color: isFocused ? colors.default.alert.error : colors.default.alert.error },
                      }}
                    >
                      Ana Sayfa
                    </Text>
                  </View>
                )}
                {label === 'yapkazan' && (
                  <View style={style.inner}>
                    <Icon
                      name="Game"
                      width={25}
                      height={25}
                      fill={isFocused ? colors.default.alert.error : colors.default.alert.error}
                    />
                    <Text
                      style={{
                        ...style.text,
                        ...{ color: isFocused ? colors.default.alert.error : colors.default.alert.error },
                      }}
                    >
                      Yapkazan
                    </Text>
                  </View>
                )}
                {label === 'sepet' && (
                  <LinearGradient
                    colors={[colors.default.alert.error, colors.default.alert.error]}
                    style={style.middleMenu}
                  >
                    <Icon name="ShoppingCart" width={40} height={40} fill={colors.default.alert.error} />
                  </LinearGradient>
                )}
                {label === 'kategori' && (
                  <View style={style.inner}>
                    <Icon
                      name="Search"
                      width={25}
                      height={25}
                      fill={isFocused ? colors.default.alert.error : colors.default.alert.error}
                    />
                    <Text
                      style={{
                        ...style.text,
                        ...{ color: isFocused ? colors.default.alert.error : colors.default.alert.error },
                      }}
                    >
                      Arama
                    </Text>
                  </View>
                )}
                {label === 'profil' && (
                  <View style={style.inner}>
                    <Icon
                      name="Profile"
                      width={25}
                      height={25}
                      fill={isFocused ? colors.default.alert.error : colors.default.alert.error}
                    />
                    <Text
                      style={{
                        ...style.text,
                        ...{ color: isFocused ? colors.default.alert.error : colors.default.alert.error },
                      }}
                    >
                      Profil
                    </Text>
                  </View>
                )}
              </Pressable>
            );
          })}
        </View>
      )}
    </>
  );
}

const style = StyleSheet.create({
  tabbar: {
    height: 83,
    width: '100%',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.13,
    shadowRadius: 5,

    elevation: 1,
  },
  tabBarImageBase: {
    position: 'absolute',
    width: '100%',
    paddingLeft: 22,
    alignItems: 'center',
  },
  colorPrimary: {
    color: colors.default.alert.error,
  },
  item: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleMenu: {
    width: 72,
    height: 72,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    top: '-44%',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.13,
    shadowRadius: 5,
    elevation: 1,
  },
  text: {
    fontSize: 9,
    marginTop: 5,
    color: color.grey,
  },
  inner: {
    alignItems: 'center',
  },
});
