import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from "react-redux";
import {
    FormInput,
    IconButton,
    IconLabelButton,
    TextButton,
} from "../../components";
import { COLORS, FONTS, SIZES, constants, icons } from "../../constants";

const Option = ({ containerStyle, label, isSelected, onPress, appTheme }) => {
    return (
        <TouchableOpacity
            style={{
                flex: 1,
                paddingVertical: SIZES.base,
                paddingHorizontal: SIZES.radius,
                borderRadius: SIZES.radius,
                backgroundColor: isSelected ? appTheme.backgroundColor6 : appTheme.backgroundColor5,
                borderColor: appTheme.borderColor1,
                borderWidth: isSelected ? 0 : 1,
                ...containerStyle
            }}
            onPress={onPress}
        >
            {/* Checked */}
            <View
                style={{
                    alignItems: 'flex-end'
                }}
            >
                <View
                    style={{
                        width: 40,
                        height: 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 20,
                        borderWidth: 1,
                        borderColor: appTheme.borderColor2,
                        backgroundColor: isSelected ? COLORS.white : null
                    }}
                >
                    {isSelected &&
                        <Image
                            source={icons.checked}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20
                            }}
                        />
                    }
                </View>
            </View>

            {/* Label */}
            <View
                style={{
                    marginVertical: SIZES.height > 800 ? SIZES.base : 0,
                }}
            >
                <Text
                    style={{
                        color: isSelected ? appTheme.textColor4 : appTheme.textColor,
                        ...FONTS.body3
                    }}
                >
                    eu sou um
                </Text>
                <Text
                    style={{
                        color: isSelected ? appTheme.textColor4 : appTheme.textColor,
                        ...FONTS.h2
                    }}
                >
                    {label}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const Register = ({ navigation, appTheme }) => {

    const [selectedOption, setSelectOption] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPass, setShowPass] = useState(false)

    function renderOptions() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: SIZES.height > 800 ? SIZES.padding : SIZES.radius
                }}
            >
                {constants.register_options.map((item, index) => {
                    return (
                        <Option
                            key={`Options-${index}`}
                            label={item.label}
                            isSelected={item.id == selectedOption}
                            containerStyle={{
                                marginLeft: index != 0 ? SIZES.radius : 0
                            }}
                            onPress={() => setSelectOption(item.id)}
                            appTheme={appTheme}
                        />
                    )
                })}
            </View>
        )
    }

    function renderForm() {
        return (
            <View
                style={{
                    marginTop: SIZES.height > 800 ? SIZES.padding : SIZES.radius
                }}
            >
                {/* Username */}
                <FormInput
                    label="Nome"
                    value={username}
                    onChange={(value) => {
                        setUsername(value)
                    }}
                    inputStyle={{
                        color: appTheme.textColor
                    }}
                />

                {/* Email */}
                <FormInput
                    label="Email"
                    keyboardType="email-address"
                    autoCompleteType="email"
                    value={email}
                    containerStyle={{
                        marginTop: SIZES.height > 800 ? SIZES.padding : SIZES.radius
                    }}
                    onChange={(value) => {
                        setEmail(value)
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
                        marginTop: SIZES.height > 800 ? SIZES.padding : SIZES.radius
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
            <View
                style={{
                    flex: 1,
                }}
            >
                {/* Login */}
                <TextButton
                    contentContainerStyle={{
                        height: SIZES.height > 800 ? 60 : 50,
                        marginTop: SIZES.height > 800 ? 30 : 20,
                        borderRadius: 30,
                        backgroundColor: COLORS.primary
                    }}
                    label="CRIAR CONTA"
                //onPress={onPress}
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
                    ou inscreva-se com
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
                        marginTop: SIZES.height > 800 ? SIZES.padding : SIZES.radius
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.gray40,
                            ...FONTS.body3
                        }}
                    >
                        Já é um usuário?
                    </Text>
                    <TextButton
                        label="Login"
                        labelStyle={{
                            color: COLORS.primary
                        }}
                        contentContainerStyle={{
                            marginLeft: SIZES.radius,
                            backgroundColor: null
                        }}
                        onPress={() => navigation.navigate("Login")}
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
            {/* Title */}
            <Text
                style={{
                    marginTop: SIZES.height > 800 ? 60 : 30,
                    textAlign: 'center',
                    color: appTheme.textColor,
                    ...FONTS.h1,
                }}
            >
                Inscrição
            </Text>

            {/* Form */}
            <KeyboardAwareScrollView
                enableOnAndroid={true}
                keyboardDismissMode="on-drag"
                keyboardShouldPersistTaps={"handled"}
                enableResetScrollToCoords={false}
                contentContainerStyle={{
                    flex: 1,
                    paddingHorizontal: 30,
                }}
            >
                {renderOptions()}
                {renderForm()}
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);