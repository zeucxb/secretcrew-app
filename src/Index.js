import React from 'react';
import {
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';

import Router from './Routes';

export default () => (
  <NavigationProvider router={Router}>
    <StackNavigation initialRoute="onboarding" />
  </NavigationProvider>
);
