import React from 'react';
import { View } from 'react-native';
import { H2 } from 'nachos-ui';

import Button from '../../components/Button';
import ColumnView from '../../components/views/ColumnView';
import Logo from '../../components/Logo';

export default class Login extends React.PureComponent {
  handleLogin = () => {

  }

  render() {
    return (
      <ColumnView style={{ backgroundColor: '#333333' }}>
        <ColumnView style={{ alignItems: 'center', justifyContent: 'center' }} >
          <Logo animated />
        </ColumnView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
          <Button facebook title={'Entrar com o facebook'} />
        </View>
      </ColumnView>
    );
  }
}
