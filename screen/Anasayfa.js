import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Anasayfa({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
        Ana Ekran
      </Text>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
          Kurslarım
        </Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
          Kurs Bilgi
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('TodoList')}
        style={{ backgroundColor: 'lightblue', padding: 10, borderRadius: 5 }} // (Opsiyonel) Stile eklemeler
      >
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
          Todo List
        </Text>
      </TouchableOpacity>
    </View>
  );
}
