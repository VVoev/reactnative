import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ListItem from './src/components/ListItem/ListItem';

export default class App extends React.Component {

  state = {
    placeName: '',
    places: []
  }

  changeTextHandler = (val) => {
    this.setState({ placeName: val })
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      }
    })
  }
  render() {

    const placesOutput = this.state.places.map((place, index) => {
      return <ListItem key={index} placeName={place} />
    })
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            placeholder="An awesome place"
            value={this.state.placeName}
            onChangeText={this.changeTextHandler}></TextInput>
          <Button title="Add" onPress={this.placeSubmitHandler} styles={styles.placeButton} />
        </View>
        <View styles={styles.listContainer}>{placesOutput}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%'
  }
});
