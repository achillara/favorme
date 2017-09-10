import React, { Component } from 'react';
import {
	ScrollView, 
	TextInput, 
	Picker, 
	StyleSheet,
	Text, 
	Image, 
	TouchableOpacity, 
	TouchableWithoutFeedback,
	View,  
	ListView,
 	Alert,
 } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

const Item = Picker.Item;

export default class ExchangeScreen extends Component {
	
	static navigationOptions = {
		title: <Image
        source={require('../images/logo.png')}
		style={{resizeMode: 'contain', width:100,height:50, marginTop:5}}		
      />,
	};

	state = {
		selected1: 'key1',
		selected2: 'key1',
		selected3: 'key1',
		color: 'red',
		mode: Picker.MODE_DIALOG,
		recipient: "",
		favor: "",
		amount: "",
		number: 0,
		offerPath: require('../images/offer-button.png'),
		requestPath : require('../images/request-button.png'),
		verb : ""
	};	

	changeMode () {
		const newMode = this.state.mode === Picker.MODE_DIALOG
		? Picker.MODE_DROPDOWN
		: Picker.MODE_DIALOG;
		this.setState({mode: newMode});
	}

	onValueChange (key, value) {
		const newState = {};
		newState[key] = value;
		this.setState(newState);
	}

	changeButton(name) {
		if (name === 'offer'){
			this.state.offerPath = require('../images/offer-button-active.png');
			this.state.requestPath = require('../images/request-button.png');
			this.state.verb = "offered"
		}
		else{
			this.state.offerPath = require('../images/offer-button.png');
			this.state.requestPath = require('../images/request-button-active.png');
			this.state.verb = "requested"
		}
	}

	temp = ["foo", "barr", "baz"]
	render() {
		return (
			<ScrollView style={styles.container}>
				<View style={styles.newRequestContainer}>
					<View style={{flex: 2, flexDirection: 'row'}}>
						<View style={styles.box}>
							<TouchableOpacity onPress={() => {this.changeButton('request')}}>
								<Image
								source={this.state.requestPath}	
								style={{flex:1, height: 100, width: 120, marginRight: -60, resizeMode: 'contain'}}
								/>
							</TouchableOpacity>	
						</View>
						<View style={styles.box}>
							<TouchableOpacity onPress= {() => {this.changeButton('offer')}}>
								<Image
								source={this.state.offerPath}
								style={{flex:1, height: 100, width: 120, resizeMode: 'contain', marginLeft: -60}}
								/>
							</TouchableOpacity>	
						</View>
					</View>
					<View style={{flex: 2, alignItems:'center', flexDirection: 'column'}}>
						<TextInput
							style={styles.textField}
							onChangeText={(recipient) => this.setState({recipient})}
							placeholder={"  Recipient"}
							value={this.state.recipient}
						/>
						<TextInput
							style={styles.textField}
							onChangeText={(favor) => this.setState({favor})}
							placeholder ={"  What's da favor?"}
							value={this.state.favor}
						/>
						<TextInput
							style={styles.textField}
							onChangeText={(amount) => this.setState({amount})}
							placeholder={"  Amount?"}
							value={this.state.amount}
						/>

					</View>
				<View style={{flex: 2, alignItems:'center'}}>
					<TouchableOpacity onPress={() => Alert.alert(
			            'You ' + this.state.verb + " " + this.state.recipient+ ' to ' +'\'' + 
			            this.state.favor+'\' for ' + this.state.amount + ' tokens', 'They Will Be Notified Shortly')}>
						<Image
							source={require('../images/submit-button.png')}
							style={{flex:1, height: 100, width:250, resizeMode: 'contain'}}
						/>
					</TouchableOpacity>
				</View>
				</View>
			</ScrollView>
			);
	}
}

const styles = StyleSheet.create({
	newRequestContainer: {
	},
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	box: {
		flex: 1,
		paddingTop: 10,
		marginTop: 15,
		marginBottom: 0,
		alignItems: 'center',
	},
	picker: {
		width: 250,
	},
	textField: {
		height: 40,
		width: 250,
		borderColor: 'gray',
		borderWidth: 1,
		backgroundColor: '#fff',
		borderRadius: 5,
		margin: 5
	},
});


