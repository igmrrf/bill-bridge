import { useFonts } from "expo-font";
import { Platform, Text } from "react-native";
import Toast from "react-native-toast-message";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import AppNavigation from "./src/route";

interface TextWithDefaultProps extends Text {
    defaultProps?: { allowFontScaling?: boolean };
}

(Text as unknown as TextWithDefaultProps).defaultProps =
    (Text as unknown as TextWithDefaultProps).defaultProps || {};
(Text as unknown as TextWithDefaultProps).defaultProps!.allowFontScaling =
    false;

const App = () => {
    const [loaded] = useFonts({
        Bricolage: require("./src/assets/fonts/SanFransisco.ttf"),
        BricolageLight: require("./src/assets/fonts/SanFransisco.ttf"),
        NumberFont: require("./src/assets/fonts/new/ClashDisplayRegular.otf"),
        SFBold: require("./src/assets/fonts/sfbold.otf"),
        LatoBold: require("./src/assets/fonts/Lato-Bold.ttf"),
        Inter: require("./src/assets/fonts/inter-regular.otf"),
    });

    if (Platform.OS === "android") {
        NavigationBar.setBackgroundColorAsync("#ffffff");
    }

    if (!loaded) {
        return <Text style={{ fontSize: 30 }}>Loading...</Text>;
    }

    return (
        <>
            <GestureHandlerRootView
                style={{
                    flex: 1,
                }}
            >
                <StatusBar style="dark" backgroundColor="#ffffff" />
                <AppNavigation />
                <Toast topOffset={53} />
            </GestureHandlerRootView>
        </>
    );
};

export default App;
