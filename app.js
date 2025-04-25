import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function App() {
  const [entries, setEntries] = useState(
    days.map(() => ({
      mayaFree: false,
      microDecision: false,
      refocus: false,
      reflection: '',
      goldStar: ''
    }))
  );

  const toggle = (i, key) => {
    const newEntries = [...entries];
    newEntries[i][key] = !newEntries[i][key];
    setEntries(newEntries);
  };

  const setText = (i, key, value) => {
    const newEntries = [...entries];
    newEntries[i][key] = value;
    setEntries(newEntries);
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      {days.map((day, i) => (
        <View key={i} style={{ marginBottom: 30, padding: 10, borderWidth: 1, borderRadius: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{day}</Text>

          <Button
            title={`Maya-Free: ${entries[i].mayaFree ? 'Yes' : 'No'}`}
            onPress={() => toggle(i, 'mayaFree')}
          />
          <Button
            title={`Micro Decision: ${entries[i].microDecision ? 'Yes' : 'No'}`}
            onPress={() => toggle(i, 'microDecision')}
          />
          <Button
            title={`Refocus: ${entries[i].refocus ? 'Yes' : 'No'}`}
            onPress={() => toggle(i, 'refocus')}
          />

          <TextInput
            placeholder="Reflection..."
            value={entries[i].reflection}
            onChangeText={(v) => setText(i, 'reflection', v)}
            style={{ borderBottomWidth: 1, marginTop: 10 }}
          />
          <TextInput
            placeholder="Gold Star Moment"
            value={entries[i].goldStar}
            onChangeText={(v) => setText(i, 'goldStar', v)}
            style={{ borderBottomWidth: 1, marginTop: 10 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}
