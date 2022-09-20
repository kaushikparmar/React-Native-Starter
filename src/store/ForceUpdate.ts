import { Alert, BackHandler, Linking } from "react-native";
import VersionCheck from "react-native-version-check";

/***
 * Check app store version for the lastest updates.
 */
export const forceCheckUpdateNeeded = async () => {
    try {
        let updateNeeded = await VersionCheck.needUpdate();

        if (updateNeeded && updateNeeded.isNeeded) {
            Alert.alert(
                'Please Update',
                'You will have to update your app to the latest version to continue using.',
                [
                    {
                        text: 'Update',
                        onPress: () => {
                            BackHandler.exitApp();
                            Linking.openURL('https://apps.apple.com/in/app/dots-home/id1588125402');
                        },
                    },
                ],
                { cancelable: false },
            );
        }
    } catch (error) {
        console.error('Error: ', error);
    }
}
