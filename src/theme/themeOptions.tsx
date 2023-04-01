import {createTheme, lightColors} from '@rneui/themed';
import {Platform} from 'react-native';
import {ButtonOptions} from './components/ButtonOptions';
import {InputOptions} from '@theme/components/InputOptions';
import {TextOptions} from '@theme/components/TextOptions';

export const theme = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
      ios: lightColors.platform.ios,
    }),
  },
  components: {
    Button: ButtonOptions,
    Input: InputOptions,
    Text: TextOptions,
  },
});
