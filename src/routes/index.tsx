import {NavigationContainer} from '@react-navigation/native'
import {AppRoutes} from './app.routes'
export function Routes() {
    return (
        <NavigationContainer independent={true}>
            <AppRoutes />
        </NavigationContainer>
    
    )
}