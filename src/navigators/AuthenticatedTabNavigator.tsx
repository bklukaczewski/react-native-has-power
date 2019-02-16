import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import { palette } from 'styles';
import { ContentListScreen } from '../screens/ContentListScreen';
import { CreateContentScreen } from '../screens/CreateContentScreen';

export interface TabBarIconProps {
  tintColor: string;
  focused: boolean;
  horizontal: boolean;
}

export const MainTabNavigator = createBottomTabNavigator(
  {
    ContentList: {
      screen: ContentListScreen,
    },
    ContentCreate: {
      screen: CreateContentScreen,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: palette.primary,
      inactiveTintColor: palette.primaryDisabled,
    },
  },
);
