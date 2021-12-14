import React, {FunctionComponent, useRef} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
// import { images } from '../config/data/dataCarousel180';
import { images2 } from '../config/data/dataCarousel180';

const {width} = Dimensions.get('screen');

// RotatingFood
const Carousel180: FunctionComponent = () => {
  const xScroll = useRef(new Animated.Value(0)).current;

  return (
    <View style={style.container}>
      <Animated.FlatList
        style={style.flatList}
        data={images2}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        decelerationRate={'fast'}
        keyExtractor={(_, index) => index.toString()}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: xScroll}}}],
          {useNativeDriver: true},
        )}
        renderItem={({item, index}) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const outputRange = ['90deg', '0deg', '-90deg'];

          const translateX = xScroll.interpolate({inputRange, outputRange});

          return (
            <View style={style.imageContainer}>
              <Animated.Image
                style={[style.image, {transform: [{rotateZ: translateX}]}]}
                // source={{uri: item}}
                source={ item }
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#252525'
  },
  flatList: {flexGrow: 0},
  imageContainer: {
    width: width,
    height: 500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: width,
    width: width,
    borderRadius: 20,
    resizeMode: 'cover',
  },
});

export default Carousel180;
