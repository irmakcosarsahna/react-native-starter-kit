import React, { memo } from 'react';

import { useSelector } from 'react-redux';
import _ from 'lodash';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { colors } from '../../theme';

const loader = require('@assets/lottie/animation.json')

const RequestComponent = memo(() => {
    // Redux
    const queue = useSelector(({common}) => common.queue);
    // Check show
    const isShow = !_.isEmpty(queue)

    if(!isShow)
        return <></>


    return (
        <View style={styles.container}>
            <LottieView source={loader} autoPlay loop style={styles.gif} speed={2}/>
            <View style={styles.overlay}/>
        </View>
    );
});

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        zIndex: 9999,
        width: '100%',
        height: '100%',
        alignItems:'center',
        justifyContent:'center'
    },
    overlay: {
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.5,
        backgroundColor: colors.default.background.primary,
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
    gif: {
       zIndex:3,
        width:100,
        height:100
    },
});

export {RequestComponent};
