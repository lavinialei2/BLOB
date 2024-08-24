import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Image
          source={require('../../assets/images/homeIcon.png')}
          style={styles.menuIcon}
        />

        <View style={styles.menu}>
          <View style={[styles.menuItem, { visibility: 'hidden' }]}>
            <Image
              source={require('../../assets/images/mapIcon.png')}
              style={styles.menuIcon}
            />
            <Text>map</Text>
          </View>
          <View style={[styles.menuItem, { visibility: 'hidden' }]}>
            <Image
              source={require('../../assets/images/avatarIcon.png')}
              style={styles.menuIcon}
            />
            <Text>avatar</Text>
          </View>
          <View style={[styles.menuItem, { visibility: 'hidden' }]}>
            <Image
              source={require('../../assets/images/homeIcon.png')}
              style={styles.menuIcon}
            />
            <Text>blobs befriended</Text>
          </View>
        </View>
      </View>

      <ScrollView style={{ flex: 1 }}>
        <View style={styles.quote}>
          <Text style={styles.topQuote}>"You are a gift to all who know you,</Text>
          <Text style={styles.bottomQuote}>whether or not they realize it."</Text>
        </View>

        <View style={styles.mainContainer}>
          <Image
            source={require('../../assets/images/blob_state_0.png')}
            style={styles.leftImage}
            resizeMode="contain"
          />
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/images/heart_line.png')}
              style={styles.shelfImage}
              resizeMode="contain"
            />
            <View style={styles.inventoryGrid}>
              <View style={styles.inventoryItem}>
                <Image
                  source={require('../../assets/images/watering_can.png')}
                  style={styles.shelfItem}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.inventoryItem}>
                <Image
                  source={require('../../assets/images/mirror.png')}
                  style={styles.shelfItem}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.inventoryItem}>
                <Image
                  source={require('../../assets/images/puzzle_piece.png')}
                  style={styles.shelfItem}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.inventoryItem}>
                <Image
                  source={require('../../assets/images/paintbrush.png')}
                  style={styles.shelfItem}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.inventoryItem}>
                <Image
                  source={require('../../assets/images/friendship_bracelet.png')}
                  style={styles.shelfItem}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  quote: {
    marginTop: 20,
    alignItems: 'center',
  },
  topQuote: {
    fontSize: 18,
    fontFamily: 'DynaPuff',
    textAlign: 'center',
  },
  bottomQuote: {
    fontSize: 18,
    fontFamily: 'DynaPuff',
    textAlign: 'center',
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  leftImage: {
    width: 150,
    height: 150,
    marginRight: 20,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  shelfImage: {
    width: '100%',
    height: 50,
  },
  inventoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  inventoryItem: {
    width: 60,
    height: 60,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shelfItem: {
    width: 50,
    height: 50,
  },
});

export default App;