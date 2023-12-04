import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App'
import { WebView } from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';
import CallapiTV from '../CallapiTV'

const Tab = createBottomTabNavigator();

//Form Input dari github pages
const forminput = 'https://ganispermata.github.io/pgpbl-12/';

//Peta web dari github pages
const webmap = 'https://ganispermata.github.io/pgpbl-12/map.html';

function HomeScreen() {
    return (
        <ImageBackground source={require('../peta/tema6.jpg')}>
        <ScrollView>
            <Text style={styles.title}>TOURIST VILLAGE APPLICATION</Text>
            <Text style={{ textAlign: 'center'}}>ToVia</Text>
            <View style={styles.contain}>
            <Text style={{ textAlign: 'justify',color:'#1B3D6C', margin: 3 }}>Aplikasi ini memberikan kemudahan bagi turis lokal maupun turis mancanegara
                untuk dapat mengetahui informasi tentang desa wisata yang ada di Provinsi Jawa Tengah dan Sekitarnya </Text>
            </View>
            <View style={styles.container}>
                <Image style={styles.image}
                    source={require('AwesomeProject/peta/DesaWisata2.jpg')} />
            </View>
            <View style={styles.container}>
                <Text style={{ textAlign: 'justify',color:'#1B3D6C', margin: 10 }}>Desa wisata adalah komunitas atau masyarakat yang terdiri dari penduduk 
                suatu wilayah terbatas yang bisa saling berinteraksi secara langsung di bawah sebuah pengelolaan dan memiliki 
                kepedulian, serta kesadaran untuk berperan bersama sesuai keterampilan dan kemampuan masing-masing, memberdayakan 
                potensi secara kondusif bagi tumbuh dan berkembangnya kepariwisataan di wilayahnya. Desa wisata menempatkan 
                komunitas atau masyarakat sebagai subjek atau pelaku utama dalam pembangunan kepariwisataan, kemudian memanfaatkannya 
                bagi kesejahteraan masyarakat. Dalam aktivitas sosialnya, kelompok swadaya dan swakarsa masyarakat berupaya untuk 
                meningkatkan pemahaman kepariwisataan; mewadahi peran dan partisipasi masyarakat dalam pembangunan kepariwisataan 
                di wilayahnya; meningkatkan nilai kepariwisataan serta memberdayakannya bagi kesejahteraan masyarakat. Sebagai pelaku utama, 
                komunitas atau masyarakat berupaya meningkatkan potensi pariwisata atau daya tarik wisata yang ada di wilayahnya. 
                Selanjutnya, komunitas atau masyarakat menyiapkan diri sebagai tuan rumah yang baik bagi para wisatawan ketika berkunjung. 
                Seluruh kegiatan yang dilakukan oleh komunitas atau masyarakat di desa wisata, memiliki tujuan untuk meningkatkan kesejahteraan 
                ekonomi masyarakat dengan mendayagunakan aset dan potensi yang dimiliki.</Text>
            </View>
            <View style={styles.container}>
                <Text style={{ textAlign: 'justify',color:'#1B3D6C' }}>Stack:</Text>
                <Text style={{ textAlign: 'justify',color:'#1B3D6C' }}>1. React Native</Text>
                <Text style={{ textAlign: 'justify',color:'#1B3D6C' }}>2. HTML</Text>
                <Text style={{ textAlign: 'justify',color:'#1B3D6C' }}>3. LeafletJS</Text>
                <Text style={{ textAlign: 'justify',color:'#1B3D6C' }}>4. Google Sheets</Text>
                <Text style={{ textAlign: 'justify',color:'#1B3D6C' }}>5. App Script</Text>
                <Text style={{ textAlign: 'justify',color:'#1B3D6C' }}>6. FontAwesome5</Text>
                <Text style={{ textAlign: 'justify',color:'#1B3D6C' }}>7. GitHub</Text>
            </View>
        </ScrollView>
        </ImageBackground>
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

function CatalogScreen() {
    return (
        <View>
            <CallapiTV />
        </View>
    );
}

function MyTabs() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false,
            tabBarStyle: {backgroundColor: '#ffffff', marginBottom: 10, marginRight: 10, marginLeft:10, borderRadius: 40}, }}  >
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
                <Tab.Screen name="Catalog" component={CatalogScreen} options={{
                    tabBarLabel: 'Catalog',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="list-ul" color={color} size={size} />
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
        color: '#0C356A',
    },
    container: {
        marginHorizontal: 10,
        backgroundColor: '#ECF9FF',
        marginTop: 20,
        padding: 20,
    },
    contain: {
        marginHorizontal: 10,
        backgroundColor: '#ECF9FF',
        marginTop: 5,
        padding: 10,
    }
});
