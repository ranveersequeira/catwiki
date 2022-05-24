import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Home from './src/screens/Home';
import Cat from './src/screens/Cat'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export function APPICON() {
  return (
    <View>
      <Image
        source={{ uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAhFBMVEX///8AAAAHBwf8/PxDQ0MICAh/f3/x8fGXl5cMDAyEhITV1dUkJCRkZGQZGRmoqKjp6enDw8Pc3Ny9vb04ODj29vbs7OxAQEBLS0u3t7eSkpLR0dFeXl4dHR1TU1MVFRUqKipubm6ioqJ4eHiLi4ulpaU6OjovLy9paWlOTk5fX1+wsLDUbAQaAAAIxUlEQVR4nO1d6WLyKhA1wd1oFvc1Rm3V+v7vd7VWMyQQBlAh38352RqcE2A2hrFWq1ChQoUKFSpUqFChQoUKFf5PaF2aq/p09tOdt0yLogHiT50U03ZZufhrh0YnCUzLpICg7uTR2JduVpbZ6fjD+mJaMjmEHTaPK05j08JJoICH44zKs1OCQQEPx/EmpgVEgnwX8nCclWkJkegKeDhOORZXzxUSKYfqYhmQDHamZcRgSMu8bUfBsp0hNzctJAb0Tk/I/a+9DfhjpwymJKR47NN/DFNb3zUnHh7wzTt1+J/JY31tiCnhJBBAHh1azZJDfP3jYFEGHrUFJJJbQmQ5XJaCRq0GQ6m4DHuag5ZbNCElwgXwcMviG7KwB0RmpoXRAbTgbdPC6AAGuJFpYTTQgkbEtDA66AEi36aF0QH0fMsSBjLhAyJ78cftxQ4QOZgWRgdtQGRhWhgd/JNESr204B4ps8tI+YyJaWF0AAP2jWlhdBABIiPTwuiAACKxaWG0AL3fciR4OYDxSCnSiTwkgEjTtDA6gIZkaloYHcCAxC1xNqhG4OGhfZtE4tWeAZH++yRSxDlEfxSmTGPbsqNfEvE33CTO8I1CKaB3Xff4KfEAEbvC9tZWarlDS9KwqfKE/BrrAfrz1ImVTVFi/y4SPm0I15Znz3ZvStuEJpwSaw7UDw+J8BlpGJM4xzfKJoM0mSCx2mf2TQlIikgQmUMiWwt2SQ+e2vgSD25tUlzhia7l+1nin4XZrewR9YfhUy/1b9+iJ4VQ78BgNoVs8jRuGPWQA1BTIrUqXwsOj6vLgVTCBBpFJzZ1Btfk8XDQcbhPPTQyo7naHA53IJXQlHro570SsyEoSHRxDv2SM5GRv998e3Gj0eh04sF6exzVz6t+0jy0/XnYC14X5be4++OBI26d7Omnbqn58WVVXEZ7e0/x9vv8s++2L2GkEwPMOYXgEDglNPbop5IoKSpqZrNaj2b9/eLKSXKmIuF03LDFvalQPJIE4uPs1N2FEWY5BIm4zPUX37j3U6T8lOGup/2uvyyQIDo10KPVUUzIVDySMrzZ3meYJzI/i58FOKM2fIDYcFqIzwvoyJEwESqTLFYoJkvp7S0NdzP/XR6tcLGJVQbAZVWGyF2nh8HWU+JwB+6o8/IRJnrA+SpfpsUUAxdmrEyLKQbKERyKxzEOVGgyMi2lGAOMo/JaN+Ut6KC8eZTvZhRHVPQaiQcyDVzEm5gWUwxUkqv1fg9FFzgbUhz8G0TsDe4exxkXWh0Ny8uE1wxvXibptZsHZPJ0KR714xj4CpmpvXjcTwO5lDJgpI8No6+UKLTPiMzUEp7W6ay1Yp7MOgde9VDAti2iWj1GxEN/Fqo1V7btdU+Rh3WhiHKBu21BrsRZrtVE1qo8bPO01OvbA/Hgn0RDmUhNI4v5DqjfGxY1efkw1In8mBadQkP9hDwxLTsFjcssiWnZKWjUu9rl/WpcU7Ur7at+Ba9l1xGPevnbTjz4J6He7cCypJZy+yjLJkSZSGRb2leRyMS2gF1xjwSWbRBHUWsN3126oQCFq4Stk2mhWZAncrFwOhx5IpFcldHnIOdrkS6+5uvDkOoSMLRO6aaQcOODdxyqv8zzrIsJPPD6+CNe+S0SLC/tZn921MxlbNE8yGuzJu60m+m6R6JQY+m66Jj9hbneTr05ZJZ/6mh29EUDjeLY6ea5FdazZNfjvTzC2THudH8Je8v5YVPgqqKPeUSRbczXBZdaK/xq7/xhr7gMl31SsV2kKavxF9fLw+rfSSELd3Mh3AMT9B1r1ur1vjIfyjWr/wP2HqHPfvwX378t/Hu8f6O9B0awxrhxMOFMPTLVyM0res2/bcYj4qIvkzEuhDDP09gXR5ChFbsEutNP69N45wz4e9n93LOc/OGC8TXIrpEsKd2ZPxZ85PYp/AWsfItq3gEnS4XiZj4/m8dF5kEOEYm+EF72WW7fA8JyXlF7MXMxYb3PX/RjW0yJ65Z5M8LvxMAyBgOEdqTSip3VkPUI+1BRIuDJnYEVNKLIbycHFbeD/mDxjmPV5qyxPYk7R7kpLWiNwdzuA/GXgRfADcWYlkamTUfWjBTVZLA3pDiTDawpVwmxqoVOEjxyCqWw8pjp+jVEGhLYOn7ZJsNMbaUus2XWvSBUYoZHovDqkH6Uv1bynkNDrhohY0YEpeDsi9OCxZV+xZb/oXzglfX3BKDNiDB2ZTMp3JTjVPnyU6x5V0v2NIw2I+LafMLSwYU3uVPlW/CbCTmFKNvqiTYjKM+JVee6LrDAaY60IHqZZQbE3ZsDoM0IbnuxNOWWzyRdvAXzlnEaTtIH+NRtLWwD9Dkj+PV4Ukao4elpVmjYSqlvtL7r5TzN6z7hPJ2u/qKyQSrSjRUqQ+DWPeMfmzAu2nJu8TxXf3HZIKVDFAoRoBmRMUAkQTIZP33/Yu8yoJarfCcesEYkG5Ts8tEJi8nTq+0IKp0pFYK6a0YBSCNbn7jMbxQGk+fMCT1AyseQ7WcBzIh8x5hWVvlf/aOcjX8mZIUVwgHlpUgWFAMzgm0zA5F3WRtZAZ6eg9hpoGIryZr7NJxRa+ET5vI8WSbPtYtIh1DvRc5HSR9VmZAa64cmXVrjPPU0JrigPFKpLo5PP0i5hIzklhfN5OE6oEqEx9BTkQnYU02h0YgozOaFaSZ/X4Fzf6g+EDInlA8NqtXDcpI9dHbhacNf4QnSfepB1YXvx1l7mNPp5sTL02CwyBrHZFWv/+zuiufuzmCnPARDSSwu+OUD5Yr964tknt/F9zVGDg2JKYd9IPa1cbTEJBvpezXKl0GuGCcsJg+fKWhLTDeMLI43ViPEG6a/VlEF3zFnndsqNYfPBW6xeFLoL9dYW1cEeY/FcZRGygXw4rQsHWHq/tRXO+8Qqw10yIwizmUn8OP6P/UV5fL1igNlmIiJhO4fnIaXvKCNMGl2XAqqAy0kidiLdh2gFL/qWqFChQoVKlSoUKFChQoVKpQK/wHzan5fC8eneAAAAABJRU5ErkJggg==" }}
        style={{ width: 40, height: 40, marginLeft: 10 }}
      />
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            headerTitle: "",
            headerLeft: props => <APPICON />
          }
          }
          component={Home} />
        <Stack.Screen
          name="Cat"
          options={{
            headerTitle: "",
            headerLeft: props => <APPICON />
          }
          }
          component={Cat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
