import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App'
import { WebView } from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';
import Countnumber from '../Countnumber';
import Callapi from '../Callapi';

const webmap = require('../peta/map.html');

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <ScrollView>
      <Text style={styles.title}>MyMaps</Text>
      <View style={styles.listitems}>
        <Image source={require('../peta/peta1.png')} style={styles.image} />
        <Text style={styles.caption}>Peta Ekosistem Mangrove Wilayah Segaraanakan Cilacap</Text>
      </View>
      <View style={styles.listitems}>
        <Image source={require('../peta/peta2.png')} style={styles.image} />
        <Text style={styles.caption}>Peta Tutupan Lahan Metode Supervised Classification</Text>
      </View>
      <View style={styles.listitems}>
        <Image source={require('../peta/peta3.png')} style={styles.image} />
        <Text style={styles.caption}>Peta Transformasi Vegetasi ARVI Wilayah Segaraanakan Cilacap</Text>
      </View>
      <View style={styles.listitems}>
        <Image source={require('../peta/peta4.png')} style={styles.image} />
        <Text style={styles.caption}>Peta Transformasi Vegetasi EVI Wilayah Segaraanakan Cilacap</Text>
      </View>
      <View style={styles.listitems}>
        <Image source={require('../peta/peta5.png')} style={styles.image} />
        <Text style={styles.caption}>Peta Transformasi Vegetasi GCI Wilayah Segaraanakan Cilacap</Text>
      </View>
      <View style={styles.listitems}>
        <Image source={require('../peta/peta6.png')} style={styles.image} />
        <Text style={styles.caption}>Peta Transformasi Vegetasi NDVI Wilayah Segaraanakan Cilacap</Text>
      </View>
      <View style={styles.listitems}>
        <Image source={require('../peta/peta7.png')} style={styles.image} />
        <Text style={styles.caption}>Peta Transformasi Vegetasi SAVI Wilayah Segaraanakan Cilacap</Text>
      </View>
    </ScrollView>
  );

}
function MapScreen() {
  return (
    <WebView
      source={ webmap }
    />
  );
}

function ProfileScreen() {
  return (
    <View>
      <Portofolio />
    </View>
  );
}

function MahasiswaScreen() {
  return (
    <View>
      <Getjsonfile />
    </View>
  );
}

function CountnumberScreen() {
  return (
    <View>
      <Countnumber />
    </View>
  );
}

function CallapiScreen() {
  return (
    <View>
      <Callapi />
    </View>
  );
}

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}  >
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Fontawesome5 name="home" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen name="Map" component={MapScreen} options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ color, size }) => (
            <Fontawesome5 name="map-marked-alt" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Fontawesome5 name="user-circle" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen name="Mahasiswa" component={MahasiswaScreen} options={{
          tabBarLabel: 'Mahasiswa',
          tabBarIcon: ({ color, size }) => (
            <Fontawesome5 name="users" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen name="Countnumber" component={CountnumberScreen} options={{
          tabBarLabel: 'Countnumber',
          tabBarIcon: ({ color, size }) => (
            <Fontawesome5 name="stopwatch" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen name="Callapi" component={CallapiScreen} options={{
          tabBarLabel: 'Callapi',
          tabBarIcon: ({ color, size }) => (
            <Fontawesome5 name="id-card" color={color} size={size} />
          ),
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'stretch'
  },
  listitems: {
    padding: 20,
    alignItems: 'center'
  },
  caption: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  title: {
    fonstsize: 20,
    fontWeight: 'center',
    textAlign: 'center',
    marginTop: 10,
  }
});
