import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import Animated, {
    interpolate,
    useAnimatedStyle,
    withDelay,
    withTiming
} from 'react-native-reanimated';
import { connect } from "react-redux";

import {
    TextButton,
    LineDivider,
    TwoPointSlider
} from "../components";
import { COLORS, FONTS, SIZES, icons, constants } from "../constants";

const ClassTypeOption = ({ containerStyle, classType, isSelected, onPress, appTheme }) => {
    return (
        <TouchableOpacity
            style={{
                flex: 1,
                height: 100,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: SIZES.radius,
                borderRadius: SIZES.radius,
                borderColor: isSelected ? COLORS.primary3 : COLORS.gray50,
                borderWidth: appTheme?.name == "dark" ? 1 : 0,
                backgroundColor: appTheme?.name == "light" ? (isSelected ? COLORS.primary3 : COLORS.additionalColor9) : (isSelected ? COLORS.primary3 : null),
                ...containerStyle
            }}
            onPress={onPress}
        >
            <Image
                source={classType.icon}
                resizeMode="contain"
                style={{
                    width: 40,
                    height: 40,
                    tintColor: isSelected ? COLORS.white : (appTheme?.name == "light" ? COLORS.gray80 : COLORS.gray50)
                }}
            />

            <Text
                style={{
                    marginTop: SIZES.base,
                    color: isSelected ? COLORS.white : (appTheme?.name == "light" ? COLORS.gray80 : COLORS.gray50),
                    ...FONTS.h3
                }}
            >
                {classType.label}
            </Text>
        </TouchableOpacity>
    )
}

const ClassLevelOption = ({ containerStyle, classLevel, isLastItem, isSelected, onPress, appTheme }) => {
    return (
        <>
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    height: 50,
                    alignItems: 'center',
                    ...containerStyle
                }}
                onPress={onPress}
            >
                <Text
                    style={{
                        flex: 1,
                        color: appTheme?.textColor7,
                        ...FONTS.body3
                    }}
                >
                    {classLevel.label}
                </Text>

                <Image
                    source={appTheme?.name == "light" ? (isSelected ? icons.checkbox_on : icons.checkbox_off) : (isSelected ? icons.checkbox_on_dark : icons.checkbox_off_dark)}
                    resizeMode="contain"
                    style={{
                        width: 20,
                        height: 20
                    }}
                />
            </TouchableOpacity>

            {!isLastItem &&
                <LineDivider
                    lineStyle={{
                        height: 1,
                    }}
                />
            }
        </>
    )
}

