import { React, useState } from 'react'
import { View, StyleSheet, Text, Image, FlatList, Button, ScrollView, TouchableOpacity, Alert } from 'react-native'

const Task2 = () => {
    const [color, setColor] = useState([]);
    const randomColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return (
            `rgb(${r},${g},${b})`
        )
    }
    return (
        <View style={styles.setup}>
            <TouchableOpacity style={styles.btnStyle} onPress={() => {
                setColor([...color, randomColor()])
            }}>
                <Text>Generate Color</Text>
            </TouchableOpacity>

            <FlatList keyExtractor={(key) => key} data={color}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.imgCOntainer}>
                            <Text style={{ backgroundColor: item, height: 100, width: 400, borderRadius: 5, display: 'flex', fontWeight: 'bold', fontSize: 25, alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                {item}
                            </Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    btnStyle: {
        backgroundColor: "#00b0ff",
        paddingVertical: 35,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    imgCOntainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default Task2