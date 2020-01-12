import ViewPagerAndroid from '@react-native-community/viewpager';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {
  createNativeWrapper,
  DrawerLayoutAndroid,
} from 'react-native-gesture-handler';

const WrappedViewPagerAndroid = createNativeWrapper(ViewPagerAndroid, {
  disallowInterruption: true,
});

const Page = ({ backgroundColor, text }) => (
  <View style={[styles.page, { backgroundColor }]}>
    <Text style={styles.pageText}>{text}</Text>
  </View>
);

export default class Example extends Component {
  render() {
    const navigationView = (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>
          I'm in the Drawer!
        </Text>
      </View>
    );
    return (
      <WrappedViewPagerAndroid style={styles.container}>
        <View>
          <DrawerLayoutAndroid
            drawerWidth={200}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => navigationView}>
            <Page backgroundColor="gray" text="First 🙈" />
          </DrawerLayoutAndroid>
        </View>
        <Page backgroundColor="yellow" text="Second 🙉" />
        <Page backgroundColor="blue" text="Third 🙊" />
        <View>
          <DrawerLayoutAndroid
            drawerWidth={200}
            drawerPosition={DrawerLayoutAndroid.positions.Right}
            renderNavigationView={() => navigationView}>
            <Page backgroundColor="blue" text="Fourth 😎" />
          </DrawerLayoutAndroid>
        </View>
      </WrappedViewPagerAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  page: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageText: {
    fontSize: 21,
    color: 'white',
  },
});
