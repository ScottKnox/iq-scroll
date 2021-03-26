import React, {useEffect, useState} from 'react';
import AnimalIcon from '../../assets/images/animal-icon.png';
import { ActivityIndicator, StyleSheet, Dimensions, FlatList, Text, View, Image} from 'react-native';
import FactView from '../Component/FactView';

const ScrollScreen = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [apiFacts, setApiFacts] = useState([]);

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
                keyExtractor={fact => fact.id}
                data={apiFacts}
                renderItem={({item}) => {
                console.log(item);
                    return (
                        <FactView image={item.imageUrl} bodyText={item.bodyText} />
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