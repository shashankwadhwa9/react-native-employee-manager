import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from '@firebase/app';
import reducers from './reducers';
import {
    firebaseApiKey,
    firebaseAuthDomain,
    firebaseDatabaseURL,
    firebaseProjectId,
    firebaseStorageBucket,
    firebaseMessagingSenderId
} from './settings.json';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: firebaseApiKey,
            authDomain: firebaseAuthDomain,
            databaseURL: firebaseDatabaseURL,
            projectId: firebaseProjectId,
            storageBucket: firebaseStorageBucket,
            messagingSenderId: firebaseMessagingSenderId
        });
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello!
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;
