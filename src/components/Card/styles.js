import {StyleSheet} from 'react-native';
import { appColors } from '../../assets/theme/Colors';

export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        height: 100,
        width: '100%',
        padding: 5,
        justifyContent: 'space-between',
        elevation: 20,
        backgroundColor: appColors.tertiary,
        borderColor: appColors.dark,
        borderWidth: 2,
        borderRadius: 5,
        marginTop: 5
    },
    contentWrapper: {
        display: 'flex',
        flexDirection: "column",
        paddingRight: 10
    },
    title: {
        fontWeight: 'bold',
        paddingBottom: 20
    },
    body: {
        fontSize: 15,
        flexWrap: 'wrap',
        width: 200
    },
    btnWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    btn: {
        width: 70
    },
    pr: {
        paddingRight: 5
    }
});
