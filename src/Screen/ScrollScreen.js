import React, {useEffect, useState} from 'react';
import AnimalIcon from '../../assets/images/animal-icon.png';
import { ActivityIndicator, StyleSheet, Dimensions, FlatList, Text, View, Image} from 'react-native';
import FactView from '../Component/FactView';

const ScrollScreen = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [apiFacts, setApiFacts] = useState([]);
    const facts = [
        {id: "1", image: require("../../assets/images/alligator.jpg"), bodyText: "The temperature of an alligator’s nest determines what gender the offspring will be. Females are produced when the temps are below 82.4 degrees Fahrenheit and males are produced at temps above 91.4 degrees Fahrenheit. A temp of 87.8 will produce an even number of males and females"},
        {id: "2", image: require("../../assets/images/girafee.jpg"), bodyText: "Due to the fact Giraffes tongues are out so frequently, grazing on vegetation, they have evolved a blueish/black colour, ensuring they don’t burn under the African sun!"}
    ];

    useEffect(() => {
      fetch('http://192.168.1.130:8080/facts')
        .then((response) => response.json())
        .then((json) => setApiFacts(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

	return (
		<View style={styles.container}>
            {isLoading ? <ActivityIndicator/> : (<FlatList
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height - 80}
                snapToAlignment={"start"}
                decelerationRate={"fast"}
                keyExtractor={fact => fact.factId}
                data={apiFacts}
                renderItem={({item}) => {
                console.log(item);
                    return (
                        <FactView image={item.factImageUrl} bodyText={item.factBodyText} />
                    );
                }}
            />
            )}
            <View style={styles.navPane}>
                <Text style={styles.categoryText}>Animals</Text>
                <Image style={styles.categoryImage} source={AnimalIcon}/>
            </View>
		</View>
)};

const styles = StyleSheet.create({
	container: {
	    flex: 1
    },
	navPane: {
	    height: 80,
	    flexDirection: 'row',
	    justifyContent: 'flex-end',
	    alignItems: 'center',
	    backgroundColor: '#2D2D34',
	    paddingBottom: 10
	},
	categoryImage: {
	    marginRight: 10,
	    marginLeft: 10,
	    height: 65,
	    width: 65,
	},
	categoryText: {
	    fontSize: 26,
	    color: 'white'
    }
});

export default ScrollScreen;