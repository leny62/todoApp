import {StyleSheet} from 'react-native';
import { appColors } from '../../assets/theme/Colors';

export default StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  profile: {
    flexDirection: 'row',
    padding: 10,
    paddingBottom: 10,
  },
  profile_info: {
    paddingLeft: 15,
    justifyContent: 'center',
  },
  linkItems: {
    marginTop: 20,
  },
  logout: {
    borderColor: appColors.tertiary,
    borderTopWidth: 1,
  },
});
