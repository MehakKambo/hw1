import React, { useEffect, useRef, useState } from 'react';
import { View, Text, AppState, AppStateStatus, StyleSheet } from 'react-native';
import { Video, ResizeMode, AVPlaybackStatus } from 'expo-av';
import Slider from '@react-native-community/slider';

export default function MainScreen() {
  const videoRef = useRef<Video>(null);
  const [appState, setAppState] = useState<AppStateStatus>(AppState.currentState);

  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', handleAppStateChange);
    return () => {
      subscription.remove();
    };
  }, []);

  const handleAppStateChange = (nextAppState: AppStateStatus) => {
    if (nextAppState === 'active') {
      console.log('App has come back to the foreground');
      videoRef.current?.playAsync().catch(error => console.error("Error playing video:", error));
    } else if (nextAppState.match(/inactive|background/)) {
      console.log('App is going to the background');
      videoRef.current?.pauseAsync().catch(error => console.error("Error pausing video:", error));
    }
    setAppState(nextAppState);
  };

  const handlePlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded) {
      setPosition(status.positionMillis);
      setDuration(status.durationMillis || 0);
    }
  };

  return (
    <View style={styles.lightMode}>
      <Text style={styles.text}>HW3: App State Management!</Text>
      <Text style={styles.text}>
        This video plays on loop if the app is active.{'\n'}
        The video pauses if the app goes to the background.{'\n'}
        The video resumes if the app comes back to the foreground.
      </Text>
      <Video
        ref={videoRef}
        source={require('../../assets/videos/rick-rolled.mov')}
        style={{ width: 300, height: 200 }}
        resizeMode={ResizeMode.CONTAIN}
        shouldPlay
        isLooping
        onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
      />
      <Slider
        style={{ width: 300, height: 40 }}
        minimumValue={0}
        maximumValue={duration}
        value={position}
        minimumTrackTintColor="#1EB1FC"
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="#1EB1FC"
        disabled
      />
      <Text>(Slider for visual progress only)</Text>
      <Text style={styles.disclaimer}>
        This video is used for educational purposes only. All rights to the content belong to the original creator.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  lightMode: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 22,
    color: '#000000',
    margin: 10,
    textAlign: 'center',
  },
  disclaimer: {
    fontSize: 12,
    color: '#888888',
    margin: 20,
    textAlign: 'center',
  },
});