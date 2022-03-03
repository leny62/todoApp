import {StyleSheet} from 'react-native';
import { appColors } from '../../assets/theme/Colors';

export default StyleSheet.create({
    appWrapper: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: appColors.secondary
    },
    container: {
        backgroundColor: appColors.secondary,
        display: "flex",
        flexDirection: "column",
        height: '100%',
        width: '100%'
    },
    logo: {
        alignSelf: 'center',
        width: 100,
        height: 100,
        borderRadius: 100,
        justifyContent: 'center',
        backgroundColor: appColors.white,
        marginTop: 100
    },
    title: {
        color: appColors.blue,
        textAlign: "center",
        fontSize: 30,
        fontWeight: 'bold',
    },
    welcome: {
        padding: 30,
        paddingTop: 100,
        fontWeight: 'bold',
        fontSize: 15,
        color: appColors.disabled
    },
    getStarted: {
        paddingTop: 100,
        alignSelf: 'center'
    },
    btnWrapper: {
        paddingTop: 30, 
        margin: 20
    }
});