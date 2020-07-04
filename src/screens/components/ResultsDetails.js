import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetails = ({result}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.Image} source={{uri: result.image_url}} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} stars, {result.review_count} reviews.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Image: {
        width: 250,
        height: 150,
        borderRadius: 5,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
    },
    container: {
        marginLeft: 15
    }
})

export default ResultsDetails;