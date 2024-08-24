import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbarContainer}>
        <View style={styles.navbar}>
          <Image
            source={require('../assets/images/homeIcon.png')}
            style={styles.menuIcon}
          />
    
          <View style={styles.menu}>
            <View style={[styles.menuItem, { visibility: 'hidden' }]}>
              <Image
                source={require('../assets/images/mapIcon.png')}
                style={styles.menuIcon}
              />
              <Text>map</Text>
            </View>
            <View style={[styles.menuItem, { visibility: 'hidden' }]}>
              <Image
                source={require('../assets/images/avatarIcon.png')}
                style={styles.menuIcon}
              />
              <Text>avatar</Text>
            </View>
            <View style={[styles.menuItem, { visibility: 'hidden' }]}>
              <Image
                source={require('../assets/images/bobFriends.png')}
                style={styles.menuIcon}
              />
              <Text>blobs befriended</Text>
            </View>
          </View>
        </View>
      </View>

      <Image
        source={require('../assets/images/clouds.png')}
        style={styles.clouds}
      />
      <Image
        source={require('../assets/images/map2Path.png')}
        style={styles.mapPath}
      />
      <Image
        source={require('../assets/images/blob4.png')}
        style={styles.blobs}
      />
      <Image
        source={require('../assets/images/blob5.png')}
        style={styles.blobs}
      />

      <View style={styles.arrows}>
        <TouchableOpacity>
          <Image
            source={require('../assets/images/leftArrow.png')}
            style={styles.arrow}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbarContainer: {
    flexDirection: 'row',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  menu: {
    flexDirection: 'row',
    color: '#567657',
  },
  menuItem: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  menuIcon: {
    width: 25,
    height: 25,
  },
  clouds: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  mapPath: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  blobs: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  arrows: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  arrow: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});

export default App;