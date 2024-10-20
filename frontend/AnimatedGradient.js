// AnimatedGradient.js
import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const AnimatedGradient = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animate = () => {
      animatedValue.setValue(0);
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 6000,
        useNativeDriver: false,
      }).start(() => animate());
    };

    animate();
  }, [animatedValue]);

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [
      ['#FF5A5F', '#FF9A5F'],
      ['#FF9A5F', '#FF5A5F'],
    ],
  });

  return (
    <Animated.View style={{ flex: 1 }}>
      <LinearGradient
        colors={backgroundColor}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
    </Animated.View>
  );
};

export default AnimatedGradient;
