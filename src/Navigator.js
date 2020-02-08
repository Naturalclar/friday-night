import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerMenu} from './Drawer';
import {FeedStack} from './FeedStack';

const Drawer = createDrawerNavigator();

function DrawerContent() {
  return <DrawerMenu />;
}

function HomeScreen() {
  return <FeedStack />;
}

export const RootNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};
