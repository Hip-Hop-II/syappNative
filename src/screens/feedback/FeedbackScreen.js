import React, { PureComponent } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  TextInput,
  Dimensions
} from "react-native";
import { colors } from "../../utils/colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import Button from "../../components/buttons/Button";

const MAX_LENGTH = 200;

const { width: WIDTH } = Dimensions.get("window");

export default class FeedbackScreen extends PureComponent {
  static navigationOptions = {
    headerStyle: {
      borderBottomWidth: 0
    }
  };
  state = {
    message: "",
    hasCameraPermission: null,
    onPictue: false
  };
  onOpenActionSheet = () => {
    let options = ["拍摄", "照片", "取消"];
    let cancelButtonIndex = 2;
    this.props.showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          this.cameraImage();
        } else if (buttonIndex === 1) {
          this.launchImage();
        }
      }
    );
  };
  // 照片
  launchImage = async () => {
    try {
      
    } catch (error) {
      throw error;
    }
  };
  // 拍摄
  cameraImage = async () => {
    try {
      
    } catch (error) {
      throw error;
    }
  };
  uploadOnPress = async () => {
    try {
      
    } catch (error) {}
  };
  get _maxLength() {
    return MAX_LENGTH - this.state.message.length;
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>意见反馈</Text>
          <Text style={styles.description}>请您提出对我们的意见和建议</Text>
        </View>
        <ScrollView>
          <View style={styles.content}>
            <View style={styles.textareaWrapper}>
              <TextInput
                style={styles.textarea}
                placeholder="输入意见反馈"
                multiline
                selectionColor={colors.redLigter}
                maxLength={MAX_LENGTH}
                onChangeText={message => this.setState({ message })}
              />
              <View style={styles.limitWrapper}>
                <Text style={styles.limitText}>还可以输入</Text>
                <Text style={[styles.limitText, { marginHorizontal: 2 }]}>
                  {this._maxLength}
                </Text>
                <Text style={styles.limitText}>字</Text>
              </View>
            </View>
            <View style={styles.uploadImageWrapper}>
              <View style={styles.uploadImageHeader}>
                <Text style={[styles.uploadHeaderText, { marginRight: 6 }]}>
                  上传相关问题的截图或照片
                </Text>
                <Text style={styles.uploadHeaderText}>(</Text>
                <Text style={styles.uploadHeaderText}>1</Text>
                <Text style={styles.uploadHeaderText}>/3)</Text>
              </View>
              <View style={styles.uploadBody}>
                <View style={styles.uploadButtonWrapper}>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={this.onOpenActionSheet}
                    style={styles.uploadButtonWrapper}
                  >
                    <Ionicons
                      name="ios-add-circle-outline"
                      size={50}
                      color={colors.grey4}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <Button
          style={styles.button}
          disabled
          disabledStyle={styles.buttonDisabled}
        >
          <Text style={styles.buttonText}>提交</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  titleWrapper: {
    paddingLeft: 24,
    justifyContent: "center",
    alignContent: "center",
    paddingVertical: 20,
    backgroundColor: colors.WHITE
  },
  title: {
    fontSize: 32,
    fontWeight: "700"
  },
  description: {
    color: colors.grey4,
    marginTop: 10
  },
  content: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20
  },
  textarea: {
    height: "100%",
    backgroundColor: colors.grey5,
    borderRadius: 8,
    paddingTop: 20,
    paddingHorizontal: 15,
    paddingBottom: 20,
    fontSize: 16
  },
  textareaWrapper: {
    position: "relative",
    width: "100%",
    height: 180,
    shadowColor: colors.greenDark,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.1,
    shadowRadius: 3
  },
  limitWrapper: {
    position: "absolute",
    right: 10,
    bottom: 10,
    flexDirection: "row"
  },
  limitText: {
    color: colors.grey4
  },
  uploadImageWrapper: {
    paddingTop: 20
  },
  uploadImageHeader: {
    flexDirection: "row",
    alignItems: "center"
  },
  uploadHeaderText: {
    fontSize: 18,
    color: colors.greyDark
  },
  uploadBody: {
    paddingTop: 20
  },
  uploadButtonWrapper: {
    width: WIDTH / 4,
    height: WIDTH / 4,
    backgroundColor: colors.WHITE,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    position: "absolute",
    bottom: 60,
    backgroundColor: colors.redLight,
    borderWidth: 0
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.WHITE
  },
  buttonDisabled: {
    position: "absolute",
    bottom: 60,
    backgroundColor: colors.redDisabled,
    borderWidth: 0
  }
});
