import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';

const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
};

export default () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <ListItem item={item} />;
          }}
        />
      </SafeAreaView>
    </View>
  );
};

/*styles do scroll e caminhos das imagens*/

const SECTIONS = [
  {
    title: 'Estagiário....que a força esteja com você!',
    horizontal: true,
    data: [
      {
        key: '1',
        text: 'Item text 1',
        uri: './assets/cogumelo.png',
      },
      {
        key: '2',
        text: 'Item text 2',
        uri: './assets/flor.jpg',
      },

      {
        key: '3',
        text: 'Item text 3',
        uri: './assets/ghost.png',
      },
      {
        key: '4',
        text: 'Item text 4',
        uri: './assets/mario.jpg',
      },
      {
        key: '5',
        text: 'Item text 5',
        uri: './assets/ovodoychi.png',
      },
    ],
  },
  {
    title: '...Eu sou o seu pai...',
    data: [
      {
        key: '1',
        text: 'Item text 1',
        uri: './assets/backtofuture.jpg',
      },
      {
        key: '2',
        text: 'Item text 2',
        uri: './assets/darthvander.jpg',
      },

      {
        key: '3',
        text: 'Item text 3',
        uri: './assets/deadpool.jpg',
      },
      {
        key: '4',
        text: 'Item text 4',
        uri: './assets/goku.jpg',
      },
      {
        key: '5',
        text: 'Item text 5',
        uri: './assets/knight.jpg',
      },
    ],
  },
  {
    title: 'Con grandes poderes vem grandes repponsabilidades',
    data: [
      {
        key: '1',
        text: 'Item text 1',
        uri: './assets/mago.jpg',
      },
      {
        key: '2',
        text: 'Item text 2',
        uri: './assets/metroid.jpg',
      },

      {
        key: '3',
        text: 'Item text 3',
        uri: './assets/metroid2.jpg',
      },
      {
        key: '4',
        text: 'Item text 4',
        uri: './assets/yoda2.jpg',
      },
      {
        key: '5',
        text: 'Item text 5',
        uri: './assets/zelda.jpg',
      },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#f4f4f4',
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 200,
    height: 200,
  },
  itemText: {
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 5,
  },
});
