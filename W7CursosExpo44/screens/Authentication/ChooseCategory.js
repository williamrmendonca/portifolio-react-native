import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { connect } from "react-redux";
import {
    IconButton,
    TextButton
} from "../../components";
import { COLORS, FONTS, SIZES, icons, constants } from '../../constants';

const CategoryOption = ({ category, isSelected, onPress, appTheme }) => {
    return (
        <TouchableOpacity
            style={{
                height: (SIZES.width - (SIZES.padding * 2) - 30) / 2.5,
                width: (SIZES.width - (SIZES.padding * 2) - 30) / 3,
                marginTop: SIZES.radius,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: SIZES.radius,
                borderRadius: SIZES.radius,
                backgroundColor: isSelected ? appTheme.backgroundColor6 : appTheme.backgroundColor5,
                borderWidth: (isSelected || appTheme.name == 'light') ? 0 : 1,
                borderColor: appTheme.borderColor2,
            }}
            onPress={onPress}
        >
            <Image
                source={category.icon}
                resizeMode="contain"
                style={{
                    width: 40,
                    height: 40,
                    tintColor: isSelected ? COLORS.white : COLORS.gray50
                }}
            />

            <Text
                style={{
                    textAlign: 'center',
                    marginTop: SIZES.radius,
                    ...FONTS.h3,
                    color: isSelected ? appTheme.textColor4 : appTheme.textColor,
                    lineHeight: 18,
                    fontSize: 14
                }}
            >
                {category?.label}
            </Text>
        </TouchableOpacity>
    )
}

const ChooseCategory = ({ navigation, appTheme }) => {

    const [selectedCategories, setSelectedCategories] = useState([])

    function renderCategories() {
        return (
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.height > 800 ? SIZES.padding : SIZES.radius
                }}
            >
                <Text
                    style={{
                        ...FONTS.h1,
                        color: appTheme.textColor,
                    }}
                >
                    Escolha as categorias
                </Text>

                <ScrollView>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                            marginTop: SIZES.height > 800 ? SIZES.padding : SIZES.radius
                        }}
                    >
                        {constants.categories.map((item, index) => {
                            return (
                                <CategoryOption
                                    key={`Category-${index}`}
                                    category={item}
                                    isSelected={selectedCategories.findIndex(category => category?.id === item.id) >= 0}
                                    onPress={() => {
                                        let newSelectedCategories = JSON.parse(JSON.stringify(selectedCategories));

                                        const index = selectedCategories.findIndex(category => category?.id === item.id)

                                        if (index >= 0) {
                                            newSelectedCategories.splice(index, 1)
                                        } else {
                                            newSelectedCategories.push(item)
                                        }

                                        setSelectedCategories(newSelectedCategories)
                                    }}
                                    appTheme={appTheme}
                                />
                            )
                        })}
                    </View>
                </ScrollView>
            </View>
        )
    }

    function renderFooter() {
        return (
            <TextButton
                contentContainerStyle={{
                    height: 60,
                    marginBottom: 30,
                    borderRadius: 30,
                    backgroundColor: COLORS.primary
                }}
                label="CONTINUE"
                onPress={() => {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Dashboard' }],
                    });
                }}
            />
        )
    }

    return (
        <View
            style={{
                flex: 1,
                paddingHorizontal: SIZES.padding,
                backgroundColor: appTheme.backgroundColor1,
            }}
        >
            {/* Back */}
            <IconButton
                icon={icons.back}
                iconStyle={{
                    tintColor: appTheme.name == "light" ? COLORS.black : COLORS.white
                }}
                containerStyle={{
                    width: 50,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: SIZES.height > 800 ? 50 : 30,
                    borderRadius: 25,
                    backgroundColor: appTheme.name == "light" ? COLORS.gray10 : COLORS.gray60
                }}
                onPress={() => navigation.goBack()}
            />

            {/* Categories */}
            {renderCategories()}

            {/* Footer */}
            {renderFooter()}
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

export default connect(mapStateToProps, mapDispatchToProps)(ChooseCategory);
