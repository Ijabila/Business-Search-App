import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from './components/SearchBar';
import useYelp from '../hooks/useYelp';
import ResultList from '../screens/components/ResultList';

const SearchScreen = () => {
const [term, setTerm] = useState('');
const [searchApi, results, errorMessage] = useYelp();
const filterResultsByPrice = (price) => {
    return results.filter(result => {
        return result.price === price;
    });
}

    return(
            <View style={{flex: 1}}>
                <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
                />
                {errorMessage ? <Text>{errorMessage}</Text> : null}
                <ScrollView>
                    <ResultList title="Cost Effective" results={filterResultsByPrice('$')}/>
                    <ResultList title="Bit Pricier" results={filterResultsByPrice('$$')}/>
                    <ResultList title="Dangote" results={filterResultsByPrice('$$$')}/>
                </ScrollView>
            </View>
    );
}

const styles = StyleSheet.create({});

export default SearchScreen;