import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

class ProductDetails extends Component {

  render() {
    const product_name = this.props.navigation.getParam('ProductNameParam')
    return (
      <View style={style.container}>
        <Text style={style.text_product_name}>
          {product_name} Detail
          </Text>
      </View>
    );
  }
}
export default ProductDetails

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text_product_name: {
    fontSize: 25,
  }
});
