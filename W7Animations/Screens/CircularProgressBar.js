// CircularProgressBar

import React, { useEffect } from 'react';
import { useCallback } from 'react';
import { 
    Dimensions, 
    TouchableOpacity 
} from 'react-native';
import { 
    StyleSheet, 
    Text, 
    View 
} from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedProps,
} from 'react-native-reanimated';
import { useDerivedValue } from 'react-native-reanimated';
import { ReText } from 'react-native-redash';

import Svg, { Circle } from 'react-native-svg';

const BACKGROUND_COLOR = '#262A34';
const BACKGROUND_STROKE_COLOR = '#5E6272';
const STROKE_COLOR = '#FBA3FF';  //86FFCA  //FBA3FF

const { width, height } = Dimensions.get('window');

const CIRCLE_LENGTH = 800; // 2PI*R
const R = CIRCLE_LENGTH / (2 * Math.PI);

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function CircularProgressBar() {
  const progress = useSharedValue(0);
  const percetCompleted = 100;

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value),
  }));

  const progressText = useDerivedValue(() => {
    return `${Math.floor(progress.value * 100)}`;
  });

  const onPress = useCallback(() => {
    progress.value = withTiming(progress.value > 0 ? 0 : ((percetCompleted)/100), { duration: 2000 * ((percetCompleted)/100) });
  }, []);

  return (
    <View style={styles.container}>
      <ReText style={styles.progressText} text={progressText} />
      <Svg style={{ position: 'absolute' }}>
        <Circle
          cx={width / 2}
          cy={height / 2}
          r={R}
          stroke={BACKGROUND_STROKE_COLOR}
          strokeWidth={60}
        />
        <AnimatedCircle
          cx={width / 2}
          cy={height / 2}
          r={R}
          stroke={STROKE_COLOR}
          strokeWidth={50}
          strokeDasharray={CIRCLE_LENGTH}
          animatedProps={animatedProps}
          strokeLinecap={'round'}
        />
      </Svg>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>Executar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressText: {
    fontSize: 80,
    color: 'rgba(256,256,256,0.7)',
    width: 200,
    textAlign: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 80,
    width: width * 0.7,
    height: 60,
    backgroundColor: BACKGROUND_STROKE_COLOR,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
    letterSpacing: 2.0,
  },
});