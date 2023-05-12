import React, { useState } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from "react-redux";

import {
    FormInput,
    IconButton,
    IconLabelButton,
    TextButton,
} from "../../components";
import { COLORS, FONTS, SIZES, images, icons } from "../../constants";

const Login = ({ navigation, appTheme }) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showPass, setShowPass] = useState(false)

    function renderForm() {
        return (
            <View>
                {/* Username */}
                <FormInput
                    label="Nome ou Email"
                    keyboardType="email-address"
                    autoCompleteType="email"
                    value={username}
                    onChange={(value) => {
                        setUsername(value)
                    }}
                    inputStyle={{
                        color: appTheme.textColor
                    }}
                />

                {/* Password */}
                <FormInput
                    label="Senha"
                    secureTextEntry={!showPass}
                    autoCompleteType="password"
                    containerStyle={{
                        marginTop: SIZES.padding
                    }}
                    value={password}
                    onChange={(value) => setPassword(value)}
                    appendComponent={
                        <IconButton
                            icon={showPass ? icons.eye_close : icons.eye}
                            iconStyle={{
                                height: 20,
                                width: 20,
                                tintColor: COLORS.gray30
                            }}
                            onPress={() => setShowPass(!showPass)}
                        />
                    }
                    inputStyle={{
                        color: appTheme.textColor
                    }}
                />
            </View>
        )
    }

    function renderButtons() {
        return (
            <View>
                {/* Login */}
                <TextButton
                    contentContainerStyle={{
                        height: 60,
                        marginTop: 30,
                        borderRadius: 30,
                        backgroundColor: COLORS.primary
                    }}
                    label="ENTRAR"
                    onPress={() => navigation.navigate("ChooseCategory")}
                />

                {/* Divider */}
                <Text
                    style={{
                        textAlign: 'center',
                        marginTop: SIZES.radius,
                        color: appTheme.textColor3,
                        ...FONTS.body3
                    }}
                >
                    ou faça login com
                </Text>

                {/* Social Logins */}
                <View
                    style={{
                        flexDirection: 'row',
                        height: 60,
                        marginTop: SIZES.radius
                    }}
                >
                    <IconLabelButton
                        icon={icons.google}
                        label="Google"
                        containerStyle={{
                            flex: 1,
                            borderRadius: 30,
                            backgroundColor: COLORS.additionalColor9
                        }}
                        iconStyle={{
                            width: 30,
                            height: 30,
                        }}
                    />

                    <IconLabelButton
                        icon={icons.facebook}
                        label="Facebook"
                        containerStyle={{
                            flex: 1,
                            marginLeft: SIZES.padding,
                            borderRadius: 30,
                            backgroundColor: COLORS.additionalColor9
                        }}
                        iconStyle={{
                            width: 30,
                            height: 30,
                        }}
                    />
                </View>

                {/* Sign Up */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: SIZES.padding
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.gray40,
                            ...FONTS.body3
                        }}
                    >
                        Novo usuário?
                    </Text>
                    <TextButton
                        label="Inscreva-se agora"
                        labelStyle={{
                            color: COLORS.primary
                        }}
                        contentContainerStyle={{
                            marginLeft: SIZES.radius,
                            backgroundColor: null
                        }}
                        onPress={() => navigation.navigate("Register")}
                    />
                </View>
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: appTheme.backgroundColor1
            }}
        >
            {/* Background */}
            <Image
                source={appTheme.name == "dark" ? images.bg_dark : images.bg}
                resizeMode="cover"
                style={{
                    position: 'absolute',
                    top: 0,
                    width: SIZES.width,
                    height: 300
                }}
            />

            {/* Title */}
            <Text
                style={{
                    marginTop: 60,
                    textAlign: 'center',
                    color: appTheme.textColor,
                    ...FONTS.h1
                }}
            >
                Login
            </Text>

            <KeyboardAwareScrollView
                enableOnAndroid={true}
                keyboardDismissMode="on-drag"
                keyboardShouldPersistTaps={"handled"}
                enableResetScrollToCoords={false}
                contentContainerStyle={{
                    flex: 1,
                    justifyContent: 'center',
                    paddingHorizontal: 30
                }}
            >
                {/* Form */}
                {renderForm()}

                {/* Buttons */}
                {renderButtons()}
            </KeyboardAwareScrollView>
        </View>
    )
}

function mapStateToProps(state) {
    return {
        appTheme: state.appTheme,
        error: state.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);