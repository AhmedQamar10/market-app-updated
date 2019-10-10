import React, { Component } from "react";
import { Text, Image, TouchableOpacity, View, StyleSheet, Alert, FlatList } from "react-native";
import { Card } from 'react-native-elements';
import Shoppingcart from 'react-native-vector-icons/AntDesign';
import Search from 'react-native-vector-icons/FontAwesome';
import { connect } from "react-redux";
import { Col, Grid } from "react-native-easy-grid";
import Checkcircle from 'react-native-vector-icons/FontAwesome';

class FlatListItem extends Component {
  state = {
    logo: 'minus-circle',
    check: false,
    iconColor: '#b2bec3',
    AlertName: null
  };

  render() {
    return (
      <TouchableOpacity key={this.props.item.id}
        onPress={() => this.props.navigation.navigate({
          routeName: 'product_details',
          params: {
            ProductNameParam: this.props.item.name
          }
        })
        }>
        <Card containerStyle={style.card}>
          <Image source={{ uri: this.props.item.product_img }}
            style={style.cardImage}
          />
          <Grid>
            <Col>
              <Text style={style.text_name_category}>
                {this.props.item.name}
              </Text>
              <Text style={style.text_name_category}>
                {this.props.item.weight}
              </Text>
              <Text style={style.text_name_category}>
                {this.props.item.price}
              </Text>
            </Col>
            <Col style={{ alignSelf: 'center', position: 'absolute', right: 30 }}>
              <TouchableOpacity onPress={() =>
                this.state.check === false ?
                  this.setState({
                    logo: 'check-circle', check: true, iconColor: '#ff6868',
                    AlertName: Alert.alert('', this.props.item.name + ' Added')
                  })
                  : this.setState({
                    logo: 'minus-circle', check: false, iconColor: '#b2bec3',
                    AlertName: Alert.alert('', this.props.item.name + ' Deleted')
                  })
              }>
                <Checkcircle name={this.state.logo}
                  color={this.state.iconColor} size={30} />
                {/*minus-circle #b2bec3 
            check-circle #ff6868*/}
              </TouchableOpacity>
            </Col>
          </Grid>
        </Card>
      </TouchableOpacity>);
  }
}

class CategoryDetails extends Component {

  static navigationOptions = () => {
    return {
      headerRight: (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{ paddingRight: 10 }}
            onPress={() => Alert.alert('', 'search')}>
            <Search size={28} name='search' />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ paddingRight: 10 }}
            onPress={() => Alert.alert('', 'cart')}>
            <Shoppingcart size={30} name='shoppingcart' />
          </TouchableOpacity>
        </View>
      )
    }
  }
  render() {
    const products = this.props.navigation.getParam('ProductsParam')
    const category_image = this.props.navigation.getParam('CategoryImageParam')
    const category_name = this.props.navigation.getParam('CategoryNameParam')
    return (
      <View style={{ flex: 1 }}>
        <Image source={{ uri: category_image }}
          style={style.image} />
        <View style={{backgroundColor:'#ecf0f1'}}>
        <Text style={style.text_list_categories}>List {category_name}</Text>
        </View>
        <FlatList
          data={products} numColumns={2} style={{ backgroundColor: '#ecf0f1', flex: 1 }}
          columnWrapperStyle={{ flex: 1, justifyContent: 'space-around' }}
          renderItem={({ item }) => {
            return <FlatListItem item={item} navigation={this.props.navigation} />;
          }}
          keyExtractor={(item) => item.id}
        />
        <View style={style.footer_view}>
          <TouchableOpacity style={style.footer_button}
            onPress={() => Alert.alert('', 'Sort by')}>
            <Text style={style.footer_text}>Sort by</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.footer_button}
            onPress={() => Alert.alert('', 'Filter')}>
            <Text style={style.footer_text}>Filter</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.getCategories.info.data
});
export default connect(mapStateToProps)(CategoryDetails)

const style = StyleSheet.create({
  footer_view: {
    backgroundColor: '#ecf0f1',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  footer_text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18
  },
  footer_button: {
    padding: 15,
    width: '50%',
    backgroundColor: '#ff6868'
  },
  text_list_categories: {
    alignSelf: 'center',
    fontSize: 25,
    fontWeight:"bold"
  },
  card: {
    backgroundColor: '#f5f6fa',
    borderRadius: 20
  },
  image: {
    flex: 0.5,
  },
  cardImage: {
    height: 90,
    width: 150,
  },
  text_name_category: {
    paddingTop: 10,
  }
});