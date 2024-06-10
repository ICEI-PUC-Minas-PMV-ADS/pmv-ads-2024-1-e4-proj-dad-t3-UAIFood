import React, { useRef, useEffect } from 'react';
import { View, Image, FlatList, Dimensions, Animated } from 'react-native';
import styles from '../styles';

const { width } = Dimensions.get('window');

const Carousel = ({ images }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef();
  let carouselTimer;

  // Function to render each image in the carousel
  const renderItem = ({ item }) => {
    return (
      <View style={styles.carouselItem}>
        <Image source={item} style={styles.carouselImage} />
      </View>
    );
  };

  // Function to handle the scroll event
  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  // Function to automatically scroll the carousel
  const startAutoScroll = () => {
    let scrollValue = 0;
    carouselTimer = setInterval(() => {
      scrollValue = scrollValue + width;
      if (scrollValue >= width * images.length) {
        scrollValue = 0;
      }
      flatListRef.current.scrollToOffset({ offset: scrollValue, animated: true });
    }, 3000); // Adjust the interval as needed
  };

  useEffect(() => {
    startAutoScroll();
    return () => clearInterval(carouselTimer); // Clean up the interval on component unmount
  }, []);

  return (
    <View>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        ref={flatListRef}
      />
      <View style={styles.indicatorContainer}>
        {images.map((_, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [8, 16, 8],
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index}
              style={[styles.dot, { width: dotWidth, opacity }]}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Carousel;
