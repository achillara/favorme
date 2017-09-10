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
		title: 'Exchange',
	};

	state = {
		selected1: 'key1',
		selected2: 'key1',
		selected3: 'key1',
		color: 'red',
		mode: Picker.MODE_DIALOG,
		text: "What's da favor?",
		number: 0
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

	temp = ["foo", "barr", "baz"]
	render() {
		return (
			<ScrollView style={styles.container}>
				<View style={styles.newRequestContainer}>
					<View style={{flex: 2, alignItems:'center', flexDirection: 'column'}}>
						<TextInput
							style={{width: 200, height: 40, backgroundColor: '#fff', borderColor: 'gray', borderWidth: 1}}
							onChangeText={(text) => this.setState({text})}
							value={"Recipient"}
						/>
						<TextInput
							style={{width: 200, height: 40, backgroundColor: '#fff', borderColor: 'gray', borderWidth: 1}}
							onChangeText={(text) => this.setState({text})}
							value={this.state.text}
						/>
						<TextInput
							style={{width: 200, height: 40, backgroundColor: '#fff', borderColor: 'gray', borderWidth: 1}}
							onChangeText={(text) => this.setState({text})}
							value={"Amount?"}
						/>

					</View>
					<View style={{flex: 2, alignItems: 'center', flexDirection: 'row'}}>
						<View style={styles.box}>
							<TouchableOpacity>
								<Image
								source={require('../images/request-button.png')}	
								style={{flex:1, height: 100, width: 120, resizeMode: 'contain'}}
								/>
							</TouchableOpacity>	
						</View>
						<View style={styles.box}>
							<TouchableOpacity>
								<Image
								source={require('../images/offer-button.png')}
								style={{flex:1, height: 100, width: 120, resizeMode: 'contain'}}
								/>
							</TouchableOpacity>	
						</View>
					</View>
				</View>
<<<<<<< HEAD
				<View  style={styles.container}>


=======
				<View style={{flex: 2, alignItems:'center'}}>
					<Picker
						style={styles.picker}
						selectedValue={this.state.selected2}
						onValueChange={this.onValueChange.bind(this, 'selected2')}
						mode="dropdown"
					>
						<Picker.Item label="Bill" value="java" />
						<Picker.Item label="Nelson" value="key1"/>
						<Picker.Item label="Jessica" value="key1"/>
						<Picker.Item label="Mike" value="key1"/>
						<Picker.Item label="Carly" value="key1"/>
						<Picker.Item label="Kim" value="key1"/>
						<Picker.Item label="Justine" value="key1"/>
						<Picker.Item label="George" value="key1"/>
						<Picker.Item label="Walter" value="key1"/>
					</Picker>
				</View>
				<View style={{flex: 2, alignItems:'center'}}>
					<TextInput
						placeholder="   What's da favor??"
						style={styles.textField}
						onChangeText={(text) => this.setState({text})}
						value={this.state.text}
					/>
				</View>
				<View style={{flex: 2, alignItems:'center'}}>
					<TouchableOpacity onPress={() => Alert.alert(
            'You asked to \'' + this.state.text+'\'',
            'They Will Be Notified Shortly')}>
						<Image
							source={require('../images/submit-button.png')}
							style={{flex:1, height: 100, width:250, resizeMode: 'contain'}}
						/>
					</TouchableOpacity>
>>>>>>> 698b4aa53c3925491a1599f4857e033b68077a84
				</View>
			</ScrollView>
			);
	}
}

const styles = StyleSheet.create({
	newRequestContainer: {
	  borderRadius: 60,
	  borderWidth: 5,
	  borderColor: 'gray',
	},
	container: {
		flex: 1,
		paddingTop: 15,
		backgroundColor: 'lightgreen',
	},
	box: {
		flex: 1,
		paddingTop: 20,
		marginTop: 15,
		marginBottom: 15,
		alignItems: 'center',
	},
	picker: {
		width: 250,
<<<<<<< HEAD
	}
=======
	},
	textField: {
		height: 40,
		width: 250,
		borderColor: 'gray',
		borderWidth: 1,
		backgroundColor: '#fff',
		borderRadius: 5
	},
>>>>>>> 698b4aa53c3925491a1599f4857e033b68077a84
});


