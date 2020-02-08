import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

import {Feed} from './components/Feed';
import {posts} from './data';

type TwittProps = React.ComponentProps<typeof Twitt>;

function renderItem({item}: {item: TwittProps}) {
  return <Feed {...item} />;
}

function keyExtractor(item: TwittProps) {
  return item.id.toString();
}

export const FeedList = props => {
  const theme = useTheme();

  const data = posts.map(twittProps => ({
    ...twittProps,
    onPress: () =>
      props.navigation &&
      props.navigation.push('Details', {
        ...twittProps,
      }),
  }));

  return (
    <FlatList
      contentContainerStyle={{backgroundColor: theme.colors.background}}
      style={{backgroundColor: theme.colors.background}}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={() => (
        <View style={{height: StyleSheet.hairlineWidth}} />
      )}
    />
  );
};
