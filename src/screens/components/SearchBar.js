import 'react-native-gesture-handler';
import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ( {term, onTermChange, onTermSubmit} ) => {
    return(
            <View style={styles.backgroundStyle}>
                <Feather name="search" style={styles.iconStyle}/>
                <TextInput
                style={styles.inputStyle}
                placeholder="Search" 
                value={term}
                onChangeText={onTermChange}
                autoCapitalize='none'
                autoCorrect={false}
                onEndEditing={onTermSubmit}
                /> 
            </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: '#d9d4d4',
        height: 40,
        borderRadius: 7,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 12,
        marginBottom: 10
    },
    inputStyle: {
      fontSize: 20,
      flex: 1
    },
    iconStyle: {
      fontSize: 25,
      alignSelf: 'center',
      marginHorizontal: 10
    }
});

export default SearchBar;