// ListItem

import React from 'react';
import { 
    Dimensions, 
    StyleSheet, 
    Text, 
} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerProps,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { TaskInterface } from '../';
import { FontAwesome5 } from '@expo/vector-icons';

interface ListItemProps
  extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  task: TaskInterface;
  onDismiss?: (task: TaskInterface) => void;
  onChecked?: (task: TaskInterface) => void;
}

const LIST_ITEM_HEIGHT = 70;

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const TRANSLATE_X_THRESHOLD = -SCREEN_WIDTH * 0.2;

const ListItem: React.FC<ListItemProps> = ({
  task,
  onDismiss,
  onChecked,
  simultaneousHandlers,
}) => {
  const translateX = useSharedValue(0);
  const itemHeight = useSharedValue(LIST_ITEM_HEIGHT);
  const marginVertical = useSharedValue(10);
  const opacity = useSharedValue(1);

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: (event) => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
    const shouldBeDismissed = translateX.value > 0 ? false : translateX.value < TRANSLATE_X_THRESHOLD;
    const shouldBeChecked = translateX.value < 0 ? false : translateX.value > (TRANSLATE_X_THRESHOLD*-1);

    if (shouldBeDismissed) {
        translateX.value = withTiming(-SCREEN_WIDTH);
        itemHeight.value = withTiming(0);
        marginVertical.value = withTiming(0);
        opacity.value = withTiming(0, undefined, (isFinished) => {
          if (isFinished && onDismiss) {
            runOnJS(onDismiss)(task);
          }
        });
      } else if (shouldBeChecked) {
        translateX.value = withTiming(0, undefined, (isFinished) => {
          if (isFinished && onChecked) {
            runOnJS(onChecked)(task);
          }
        });
      } else {
        translateX.value = withTiming(0);
      }
    },
  });

  const rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));

  const rIconContainerStyle = useAnimatedStyle(() => {
    const opacity = withTiming(
      translateX.value < TRANSLATE_X_THRESHOLD ? 1 : 0
    );
    return { opacity };
  });

  const lIconContainerStyle = useAnimatedStyle(() => {
    const opacity = withTiming(
      translateX.value > (TRANSLATE_X_THRESHOLD*-1) ? 1 : 0
    );
    return { opacity };
  });

  const rTaskContainerStyle = useAnimatedStyle(() => {
    return {
      height: itemHeight.value,
      marginVertical: marginVertical.value,
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View style={[styles.taskContainer, rTaskContainerStyle]}>
      <Animated.View style={[styles.iconCheckedContainer, lIconContainerStyle]}>
        <FontAwesome5
          name={'check-square'}
          size={LIST_ITEM_HEIGHT * 0.4}
          color={task.checked ? 'red' : 'green'}
        />
      </Animated.View>
      <Animated.View style={[styles.iconContainer, rIconContainerStyle]}>
        <FontAwesome5
          name={'trash-alt'}
          size={LIST_ITEM_HEIGHT * 0.4}
          color={'red'}
        />
      </Animated.View>
      <PanGestureHandler
        simultaneousHandlers={simultaneousHandlers}
        onGestureEvent={panGesture}
      >
        <Animated.View style={[styles.task, rStyle]}>
          {task.checked 
            ? (<Text style={[styles.taskTitle, styles.taskChecked]}>{task.title}</Text>)
            : (<Text style={[styles.taskTitle]}>{task.title}</Text>)
          }
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    width: '100%',
    alignItems: 'center',
  },
  task: {
    width: '90%',
    height: LIST_ITEM_HEIGHT,
    justifyContent: 'center',
    paddingLeft: 20,
    backgroundColor: '#262A34',
    borderRadius: 10,
    // Shadow for iOS
    shadowOpacity: 0.3,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 10,
    // Shadow for Android
    elevation: 5,
  },
  taskTitle: {
    fontSize: 20,
    color: '#FFFFFF',   
  },
  taskChecked: {
    textDecorationStyle: 'solid',
    textDecorationLine: 'line-through',
    textDecorationColor: 'green',
    opacity: 0.5,
    color: 'green'
  },
  iconContainer: {
    height: LIST_ITEM_HEIGHT,
    width: LIST_ITEM_HEIGHT,
    position: 'absolute',
    right: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCheckedContainer: {
    height: LIST_ITEM_HEIGHT,
    width: LIST_ITEM_HEIGHT,
    position: 'absolute',
    left: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default ListItem;