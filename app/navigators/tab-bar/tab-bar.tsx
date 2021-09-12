import * as React from 'react';
import { Platform } from 'react-native';
import Svg, { Defs, G, Path } from 'react-native-svg';

function SvgTabbar(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={2717.396}
      height={106}
      viewBox="5 5 2717.396 111"
      className=""
      stroke={Platform.OS == 'android' && 'red'}
      strokeWidth="1"
      {...props}
    >
      <Defs />
      <G filter="url(#Tabbar_svg__a)">
        <Path
          data-name="Path 38603"
          d="M1171.194 12.003h140s-1.179 29.528 27.1 43.311a47.544 47.544 0 0020.4 4.668 38.665 38.665 0 0013.681-2.123 46.614 46.614 0 0022.77-15.042 40.95 40.95 0 006.726-10.588s3.872-7.064 4.323-20.227h1296.2v81H14.994v-81z"
          fill="#fff"
        />
      </G>
    </Svg>
  );
}

export default SvgTabbar;
