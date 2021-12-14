import * as React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Animated,
  TouchableOpacity
} from 'react-native';

import navigation from '../config/navigation';
import { SPACING, fonts } from '../config/theme';

const {height} = Dimensions.get('window');
// const ITEM_WIDTH = width;
// const ITEM_HEIGHT = height * 0.3;
const ITEM_HEIGHT = height * 0.3;

export default function NavigationList(props) {

  const scrollY = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <View
        style={{
          overflow: 'hidden',
          height: height * 0.9,
        }}>
        <Animated.FlatList
          data={navigation}
          keyExtractor={(item) => item.name}
          bounces={false}
          snapToInterval={ITEM_HEIGHT}
          showsVerticalScrollIndicator={false}
          decelerationRate="fast"
          initialScrollIndex={0}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: true},
          )}
          contentContainerStyle={{paddingBottom: height * 0.5}}
          renderItem={({ item, index }) => {
            return (
              <Animated.View
                style={[
                  styles.item,
                  {
                    transform: [
                      {
                        scale: scrollY.interpolate({
                          inputRange: [
                            (index - 1) * ITEM_HEIGHT,
                            index * ITEM_HEIGHT,
                            (index + 1) * ITEM_HEIGHT,
                          ],
                          outputRange: [0.6, 1, 0.6],
                          extrapolate: 'clamp',
                        }),
                      },
                    ],
                  },
                ]}>

                <TouchableOpacity
                  onPress={() => props.navigation.push(item.name)}
                  style={{ padding: SPACING }}
                >
                  <Text style={[{ ...fonts.montserratBold, fontSize: 24 }]}>
                    {index + 1}. {item.label}
                  </Text>
                </TouchableOpacity>
              </Animated.View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: ITEM_HEIGHT,
    marginBottom: 0,
  },
});
