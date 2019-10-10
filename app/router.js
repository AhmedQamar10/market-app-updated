import { createStackNavigator,createAppContainer} from 'react-navigation';
import Home from './component/Home';
import Router2 from './router2'
const AppNavigator = createStackNavigator({
        home: {
            screen: Home,
            navigationOptions: {
                header: null,
            },
        },
        router2:{
            screen:Router2,
            navigationOptions: {
                header: null,
            },
        }
    })
    
export default  createAppContainer(AppNavigator);
