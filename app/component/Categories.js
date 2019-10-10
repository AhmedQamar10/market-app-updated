import React, { Component } from "react";
import { Text, Image, TouchableOpacity, View, StyleSheet, Alert, FlatList } from "react-native";
import { Card } from 'react-native-elements';
import { connect } from "react-redux";
import ImageSlider from 'react-native-image-slider';
import Menu from 'react-native-vector-icons/Feather';
import Shoppingcart from 'react-native-vector-icons/AntDesign';
import Search from 'react-native-vector-icons/FontAwesome';

class FlatListItem extends Component {
    render() {
        return (
            <TouchableOpacity key={this.props.item.id}
            onPress={() => this.props.navigation.navigate({
                routeName: 'category_details',
                params: {
                    ProductsParam: this.props.item.products,
                    CategoryNameParam: this.props.item.name,
                    CategoryImageParam: this.props.item.category_img,
                    CategoryIDParam: this.props.item.id
                }
            })
            }>
                <Card containerStyle={style.card}>
                    <Image source={{ uri: this.props.item.category_img }}
                        style={style.image}
                    />
                    <Text style={style.text_name_category}>
                        {this.props.item.name}
                    </Text>
                </Card>
            </TouchableOpacity>);
    }
}

class Categories extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: (
                <TouchableOpacity style={{ paddingLeft: 10 }}
                onPress={() => navigation.openDrawer()}>
                    <Menu size={30} name='menu' />
                </TouchableOpacity>
            ),
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
        const { data } = this.props
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.8 }}>
                    <ImageSlider autoPlayWithInterval={3000}
                        images={[
                            require('../images/Capture4.png'),
                            require('../images/Capture5.png'),
                            require('../images/Capture6.png'),
                            require('../images/Capture7.png'),
                        ]} />
                </View>
                <FlatList
                    data={data} numColumns={2} style={{ backgroundColor: '#ecf0f1', flex: 1 }}
                    columnWrapperStyle={{ flex: 1, justifyContent: 'space-around' }}
                    renderItem={({ item }) => {
                        return <FlatListItem item={item} navigation={this.props.navigation} />;
                    }}
                    keyExtractor={(item) => item.id}
                />
            </View>
        );
    }
}
const mapStateToProps = (state) => ({
    data: state.getCategories.info.data
});
export default connect(mapStateToProps)(Categories)

const style = StyleSheet.create({
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_list_categories: {
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 25,
        paddingTop: 40
    },
    card: {
        borderRadius: 20
    },
    image: {
        height: 100,
        width: 150,
    },
    text_name_category: {
        paddingTop: 10,
        alignSelf: 'center'
    }
});