const FilterModal = ({ filterModalSharedValue1, filterModalSharedValue2, appTheme }) => {

    const [selectedClassType, setSelectedClassType] = React.useState("")
    const [selectedClassLevel, setSelectedClassLevel] = React.useState("")
    const [selectedCreatedWithin, setSelectedCreatedWithin] = React.useState("")

    const filterModalContainerAnimatedStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(filterModalSharedValue1.value, [SIZES.height, 0], [0, 1]),
            transform: [
                {
                    translateY: filterModalSharedValue1.value,
                }
            ],
        };
    });

    const filterModalBgAnimatedStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(filterModalSharedValue2.value, [SIZES.height, 0], [0, 1]),
        };
    });

    const filterModalContentAnimatedStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(filterModalSharedValue2.value, [SIZES.height, 0], [0, 1]),
            transform: [
                {
                    translateY: filterModalSharedValue2.value,
                }
            ],
        };
    });

    function renderFooter() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 50,
                    marginBottom: 30,
                    paddingHorizontal: SIZES.padding
                }}
            >
                <TextButton
                    label="Redefinir"
                    contentContainerStyle={{
                        flex: 1,
                        borderRadius: SIZES.radius,
                        borderWidth: 1,
                        borderColor: appTheme?.borderColor2,
                        backgroundColor: null
                    }}
                    labelStyle={{
                        color: appTheme?.textColor,
                        ...FONTS.h3
                    }}
                    onPress={() => {

                    }}
                />

                <TextButton
                    label="Aplicar"
                    contentContainerStyle={{
                        flex: 1,
                        marginLeft: SIZES.radius,
                        borderRadius: SIZES.radius,
                        borderWidth: 2,
                        borderColor: COLORS.primary,
                        backgroundColor: COLORS.primary
                    }}
                    labelStyle={{
                        color: COLORS.white,
                        ...FONTS.h3
                    }}
                    onPress={() => {

                    }}
                />
            </View>
        )
    }

    return (
        // Container
        <Animated.View
            style={[{
                position: "absolute",
                bottom: 0,
                height: SIZES.height,
                width: SIZES.width,
            }, filterModalContainerAnimatedStyle,]}
        >
            {/* Background */}
            <Animated.View
                style={[{
                    flex: 1,
                    height: SIZES.height,
                    width: SIZES.width,
                    backgroundColor: COLORS.transparentBlack7,
                }, filterModalBgAnimatedStyle,]}
            >
                {/* Content */}
                <Animated.View
                    style={[{
                        position: "absolute",
                        bottom: 0,
                        height: SIZES.height * 0.9,
                        width: SIZES.width,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        backgroundColor: appTheme?.backgroundColor1 //COLORS.white,
                    }, filterModalContentAnimatedStyle,]}
                >
                    {/* Header */}
                    <View
                        style={{
                            marginTop: SIZES.padding,
                            flexDirection: 'row',
                            paddingHorizontal: SIZES.padding
                        }}
                    >
                        <View
                            style={{
                                width: 60
                            }}
                        />

                        <Text
                            style={{
                                flex: 1,
                                textAlign: 'center',
                                color: appTheme?.textColor,
                                ...FONTS.h1
                            }}
                        >
                            Filtro
                        </Text>

                        <TextButton
                            label="Cancelar"
                            contentContainerStyle={{
                                width: 70,
                                backgroundColor: null
                            }}
                            labelStyle={{
                                color: appTheme?.textColor,
                                ...FONTS.body3
                            }}
                            onPress={() => {
                                filterModalSharedValue2.value = withTiming(SIZES.height, {
                                    duration: 500,
                                })

                                filterModalSharedValue1.value = withDelay(500, withTiming(SIZES.height, {
                                    duration: 100,
                                }))
                            }}
                        />
                    </View>

                    <ScrollView
                        contentContainerStyle={{
                            paddingHorizontal: SIZES.padding,
                            paddingBottom: 50
                        }}
                    >
                        {/* Class Type */}
                        <View
                            style={{
                                marginTop: SIZES.radius
                            }}
                        >
                            <Text
                                style={{
                                    color: appTheme?.textColor,
                                    ...FONTS.h3
                                }}
                            >
                                Tipo de Classe
                            </Text>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginTop: SIZES.radius
                                }}
                            >
                                {constants.class_types.map((item, index) => {
                                    return (
                                        <ClassTypeOption
                                            key={`ClassType-${index}`}
                                            classType={item}
                                            appTheme={appTheme}
                                            isSelected={selectedClassType == item?.id}
                                            containerStyle={{
                                                marginLeft: index == 0 ? 0 : SIZES.base
                                            }}
                                            onPress={() => {
                                                setSelectedClassType(item.id)
                                            }}
                                        />
                                    )
                                })}
                            </View>
                        </View>

                        {/* Class Level */}
                        <View
                            style={{
                                marginTop: SIZES.padding
                            }}
                        >
                            <Text
                                style={{
                                    color: appTheme?.textColor,
                                    ...FONTS.h3
                                }}
                            >
                                Nível de classe
                            </Text>

                            <View>
                                {constants.class_levels.map((item, index) => {
                                    return (
                                        <ClassLevelOption
                                            key={`ClassType-${index}`}
                                            classLevel={item}
                                            isLastItem={index == constants.class_levels.length - 1}
                                            isSelected={selectedClassLevel == item?.id}
                                            appTheme={appTheme}
                                            onPress={() => {
                                                setSelectedClassLevel(item.id)
                                            }}
                                        />
                                    )
                                })}
                            </View>
                        </View>

                        {/* Created Within */}
                        <View
                            style={{
                                marginTop: SIZES.radius
                            }}
                        >
                            <Text
                                style={{
                                    color: appTheme?.textColor,
                                    ...FONTS.h3
                                }}
                            >
                                Criado em
                            </Text>

                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                }}
                            >
                                {constants.created_within.map((item, index) => {
                                    return (
                                        <TextButton
                                            key={`CreatedWithin-${index}`}
                                            label={item?.label}
                                            contentContainerStyle={{
                                                height: 45,
                                                paddingHorizontal: SIZES.radius,
                                                marginLeft: index % 3 == 0 ? 0 : SIZES.radius,
                                                marginTop: SIZES.radius,
                                                borderWidth: appTheme?.name == "light" ? 1 : 0,
                                                borderRadius: SIZES.radius,
                                                borderColor: COLORS.gray20,
                                                backgroundColor: appTheme?.name == "light" ? (item?.id == selectedCreatedWithin ? COLORS.primary3 : null) : (item?.id == selectedCreatedWithin ? COLORS.gray90 : COLORS.gray70)
                                            }}
                                            labelStyle={{
                                                color: item?.id == selectedCreatedWithin ? COLORS.white : appTheme?.name == "light" ? COLORS.black : COLORS.gray30,
                                                ...FONTS.body3,
                                            }}
                                            onPress={() => {
                                                setSelectedCreatedWithin(item.id)
                                            }}
                                        />
                                    )
                                })}
                            </View>
                        </View>

                        {/* Class Length */}
                        <View
                            style={{
                                marginTop: SIZES.padding,
                            }}
                        >
                            <Text
                                style={{
                                    color: appTheme?.textColor,
                                    ...FONTS.h3
                                }}
                            >
                                Duração da aula
                            </Text>

                            <View
                                style={{
                                    alignItems: 'center'
                                }}
                            >
                                <TwoPointSlider
                                    values={[20, 50]}
                                    min={15}
                                    max={60}
                                    postfix="min"
                                    onValuesChange={(values) => console.log(values)}
                                />
                            </View>
                        </View>
                    </ScrollView>

                    {/* Footer */}
                    {renderFooter()}
                </Animated.View>
            </Animated.View>
        </Animated.View>
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

export default connect(mapStateToProps, mapDispatchToProps)(FilterModal);