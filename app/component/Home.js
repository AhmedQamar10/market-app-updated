import React, { Component } from "react";
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import { categories } from '../actions/index';
import { connect } from "react-redux";
import axios from 'axios';
import { Button } from 'react-native-elements';
import Onboarding from 'react-native-onboarding-swiper';
import { UIActivityIndicator } from 'react-native-indicators';
class Home extends Component {
  state = {
    loading: true,
  }
  componentDidMount() {
    axios.get(`https://api.myjson.com/bins/87i2x`,

      // ==== OR ====> https://5bcce576cf2e850013874767.mockapi.io/task/categories
    )
      .then(data => {
        this.setState({ loading: false })
        return this.props.categories(data)
      })
  };

  render() {
    if (this.state.loading) {
      return <ImageBackground source={require('../../assets/splash.png')}
        style={{ flex: 1 }}>
        <UIActivityIndicator color={'#fff'}
          style={styles.activityIndicator} />
      </ImageBackground>
    }
    const Done = () => (
      <View style={{ paddingRight: 10 }}>
        <Button title={'Done'}
          onPress={() => this.props.navigation.navigate('categories')}
        />
      </View>
    );

    const Skip = () => (
      <View style={{ paddingLeft: 10 }}>
        <Button title={'Skip'}
          onPress={() => this.props.navigation.navigate('categories')}
        />
      </View>
    );

    const Next = ({ ...props }) => (
      <View style={{ paddingRight: 10 }}>
        <Button title={'Next'} {...props} />
      </View>
    )
    return (
      <Onboarding
        NextButtonComponent={Next}
        SkipButtonComponent={Skip}
        DoneButtonComponent={Done}
        pages={[
          {
            backgroundColor: '#ecf0f1',
            title: 'Mauris pharetra nisl eget',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nunc urna Nunc vel consequat augue Donec gravida luctus justo, eu sagittis ipsum elementum aliquet',
            image: <Image source={require('../images/Capture1.png')}
              style={{ width: 150, height: 150 }} />,
            titleStyles: { color: 'black' },
          },
          {
            backgroundColor: '#ecf0f1',
            title: 'Aliquam erat volutpat',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nunc urna Nunc vel consequat augue Donec gravida luctus justo, eu sagittis ipsum elementum aliquet',
            image: <Image source={require('../images/Capture2.png')}
              style={{ width: 150, height: 150 }} />,
            titleStyles: { color: 'black' },
          },
          {
            backgroundColor: '#ecf0f1',
            title: 'Aresh bimarst delivery',
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nunc urna Nunc vel consequat augue Donec gravida luctus justo, eu sagittis ipsum elementum aliquet",
            image: <Image source={require('../images/Capture3.png')}
              style={{ width: 150, height: 150 }} />,
            titleStyles: { color: 'black' },
          },
        ]}
      />);
  }
}

export default connect(null, { categories })(Home)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  activityIndicator: {
    flex: 1,
    paddingTop: '60%',
    justifyContent: 'space-evenly'
  },
  button: {
    marginTop: 10,
    backgroundColor: "#1B9CFC",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
    width: 100,
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 16,
    fontWeight: 'bold'
  },
});