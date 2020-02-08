import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Appbar, Avatar, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native';

import {FeedList} from './FeedList';
import {Details} from './Details';

const Stack = createStackNavigator();

const Header = ({scene, previous, navigation}) => {
  const theme = useTheme();
  const {options} = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <Appbar.Header theme={{colors: {primary: theme.colors.surface}}}>
      {previous ? (
        <Appbar.BackAction
          onPress={navigation.goBack}
          color={theme.colors.primary}
        />
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Avatar.Image
            size={40}
            source={{
              uri: 'https://www.github.com/Naturalclar.png',
            }}
          />
        </TouchableOpacity>
      )}
      <Appbar.Content
        title={previous ? title : <Icon name="twitter" size={40} />}
      />
    </Appbar.Header>
  );
};

export const FeedStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="FeedList"
      headerMode="screen"
      screenOptions={{
        header: ({scene, previous, navigation}) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}>
      <Stack.Screen
        name="FeedList"
        component={FeedList}
        options={({route}) => {
          console.log('!@# options', {route});
          const routeName = route.state
            ? route.state.routes[route.state.index].name
            : 'Feed';
          return {headerTitle: routeName};
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{headerTitle: 'Tweet'}}
      />
    </Stack.Navigator>
  );
};
