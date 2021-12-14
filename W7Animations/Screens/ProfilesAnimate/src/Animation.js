// ProfilesAnimate/src/Animation

import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Text,
  Alert,
  Pressable,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { withBouncing } from "./withBouncing";
import { BlurView } from "expo-blur";



import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetTextInput,
  BottomSheetBackground,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import { MotiView, MotiText, useDynamicAnimation, MotiImage } from 'moti';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';



const widthAndHeight = Dimensions.get("screen");
const width = widthAndHeight.width;
const height = widthAndHeight.height;

const VELOCITY = 1;

export default function Animation() {
  const [profile, setProfile] = useState({name: '', cargo: '', photo: ''});


  const _spacing = 16;
  const bottomSheetModalRef = React.useRef(null);

  const dynamicAnimationY = useDynamicAnimation(() => ({
    opacity: 0,
    translateY: 100,
  }));
  const dynamicAnimationX = useDynamicAnimation(() => ({
    opacity: 0,
    translateX: 120,
  }));



  // variables
  const snapPoints = React.useMemo(() => ['20%'], []);

  // callbacks
  const showModal = React.useCallback(() => {
    bottomSheetModalRef.current?.present();
    setTimeout(
      () => {
        dynamicAnimationY.animateTo((current) => ({
          ...current,
          opacity: 1,
          translateY: 0,
        }));
        dynamicAnimationX.animateTo((current) => ({
          ...current,
          opacity: 1,
          translateX: 0,
        }));
        },
      300
    );
  }, []);

  const hideModal = React.useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
    dynamicAnimationY.animateTo((current) => ({ ...current, opacity: 0, translateY: 100 }));
    dynamicAnimationX.animateTo((current) => ({ ...current, opacity: 0, translateX: 120 }));
  }, []);


  const isLoaded = useRef(false);
  const animatedImageCircles = [
    {
      circle: 120,
      translateX: useSharedValue(0),
      translateY: useSharedValue(0),
      image: require("../../../assets/profiles/dieegosf.jpeg"),
      name: 'Diego Fernandes',
      cargo: 'CTO Rocketseat',
    },
    {
      circle: 121,
      translateX: useSharedValue(0),
      translateY: useSharedValue(0),
      image: require("../../../assets/profiles/gilbertopradodesign.jpeg"),
      name: 'Gilberto Prado',
      cargo: 'UI Designer',
    },
    {
      circle: 122,
      translateX: useSharedValue(0),
      translateY: useSharedValue(0),
      image: require("../../../assets/profiles/imateussilva.jpeg"),
      name: 'Mateus Silva',
      cargo: 'Desenvolvedor',
    },
    {
      circle: 123,
      translateX: useSharedValue(0),
      translateY: useSharedValue(0),
      image: require("../../../assets/profiles/jonasmilancc.jpeg"),
      name: 'Jonas Milan',
      cargo: 'UI Designer',
    },
    {
      circle: 124,
      translateX: useSharedValue(0),
      translateY: useSharedValue(0),
      image: require("../../../assets/profiles/nasseryousefali.jpeg"),
      name: 'Násser Yousef',
      cargo: 'Desenvolvedor Frontend',
    },
    {
      circle: 125,
      translateX: useSharedValue(0),
      translateY: useSharedValue(0),
      image: require("../../../assets/profiles/rodrigogoncalves.jpeg"),
      name: 'Rodrigo Gonçalves',
      cargo: 'Desenvolvedor Frontend',
    },
    {
      circle: 126,
      translateX: useSharedValue(0),
      translateY: useSharedValue(0),
      image: require("../../../assets/profiles/silvioluissampaio.jpeg"),
      name: 'Silvio Sampaio',
      cargo: 'Desenvolvedor',
    },
    {
      circle: 127,
      translateX: useSharedValue(0),
      translateY: useSharedValue(0),
      image: require("../../../assets/profiles/wiimoreira.jpeg"),
      name: 'William Moreira',
      cargo: 'Desenvolvedor Frontend',
    },
    {
      circle: 128,
      translateX: useSharedValue(0),
      translateY: useSharedValue(0),
      image: require("../../../assets/profiles/feuxdesign.jpeg"),
      name: 'Felipe Santana',
      cargo: 'UI/UX Designer',
    },
    {
      circle: 129,
      translateX: useSharedValue(0),
      translateY: useSharedValue(0),
      image: require("../../../assets/profiles/bsa_ux.jpeg"),
      name: 'Bruno S. Araujo',
      cargo: 'UI/UX Designer',
    },
    {
      circle: 130,
      translateX: useSharedValue(0),
      translateY: useSharedValue(0),
      image: require("../../../assets/profiles/tiagoluchtenberg.jpeg"),
      name: 'Tiago Luchtenberg',
      cargo: 'UI Designer',
    },

  ];
  const animatedBlurBubbles = [
    {
      circle: 100,
      translateX: useSharedValue(0),
      translateY: useSharedValue(0),
      color: "#cffc03",
    },
    {
      circle: 180,
      translateX: useSharedValue(0),
      translateY: useSharedValue(0),
      color: "#fc0384",
    },
    {
      circle: 90,
      translateX: useSharedValue(0),
      translateY: useSharedValue(0),
      color: "#8803fc",
    },
    {
      circle: 120,
      translateX: useSharedValue(0),
      translateY: useSharedValue(0),
      color: "#fc8003",
    },
    {
      circle: 140,
      translateX: useSharedValue(0),
      translateY: useSharedValue(0),
      color: "#0703fc",
    },
    {
      circle: 130,
      translateX: useSharedValue(0),
      translateY: useSharedValue(0),
      color: "#fcb103",
    },
    {
      circle: 150,
      translateX: useSharedValue(0),
      translateY: useSharedValue(0),
      color: "#03ebfc",
    },
  ];
