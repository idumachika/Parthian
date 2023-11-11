import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import styles from './styles';

interface ProgressBarProps {
  currentStep: number;
  totalNumberOfSteps: number;
  showHeaderText?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalNumberOfSteps,
  showHeaderText = false,
}) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(currentStep / totalNumberOfSteps, {
      duration: 500,
    });
  }, [progress, currentStep, totalNumberOfSteps]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: `${progress.value * 100}%`,
    };
  });

  return (
    <View style={styles.stepHeader}>
      {showHeaderText && (
        <Text style={styles.stepHeaderText}>
          Step {currentStep} of {totalNumberOfSteps}
        </Text>
      )}
      <View style={styles.stepHeaderProgressContainer}>
        <Animated.View style={[styles.stepHeaderProgressBar, animatedStyle]} />
      </View>
    </View>
  );
};

export default ProgressBar;
