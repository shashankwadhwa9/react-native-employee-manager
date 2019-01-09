import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

class App extends Component {
    render() {
        return (
            <View>
                <Text>
                    Hello!
                </Text>
            </View>
        );
    }
}

export default App;
