import {createTheme, lightColors} from '@rneui/themed';
import {Platform} from 'react-native';
import {ButtonOptions} from './components/ButtonOptions';

export const theme = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
      ios: lightColors.platform.ios,
    }),
  },
  components: {
    Button: ButtonOptions,
  },
});
