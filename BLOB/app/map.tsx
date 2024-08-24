import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface MenuItemProps {
  id: string;
  source: any;
  text: string;
  visibility: boolean;
  onPress?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ id, source, text, visibility, onPress }) => (
  <TouchableOpacity
    style={[styles.menuItem, { visibility: visibility ? 'visible' : 'hidden' }]}
    onPress={onPress}
  >
    <Image source={source} style={styles.menuIcon} />
    <Text>{text}</Text>
  </TouchableOpacity>
);

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.navbar}>
          <View>
            <Image
              source={require('../assets/images/homeIcon.png')}
              style={styles.menuIcon}
            />
          </View>
    
          <View style={styles.menu}>
            <MenuItem
              id="menuMap"
              source={require('../assets/images/mapIcon.png')}
              text="map"
              visibility={false}
            />
            <MenuItem
              id="menuAvatar"
              source={require('../assets/images/avatarIcon.png')}
              text="avatar"
              visibility={false}
            />
            <MenuItem
              id="menuBlobs"
              source={require('../assets/images/bobFriends.png')}
              text="blobs befriended"
              visibility={false}
            />
          </View>
        </View>
      </View>

      <View>
        <Image
          source={require('../assets/images/clouds.png')}
          style={styles.clouds}
        />
      </View>
      <View>
        <Image
          source={require('../assets/images/mapPath.png')}
          style={styles.mapPath}
        />
      </View>
      <View>
        <Image
          source={require('../assets/images/blob1.png')}
          style={styles.blob}
        />
      </View>
      <View>
        <Image
          source={require('../assets/images/blob2.png')}
          style={styles.blob}
        />
      </View>
      <View>
        <Image
          source={require('../assets/images/blob3.png')}
          style={styles.blob}
        />
      </View>

      <View style={styles.arrows}>
        <TouchableOpacity>
          <Image
            source={require('../assets/images/rightArrow.png')}
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
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  menu: {
    flexDirection: 'row',
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
  blob: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  arrows: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  arrow: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});

export default App;