import * as React from 'react';
import { TextProps } from '../text.props';
import { Text } from '../index';
import { colors } from '../../../theme';

const ErrorText = (props: TextProps) => {
    const {text, error, style} = props;
    return (
        !!error && (
            <Text
                {...props}
                color={colors.default.alert.error}
                style={{
                    fontSize: 10,
                    ...style,
                }}
                text={text}
            />
    )
  );
}

export {ErrorText}