//   const animateProfilesOrBubbles = animatedBlurBubbles;
  // const animateProfilesOrBubbles = animatedImageCircles;
  const [modoAnimate, setModoAnimate] = useState(animatedImageCircles);

  useEffect(() => {
    if (!isLoaded.current) {
      modoAnimate.map((item) => {
        return (
          (item.translateY.value = withBouncing(
            VELOCITY + (Math.random() * 2),
            0,
            height - item.circle
          )),
          (item.translateX.value = withBouncing(
            VELOCITY + (Math.random() * 2),
            0,
            width - item.circle
          ))
        );
      });
      isLoaded.current = true;
    }
  }, []);

  const style = (translateX, translateY) =>
    useAnimatedStyle(() => {
      return {
        transform: [
          { translateX: translateX.value },
          { translateY: translateY.value },
        ],
      };
    });

  return (
    <BottomSheetModalProvider>

      <View style={styles.container}>
        {modoAnimate.map((item, index) => (
          <Animated.View
            key={item.circle.toString()}
            style={[
              style(item.translateX, item.translateY),
              { position: "absolute", zIndex: Math.random() },
            ]}
          >
            <TouchableOpacity
              onPress={() => {
                setProfile({
                  name : item.name, 
                  cargo: item.cargo, 
                  photo: item.image
                });
                showModal();
              }}
              // onPress={showModal}
              style={[
                styles.touchable,
                { width: item.circle, height: item.circle },
                item.color && { backgroundColor: item.color },
              ]}
            >
              {!item.color && (
                <Image
                  style={[
                    styles.touchable,
                    { width: item.circle, height: item.circle },
                  ]}
                  source={item.image}
                />
              )}
            </TouchableOpacity>
          </Animated.View>
        ))}
        {modoAnimate[0].color && (
          <BlurView
            intensity={100}
            style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}
          ></BlurView>
        )}

        <BottomSheetModal
          ref={bottomSheetModalRef}
          keyboardBehavior="interactive"
          keyboardBlurBehavior="restore"
          // backdropComponent={BottomSheetBackdrop}
          snapPoints={snapPoints}
          handleComponent={() => {
            return (
              <Pressable onPress={hideModal}>
                <View
                  style={{
                    height: 42,
                    borderBottomWidth: 0,
                    backgroundColor: '#242424',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderTopLeftRadius: 14,
                    borderTopRightRadius: 14,
                  }}>
                  <MaterialIcons
                    name="keyboard-arrow-down"
                    size={24}
                    color="#fff"
                    style={{ transform: [{ scaleX: 1.4 }] }}
                  />
                </View>
              </Pressable>
            );
          }}>
          <View
            style={{
              paddingHorizontal: _spacing * 2,
              paddingVertical: _spacing,
              // justifyContent: 'space-between',
              backgroundColor: '#242424',
              flex: 1,
            }}>
            <MotiView style={{flex:1, flexDirection: 'row', alignContent: 'center' }} >
              <MotiImage
                state={dynamicAnimationY}
                delay={0}
                style={[
                  { width: 80, height: 80, borderRadius: 100, borderColor: '#fff', borderWidth: 2 },
                ]}
                source={profile.photo}
              />
              <MotiView style={{flex:1, flexDirection: 'column', alignContent: 'center' }} >
                <MotiText
                  state={dynamicAnimationX}
                  delay={300}
                  style={[
                    styles.regular,
                    { fontSize: 26, color: '#fff', marginLeft: _spacing, marginTop: 6 },
                  ]}>
                  {profile.name}
                </MotiText>
                <MotiText
                state={dynamicAnimationX}
                delay={500}
                style={[
                  styles.regular,
                  { fontSize: 18, color: '#fff', marginLeft: _spacing, marginTop: _spacing },
                ]}>
                {profile.cargo}
              </MotiText>
            </MotiView>
            </MotiView>

          </View>
        </BottomSheetModal>


      </View>
    </BottomSheetModalProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    height: widthAndHeight.height,
    width,
    backgroundColor: "#506CEE",
  },
  nonBlurredContent: {
    zIndex: 100,
  },
  touchable: {
    borderRadius: 200,
    borderRadius: 900,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    zIndex: 1,
    elevation: 3,
  },
});