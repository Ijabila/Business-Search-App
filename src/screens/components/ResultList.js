import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetails from '../components/ResultsDetails';
import {withNavigation} from 'react-navigation';

const ResultList = ({title, results, navigation}) => {
    if (!results.length){
        return null;
    }
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({item}) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('Detail', {id: item.id})}>
                        <ResultsDetails result={item}/>
                    </TouchableOpacity>
                )
            }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

export default withNavigation(ResultList);