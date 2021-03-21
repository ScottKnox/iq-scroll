import React from 'react';
import AnimalIcon from '../../assets/images/animal-icon.png';
import { StyleSheet, Dimensions, FlatList, Text, View, Image} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import FactView from '../Component/FactView';

const ScrollScreen = (props) => {
    const facts = [
        {id: "1", image: require("../../assets/images/alligator.jpg"), bodyText: "The temperature of an alligator’s nest determines what gender the offspring will be. Females are produced when the temps are below 82.4 degrees Fahrenheit and males are produced at temps above 91.4 degrees Fahrenheit. A temp of 87.8 will produce an even number of males and females"},
        {id: "2", image: require("../../assets/images/girafee.jpg"), bodyText: "Due to the fact Giraffes tongues are out so frequently, grazing on vegetation, they have evolved a blueish/black colour, ensuring they don’t burn under the African sun!"}
    ];

	return (
		<View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height - 80}
                snapToAlignment={"start"}
                decelerationRate={"fast"}
                keyExtractor={fact => fact.id}
                data={facts}
                renderItem={({item}) => {
                    return (
                        <FactView image={item.image} bodyText={item.bodyText} />
                    );
                }}
            />
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