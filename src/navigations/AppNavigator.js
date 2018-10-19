import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import React from "react";

import HomeScreen from "../screens/HomeScreen";
import UserScreen from "../screens/UserScreen";
import StrokeScreen from "../screens/stroke/StrokeScreen";
import SettingScreen from "../screens/user/SettingScreen";
import LogoutScreen from "../screens/user/LogoutScreen";
import HeaderButton from "../components/buttons/HeaderButton";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../utils/colors";

const AuthNavigator = createStackNavigator({
  Signin: {
    getScreen: () => require("../screens/SigninScreen").default
  }
});

// 行程
const StrokeNavigator = createStackNavigator(
  {
    Stroke: {
      getScreen: () => require("../screens/stroke/StrokeScreen").default
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerLeft: (
        <HeaderButton left onPress={() => navigation.goBack(null)}>
          <Ionicons
            name="ios-arrow-round-back-outline"
            size={35}
            color={colors.greyDark}
          />
        </HeaderButton>
      )
    })
  }
)

// 意见反馈
const FeedbackNavigator = createStackNavigator({
  Feedback: {
    getScreen: () => require('../screens/feedback/FeedbackScreen').default
  },
  // Camera: {
  //   getScreen: () => require('../screens/feedback/CameraScreen').default
  // }
}, {
  navigationOptions: ({navigation}) => ({
    headerLeft: <HeaderButton left onPress={() => navigation.goBack(null)}>
          <Ionicons
            name="ios-arrow-round-back-outline"
            size={35}
            color={colors.greyDark}
          />
        </HeaderButton>
  })
})

const UserNavigator = createStackNavigator(
  {
    Feedback: {
      screen: FeedbackNavigator,
      navigationOptions: {
        header: null
      }
    },
    User: {
      getScreen: () => require("../screens/UserScreen").default
    },
    Setting: {
      getScreen: () => require("../screens/user/SettingScreen").default
    },
    Logout: {
      getScreen: () => require("../screens/user/LogoutScreen").default
    },
    Stroke: {
      screen: StrokeNavigator,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'Feedback',
    navigationOptions: ({ navigation }) => ({
      headerLeft: (
        <HeaderButton left onPress={() => navigation.goBack(null)}>
          <Ionicons
            name="ios-arrow-round-back-outline"
            size={35}
            color={colors.greyDark}
          />
        </HeaderButton>
      )
    })
  }
);

const MainNavigator = createStackNavigator({
  Home: {
    getScreen: () => require("../screens/HomeScreen").default
  },
  User: {
    screen: UserNavigator,
    navigationOptions: {
      header: null
    }
  },
});

export default (App = createSwitchNavigator(
  {
    Auth: AuthNavigator,
    Main: MainNavigator
  },
  {
    initialRouteName: "Auth"
  }
));
