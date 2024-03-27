import { Text } from 'react-native'
import React from 'react'

export default function Error({msg}) {
    return <Text style={{fontFamily : "Nunito_400Regular",
    color: "#D24545",
    fontSize : 14, textAlign : "center"}}>{msg}</Text>
}