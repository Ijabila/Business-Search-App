import React, {useState, useEffect}from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const DetailScreen = ({navigation}) => {
    
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id')

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id);
    }, []);

    if(!result) {
        return null;
    }

    return(
        <View>
            <Text style={styles.title}>{result.name}</Text>
            <Text style={styles.subheaders}>Phone number: {result.phone}</Text>
            <Text style={styles.subheaders}>Address: {result.location.display_address}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return <Image style={styles.image} source={{uri: item}}/>
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        marginLeft: 55,
        marginBottom: 10,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 2
    },
    title: {
        fontSize: 18,
        marginVertical: 10,
        fontWeight: 'bold',
        marginLeft: 55
    },
    subheaders: {
        fontSize: 14,
        marginLeft: 55,
        marginBottom: 10
    }
});

export default DetailScreen;