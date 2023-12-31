import React, { Component } from 'react';
import { StyleSheet, Button, Text, View, Image, TextInput } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: 'white', flex: 1 }}>
          <View
            style={{
              marginHorizontal: 17,
              flexDirection: 'row',
              paddingTop: 15
            }}>
            <View style={{ position: 'relative', flex: 1 }}>
              <TextInput
                placeholder="Cari Layanan, Makanan, dan tujuan"
                style={{
                  borderWidth: 1,
                  borderRadius: 25,
                  borderColor: 'black',
                  height: 40,
                  fontSize: 13,
                  paddingLeft: 45,
                  paddingRight: 20,
                  backgroundColor: 'white',
                  marginRight: 18
                }}/>
              <Image
                style={{ position: 'absolute', top: 5, left: 6 }}/>
            </View>
            <View
              style={{
                width: 35,
                alignItems: 'center',
                justifyContent: 'center'
              }}>
            </View>
          </View>
        </View>
        <View
            style={{
            width: 50,
            height: 50,
            backgroundColor: 'white',
            borderWidth: 1,
            borderRadius: 50,
            position: 'absolute', top: 7, right: 7,
            }}>      
          </View>
          <Text style={{
                fontSize: 24,
                color: 'black',
                marginTop: 4,
                position: 'absolute', top: 110, left: 50,
              }}>Segernya Sama</Text>

          <Text style={{
                fontSize: 24,
                color: 'black',
                marginTop: 4,
                position: 'absolute', top: 140, left: 50,
              }}>Bebas Gula</Text>

          <Text style={{
                fontSize: 16,
                color: 'black',
                marginTop: 4,
                position: 'absolute', top: 170, left: 50,
              }}>Cobain Sprite Zero Sugar</Text>

          <Text style={{
                fontSize: 18,
                color: 'black',
                marginTop: 4,
                position: 'absolute', top: 280, left: 80,
              }}>Rp 24.223</Text>

          <Text style={{
                fontSize: 16,
                color: 'black',
                marginTop: 4,
                position: 'absolute', top: 425, left: 30,
              }}>GoRide</Text>

          <Text style={{
                fontSize: 16,
                color: 'black',
                marginTop: 4,
                position: 'absolute', top: 425, left: 130,
              }}>GoCar</Text>

<Text style={{
                fontSize: 16,
                color: 'black',
                marginTop: 4,
                position: 'absolute', top: 425, left: 230,
              }}>GoFood</Text>

<Text style={{
                fontSize: 16,
                color: 'black',
                marginTop: 4,
                position: 'absolute', top: 425, left: 330,
              }}>GoSend</Text>

<Text style={{
                fontSize: 16,
                color: 'black',
                marginTop: 4,
                position: 'absolute', top: 525, left: 30,
              }}>GoMart</Text>

<Text style={{
                fontSize: 16,
                color: 'black',
                marginTop: 4,
                position: 'absolute', top: 525, left: 120,
              }}>GoTagihan</Text>

<Text style={{
                fontSize: 16,
                color: 'black',
                marginTop: 4,
                position: 'absolute', top: 525, left: 230,
              }}>GoShop</Text>

<Text style={{
                fontSize: 16,
                color: 'black',
                marginTop: 4,
                position: 'absolute', top: 525, left: 330,
              }}>Lainnya</Text>
        <View
            style={{
            width: 400,
            height: 175,
            backgroundColor: 'lime',
            borderWidth: 1,
            borderRadius: 15,
            position: 'absolute', top: 80, left: 5,
            opacity: 0.3
            }}>
          </View>
        <View
            style={{
            width: 400,
            height: 150,
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 15,
            position: 'absolute', bottom: 0, left: 5
            }}>
        </View>
        <Text style={{
                fontSize: 26,
                color: 'black',
                marginTop: 4,
                position: 'absolute', bottom: 110, left: 200,
              }}>gofood</Text>

        <Text style={{
                fontSize: 18,
                color: 'black',
                marginTop: 4,
                position: 'absolute', bottom: 90, left: 200,
              }}>Kasih Rating ke driver?</Text>
<Text style={{
                fontSize: 12,
                color: 'black',
                marginTop: 4,
                position: 'absolute', bottom: 70, left: 200,
              }}>Domino Pizza - Dinoyo Malang</Text>
<Text style={{
                fontSize: 12,
                color: 'black',
                marginTop: 4,
                position: 'absolute', bottom: 50, left: 200,
              }}>08 Oktober 19:27</Text>
        <View
            style={{
            width: 130,
            height: 130,
            backgroundColor: 'gray',
            borderWidth: 1,
            borderRadius: 15,
            position: 'absolute', bottom: 10, left: 25,
            opacity: 0.3
            }}>
          </View>
          <View
            style={{
            width: 35,
            height: 35,
            backgroundColor: 'blue',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 25,
            position: 'absolute', top: 287, right: 30,
            opacity: 0.3
            }}>
        </View>
        <View
            style={{
            width: 35,
            height: 35,
            backgroundColor: 'blue',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 5,
            position: 'absolute', top: 287, right: 80,
            opacity: 0.3
            }}>
        </View>
        <View
            style={{
            width: 35,
            height: 35,
            backgroundColor: 'blue',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 5,
            position: 'absolute', top: 287, right: 130,
            opacity: 0.3
            }}>
        </View>
        <View
            style={{
            width: 35,
            height: 35,
            backgroundColor: 'blue',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 5,
            position: 'absolute', top: 287, left: 30,
            opacity: 0.3
            }}>
        </View>
        <View
            style={{
            width: 50,
            height: 50,
            backgroundColor: 'lime',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 15,
            position: 'absolute', top: 380, left: 30,
            opacity: 0.3
            }}>
        </View>
        <View
            style={{
            width: 50,
            height: 50,
            backgroundColor: 'lime',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 15,
            position: 'absolute', top: 380, left: 130,
            opacity: 0.3
            }}>
        </View>
        <View
            style={{
            width: 50,
            height: 50,
            backgroundColor: 'red',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 15,
            position: 'absolute', top: 380, left: 230,
            opacity: 0.3
            }}>
        </View>
        <View
            style={{
            width: 50,
            height: 50,
            backgroundColor: 'lime',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 15,
            position: 'absolute', top: 380, left: 330,
            opacity: 0.3
            }}>
        </View>
        <View
            style={{
            width: 50,
            height: 50,
            backgroundColor: 'red',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 15,
            position: 'absolute', top: 480, left: 30,
            opacity: 0.3
            }}>
        </View>
        <View
            style={{
            width: 50,
            height: 50,
            backgroundColor: 'cyan',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 15,
            position: 'absolute', top: 480, left: 130,
            opacity: 0.3
            }}>
        </View>
        <View
            style={{
            width: 50,
            height: 50,
            backgroundColor: 'red',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 15,
            position: 'absolute', top: 480, left: 230,
            opacity: 0.3
            }}>
        </View>
        <View
            style={{
            width: 50,
            height: 50,
            backgroundColor: 'gray',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 15,
            position: 'absolute', top: 480, left: 330,
            opacity: 0.3
            }}>
        </View>
        <View
            style={{
            width: 375,
            height: 50,
            backgroundColor: 'gray',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 15,
            position: 'absolute', top: 280, left: 20,
            opacity: 0.2
            }}>
        </View>      
    </View>
  );
}
  

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1}}>
      <Text>Settings Screen</Text>
      <Button
        title="Go back to Home"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
export default App;