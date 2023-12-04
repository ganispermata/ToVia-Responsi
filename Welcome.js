import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const WelcomPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require('AwesomeProject/peta/DesaWisata6.jpg')} // Ganti dengan path gambar yang sesuai
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.overlay} />

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Selamat Datang Tourizt!</Text>
        <Text style={styles.subtitle}>Aplikasi Persebaran Desa Wisata 
        di Jawa Tengah dan Sekitarnya</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('ToVia');
          }}>
          <Text style={styles.buttonText}>Mulai</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Ubah nilai alpha sesuai kebutuhan
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    padding: 20,
  },
  button: {
    backgroundColor: 'red',
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default WelcomPage;