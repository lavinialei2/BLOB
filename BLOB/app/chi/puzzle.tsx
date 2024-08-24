import React, { useState, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

export default function Puzzle() {
  const [draggingItem, setDraggingItem] = useState(null);
  const [dropZones, setDropZones] = useState([
    { id: 1, x: 50, y: 400 },
    { id: 2, x: 150, y: 400 },
    { id: 3, x: 250, y: 400 },
    { id: 4, x: 350, y: 400 },
  ]);
  const [pieces, setPieces] = useState([
    { id: 1, x: 50, y: 100 },
    { id: 2, x: 150, y: 100 },
    { id: 3, x: 250, y: 100 },
    { id: 4, x: 350, y: 100 },
  ]);
  const pan = useRef(new Animated.ValueXY()).current;

  const onGestureEvent = Animated.event([{ nativeEvent: { translationX: pan.x, translationY: pan.y } }], { useNativeDriver: false });

  const onHandlerStateChange = (event) => {
    if (event.nativeEvent.state === State.END) {
      const { x, y } = event.nativeEvent.translation;
      const newDraggingItem = { ...draggingItem, x: x + draggingItem.x, y: y + draggingItem.y };
      const updatedDropZones = dropZones.map(zone => ({
        ...zone,
        occupied: newDraggingItem.id === zone.id ? true : zone.occupied,
      }));
      setDropZones(updatedDropZones);

      pan.flattenOffset();
      setDraggingItem(null);
    }
  };

  const startDrag = (item) => {
    setDraggingItem(item);
    pan.setOffset({ x: item.x, y: item.y });
    pan.setValue({ x: 0, y: 0 });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Help Chi Solve the Puzzle!</Text>
      <View style={styles.puzzleContainer}>
        <View style={styles.puzzleDropContainer}>
          {dropZones.map((zone) => (
            <View key={zone.id} style={[styles.dropZone, { left: zone.x, top: zone.y }]}>
              {/* Drop zone content here */}
            </View>
          ))}
        </View>
        {pieces.map((piece) => (
          <PanGestureHandler
            key={piece.id}
            onGestureEvent={onGestureEvent}
            onHandlerStateChange={onHandlerStateChange}
          >
            <Animated.View
              style={[styles.puzzlePiece, { left: piece.x, top: piece.y, transform: [{ translateX: pan.x }, { translateY: pan.y }] }]}
            >
              <TouchableOpacity onPress={() => startDrag(piece)}>
                <Image source={{ uri: `img/puzzle${piece.id}.png` }} style={styles.image} />
              </TouchableOpacity>
            </Animated.View>
          </PanGestureHandler>
        ))}
      </View>
      <TouchableOpacity style={styles.resetButton} onPress={() => {
        // Implement reset logic here
      }}>
        <Text style={styles.resetButtonText}>Reset Puzzle</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#77B47A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 80,
    fontFamily: 'VarelaRound-Regular',
    marginBottom: 5,
    textAlign: 'center',
  },
  puzzleContainer: {
    width: '90%',
    height: '70%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  puzzleDropContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  dropZone: {
    position: 'absolute',
    width: 150,
    height: 150,
    backgroundColor: 'rgba(50, 50, 50, 0.7)',
    borderColor: 'transparent',
    borderWidth: 1,
  },
  puzzlePiece: {
    position: 'absolute',
    width: 150,
    height: 150,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resetButton: {
    backgroundColor: '#77B47A',
    borderRadius: 7,
    padding: 10,
    marginTop: 20,
  },
  resetButtonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});
