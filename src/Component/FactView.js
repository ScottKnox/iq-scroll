import React from 'react';
import LikeButton from '../../assets/images/heart-button.png';
import ShareButton from '../../assets/images/fb-share.png';
import {
Text,
Dimensions,
Image,
StyleSheet,
SafeAreaView,
View,
TouchableOpacity,
ImageBackground
} from 'react-native';

const FactView = (props) => {
	return (
        <View style={styles.factView}>
            <ImageBackground style={styles.mainImage} source={{uri: props.image}}>
            <SafeAreaView style={styles.buttons}>
                <TouchableOpacity style={styles.shareButton}>
                    <Image style={styles.buttonImage} source={ShareButton}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.likeButton}>
                    <Image style={styles.buttonImage} source={LikeButton}/>
                </TouchableOpacity>
            </SafeAreaView>
            </ImageBackground>
            <View style={styles.textArea}>
            <Text style={styles.bodyText}>{props.bodyText}</Text>
            </View>
        </View>
    )};

const styles = StyleSheet.create({
    factView: {
        flex: 1,
        alignItems: 'center',
        height: Dimensions.get('window').height - 80
    },
	mainImage: {
	    flex: 1.5,
        width: '100%',
	    resizeMode: 'stretch'
	},
	buttons: {
        flex: 1,
	    flexDirection: 'row',
	    alignItems: 'flex-end',
	    height: 500,
	},
	likeButton: {
	    flex: 1,
	    alignItems: 'flex-end'
	},
	buttonImage: {
	    marginBottom: 10,
	    marginRight: 10,
	    marginLeft: 10,
	    height: 65,
	    width: 65
	},
    textArea: {
        flex: 1
    },
	bodyText: {
	    marginTop: 10,
	    marginHorizontal: 15,
	    fontSize: 22
	}
});

export default FactView;