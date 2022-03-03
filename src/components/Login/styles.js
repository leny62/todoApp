import {StyleSheet} from 'react-native';
import { appColors } from '../../assets/theme/Colors';

export default StyleSheet.create({
    container: {
        marginTop: 100,
        padding: 20,
        justifyContent: 'center'
    },
    title: {
        textAlign: "center",
        fontWeight: 'bold',
        paddingBottom: 20
    },
    btn: {
        marginTop: 20
    },
    input: {
        paddingLeft: 5,
    },
    res_error: {
        color: appColors.dange
    }
});
