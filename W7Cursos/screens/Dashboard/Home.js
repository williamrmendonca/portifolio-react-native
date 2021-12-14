import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    ScrollView,
} from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import { connect } from "react-redux";

import {
    IconButton,
    TextButton,
    VerticalCourseCard,
    HorizontalCourseCard,
    LineDivider,
    CategoryCard
} from "../../components";
import { COLORS, FONTS, SIZES, icons, images, dummyData } from '../../constants';

const Section = ({ containerStyle, title, onPress, children, appTheme }) => {
    return (
        <View
            style={{
                ...containerStyle
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    paddingHorizontal: SIZES.padding
                }}
            >
                <Text
                    style={{
                        flex: 1,
                        color: appTheme?.textColor,
                        ...FONTS.h2
                    }}
                >
                    {title}
                </Text>

                <TextButton
                    contentContainerStyle={{
                        width: 80,
                        borderRadius: 30,
                        backgroundColor: COLORS.primary
                    }}
                    label="Ver tudo"
                    onPress={onPress}
                />
            </View>

            {children}
        </View>
    )
}

const Home = ({ appTheme }) => {
    const navigation = useNavigation();

    function renderHeader() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: 40,
                    marginBottom: 10,
                    paddingHorizontal: SIZES.padding,
                    alignItems: 'center'
                }}
            >
                {/* Greetings */}
                <View
                    style={{
                        flex: 1
                    }}
                >
                    <Text
                        style={{
                            color: appTheme?.textColor,
                            ...FONTS.h2
                        }}
                    >
                        Olá, William!
                    </Text>
                    <Text
                        style={{
                            color: COLORS.gray50,
                            ...FONTS.body3
                        }}
                    >
                        Quinta-feira, 15 de setembro de 2021
                    </Text>
                </View>

                {/* Notification */}
                <IconButton
                    icon={icons.notification}
                    iconStyle={{
                        tintColor: appTheme?.tintColor
                    }}
                />
            </View>
        )
    }

    function renderStartLearning() {
        return (
            <ImageBackground
                source={images.featured_bg_image}
                style={{
                    alignItems: 'flex-start',
                    marginTop: SIZES.padding,
                    marginHorizontal: SIZES.padding,
                    padding: 15
                }}
                imageStyle={{
                    borderRadius: SIZES.radius
                }}
            >
                {/* Info */}
                <View>
                    <Text
                        style={{
                            color: COLORS.white,
                            ...FONTS.body2
                        }}
                    >
                        COMO
                    </Text>
                    <Text
                        style={{
                            color: COLORS.white,
                            ...FONTS.h2
                        }}
                    >
                        Torne sua marca mais visível com nossa lista de dicas.
                    </Text>

                    <Text
                        style={{
                            marginTop: SIZES.radius,
                            color: COLORS.white,
                            ...FONTS.body4
                        }}
                    >
                        por William Mendonça
                    </Text>
                </View>

                {/* Image */}
                <Image
                    source={images.start_learning}
                    style={{
                        width: "100%",
                        height: 110,
                        marginTop: SIZES.padding
                    }}
                />

                {/* Button */}
                <TextButton
                    label="Inicie a aula"
                    contentContainerStyle={{
                        height: 40,
                        paddingHorizontal: SIZES.padding,
                        borderRadius: 20,
                        backgroundColor: COLORS.white
                    }}
                    labelStyle={{
                        color: COLORS.black
                    }}
                />
            </ImageBackground>
        )
    }

    function renderCourses() {
        return (
            <FlatList
                horizontal={true}
                data={dummyData.courses_list_1}
                listKey="Courses"
                keyExtractor={item => `Courses-${item.id}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: SIZES.padding
                }}
                renderItem={({ item, index }) => (
                    <VerticalCourseCard
                        containerStyle={{
                            marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
                            marginRight: index == dummyData.courses_list_1.length - 1 ? SIZES.padding : 0
                        }}
                        course={item}
                    />
                )}
            />
        )
    }

    function renderCategories() {
        return (
            <Section
                title="Categorias"
                appTheme={appTheme}
            >
                <FlatList
                    horizontal={true}
                    data={dummyData.categories}
                    listKey="Categories"
                    keyExtractor={item => `Categories-${item.id}`}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        marginTop: SIZES.radius
                    }}
                    renderItem={({ item, index }) => (
                        <CategoryCard
                            sharedElementPrefix="Home"
                            category={item}
                            containerStyle={{
                                marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
                                marginRight: index == dummyData.categories.length - 1 ? SIZES.padding : 0
                            }}
                            onPress={() => navigation.navigate("CourseListing", { category: item, sharedElementPrefix: "Home" })}
                        />
                    )}
                />
            </Section>
        )
    }

    function renderPopularCourses() {
        return (
            <Section
                title="Cursos populares"
                appTheme={appTheme}
                containerStyle={{
                    marginTop: 30
                }}
            >
                <FlatList
                    data={dummyData.courses_list_2}
                    listKey="PopularCourses"
                    scrollEnabled={false}
                    keyExtractor={item => `PopularCourses-${item.id}`}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        marginTop: SIZES.radius,
                        paddingHorizontal: SIZES.padding
                    }}
                    renderItem={({ item, index }) => (
                        <HorizontalCourseCard
                            course={item}
                            containerStyle={{
                                marginVertical: SIZES.padding,
                                marginTop: index == 0 ? SIZES.radius : SIZES.padding
                            }}
                        />
                    )}
                    ItemSeparatorComponent={() => (
                        <LineDivider />
                    )}
                />
            </Section>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: appTheme?.backgroundColor1
            }}
        >
            {renderHeader()}

            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 150
                }}
                showsVerticalScrollIndicator={false}
            >
                {/* Start Learning */}
                {renderStartLearning()}

                {/* Courses */}
                {renderCourses()}

                <LineDivider
                    lineStyle={{
                        marginVertical: SIZES.padding
                    }}
                />

                {/* Categories */}
                {renderCategories()}

                {/* Popular Courses */}
                {renderPopularCourses()}
            </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);