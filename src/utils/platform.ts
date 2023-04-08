import {Platform, PlatformOSType} from 'react-native';

const getPlatform = (): PlatformOSType => Platform.OS;

export const isAndroid = () => getPlatform() === 'android';
