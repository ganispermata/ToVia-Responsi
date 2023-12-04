import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App'
import { WebView } from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';

const Tab = createBottomTabNavigator();

//Form Input dari github pages
const forminput = 'https://ganispermata.github.io/pgpbl-12/';

//Peta web dari github pages
const webmap = 'https://ganispermata.github.io/pgpbl-12/map.html';

function HomeScreen() {
  return (
    <View>
        <Text style={styles.title}>APLIKASI PETA LOKASI OBJEK</Text>
        <Text style={{textAlign:'center'}}>Aplikasi ini memberikan kemudahan bagi pengguna untuk melakukan pemetaan pada jenis objek dengan tren atau topik tertentu</Text>
        <View style={styles.container}>
        <Text>Stack:</Text>
        <Text>1. React Native</Text>
        <Text>2. HTML</Text>
        <Text>3. LeafletJS</Text>
        <Text>4. Google Sheets</Text>
        <Text>5. App Script</Text>
        <Text>6. FontAwesome5</Text>
        <Text>7. GitHub</Text>
        </View>
    </View>
  );

}
function MapScreen() {
  return (
    <WebView
      source={{ uri: webmap }}
    />
  );
}
function AddDataScreen() {
  return (
    <WebView
      source={{ uri: forminput }}
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
        <Tab.Screen name="Add Data" component={AddDataScreen} options={{
          tabBarLabel: 'Add Data',
          tabBarIcon: ({ color, size }) => (
            <Fontawesome5 name="plus-circle" color={color} size={size} />
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
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  container: {
    marginHorizontal: 10,
    backgroundColor: '#ECF9FF',
    marginTop: 20,
    padding: 20,
  }
});
