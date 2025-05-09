import Landingpage from './components/Landingpage'
import BMI from './components/BMI'
import BMR from './components/BMR'
import Idealweight from './components/Idealweight'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
        screenOptions={{
          headerTransparent: true,
          headerTintColor: "#0d522c",
          headerTitle: '',
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen name='Home' component={Landingpage} />
        <Stack.Screen name='BMI' component={BMI}/>
        <Stack.Screen name='BMR' component={BMR}/>
        <Stack.Screen name='Idealweight' component={Idealweight}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App