import { createStackNavigator,createAppContainer,createDrawerNavigator} from 'react-navigation';
import Categories from './component/Categories';
import CategoryDetails from './component/CategoryDetails';
import ProductDetails from './component/ProductDetails';
import sidedrawer from "./sidedrawer";

const StackNavigator = createStackNavigator({
        categories:{
            screen:Categories
        },
        category_details:{
            screen:CategoryDetails
        },
        product_details:{
            screen:ProductDetails
        }
    })
    
    const AppNavigator = createDrawerNavigator({
        categories: {
            screen: StackNavigator
        }
    }, {
            initialRouteName: 'categories',
            drawerWidth:200,
            contentComponent:sidedrawer
        })
    
    export default createAppContainer(AppNavigator);
