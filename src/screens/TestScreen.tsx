import React from 'react'
import { Text, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

// Importando modal
import { BottomPopup } from '../../navigation/BottomPopup'

const populist = [
  {
    id: 1,
    name: 'Valor1',
  },
  {
    id: 2,
    name: 'Valor2',
  },
  {
    id: 3,
    name: 'Valor3',
  }
]

export const TestScreen = () => {
  let popuRef:any = React.createRef();
  
  const onShowPopup = () =>{
    popuRef.show();
  }

  const onClosePopup = () => {
    popuRef.close()
  }

  return (
    <View>
    
        <TouchableWithoutFeedback onPress={onShowPopup}>
          <Text>CLICK</Text>
        </TouchableWithoutFeedback>
        {/* <BottomPopup
            title= "titulo" 
            ref={(target)=>popuRef=target}
            onTouchableOutside={ onClosePopup }
            data={populist}
            /> */}
    </View>
  )
}
