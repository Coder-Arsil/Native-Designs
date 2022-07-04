import React from 'react'
import { Text, View, StyleSheet, TextInput, ScrollView } from "react-native"
import { MaterialIcons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
const FrontEnd = () => {
    const ViewDesign = () => {
        return (
            <>
                <View style={styles.myDocs}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text><MaterialIcons name='note' style={{ color: 'hotpink', fontSize: 35 }} /></Text>
                        <Text style={{ fontSize: 20, color: 'white' }}>My Docs</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#2F315B' }}>____________________</Text>
                    </View>
                    <View>
                        <Text style={{ color: 'white' }}>Malek Arsil</Text>
                        <Text style={{ color: 'white' }}>Sr.No:8562</Text>
                    </View>
                    <View style={styles.inbox}>
                        <View style={styles.inbox2}>
                            <View style={styles.inbox3}>
                                <View style={styles.inbox4}>
                                    <View style={styles.inbox5}>
                                        <View style={styles.inbox6}>

                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </>
        )
    }
    const Folder = () => {
        return (
            <>
                <View>
                    <View style={{
                        padding: 15, backgroundColor: 'white', borderRadius: 25, shadowColor: '#000',
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                        elevation: 5,
                        marginHorizontal: 25
                    }}><Text><MaterialIcons name='folder' style={{ color: 'orange', fontSize: 35 }} /></Text></View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 5 }}><Text style={{ color: 'white' }}>Folder</Text></View>
                </View>
            </>
        )
    }
    const ListAll = () => {
        return (
            <>
                <View style={{ flexDirection: 'row', marginTop: 35 }}>
                    <Folder />
                    <Folder />
                    <Folder />
                    <Folder />
                </View>
            </>
        )
    }
    return (
        <View>
            <View style={styles.header}>
                <View>
                    <MaterialIcons name='cloud' style={styles.headIcon} />
                </View>
                <View>
                    <MaterialIcons name='menu' style={styles.headIcon} />
                </View>
            </View>

            {/* manageBoxes */}
            <View style={styles.leftBox}></View>
            <View style={styles.rightBox}></View>

            {/* middle circle */}
            <View style={styles.circle}></View>

            {/* avatar */}
            <View style={styles.circle2}>
                <Text style={{ color: 'white' }}>
                    <FontAwesome name='user-circle' style={{ fontSize: 50 }} />
                </Text>
            </View>

            {/* second box */}
            <View style={styles.secondBox}>
                <View style={styles.searchBox}>
                    <View><TextInput placeholder='Search' style={{ color: 'white' }} /></View>
                    <View><Text><MaterialIcons name='close' style={{ color: 'white' }} /></Text></View>
                </View>

                {/* my docs */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                    <ViewDesign />
                    <ViewDesign />
                    <ViewDesign />
                    <ViewDesign />
                    <ViewDesign />
                    <ViewDesign />
                </ScrollView>
            </View>
            <View style={styles.ll}></View>
            <View style={styles.lr}></View>
            <View style={styles.lastBox}>
                <View style={styles.inLast}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <ListAll />
                        <ListAll />
                        <ListAll />
                        <ListAll />
                        <ListAll />
                        <ListAll />
                        <ListAll />
                        <ListAll />
                        <ListAll />
                        <ListAll />
                        <ListAll />
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    inLast: {
        height: 500,
        // paddingVertical:105,
        borderTopLeftRadius: 100,
        width: '100%',
        borderTopRightRadius: 100,
        backgroundColor: '#1C1C36',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    ll: {
        height: 150,
        width: 100,
        backgroundColor: '#2F315B',
        position: 'absolute',
        top: 300,
        zIndex: -1,
        elevation: -1
    },
    lr: {
        height: 250,
        width: 100,
        backgroundColor: '#1C1C36',
        position: 'absolute',
        top: 300,
        right: 0,
        zIndex: -1,
        elevation: -1
    },
    lastBox: {
        height: 520,
        width: '100%',
        backgroundColor: '#2F315B',
        borderTopRightRadius: 100,
        position: 'absolute',
        top: 417.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inbox: {
        height: 85,
        width: 85,
        backgroundColor: '#2F315B',
        position: 'absolute',
        right: 0,
        bottom: 0,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
    },
    inbox2: {
        height: 75,
        width: 75,
        backgroundColor: '#1C1C36',
        position: 'absolute',
        right: 0,
        bottom: 0,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
    },
    inbox3: {
        height: 65,
        width: 65,
        backgroundColor: '#2F315B',
        position: 'absolute',
        right: 0,
        bottom: 0,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
    },
    inbox4: {
        height: 55,
        width: 55,
        backgroundColor: '#1C1C36',
        position: 'absolute',
        right: 0,
        bottom: 0,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
    },
    inbox5: {
        height: 45,
        width: 45,
        backgroundColor: '#2F315B',
        position: 'absolute',
        right: 0,
        bottom: 0,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
    },
    inbox6: {
        height: 35,
        width: 35,
        backgroundColor: '#1C1C36',
        position: 'absolute',
        right: 0,
        bottom: 0,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
    },
    myDocs: {
        paddingLeft: 25,
        paddingRight: 65,
        borderTopRightRadius: 100,
        marginTop: 25,
        height: 155,
        paddingVertical: 15,
        width: 200,
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: '#2F315B',
        borderBottomLeftRadius: 100,
    },
    searchBox: {
        paddingVertical: 5,
        width: 350,
        marginTop: 55,
        borderRadius: 25,
        borderColor: '#2F315B',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    circle: {
        height: 100,
        width: 80,
        backgroundColor: '#1C1C36',
        position: 'absolute',
        left: '41.3%',
        top: '23%',
        borderRadius: 50,
        zIndex: 0,
        elevation: 0, //Tried adding to match zIndez

    },
    circle2: {
        height: 60,
        width: 60,
        backgroundColor: '#2F315B',
        position: 'absolute',
        left: '43.5%',
        top: '25%',
        borderRadius: 50,
        zIndex: 1,
        elevation: 1, //Tried adding to match zIndez
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    leftBox: {
        height: 100,
        width: 100,
        backgroundColor: '#2F315B',
        position: 'absolute',
        top: 117.5
    },
    rightBox: {
        height: 150,
        width: 100,
        backgroundColor: '#1C1C36',
        position: 'absolute',
        top: 40,
        right: 0,
        zIndex: -1,
        elevation: -1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        // elevation: 5,

    },
    secondBox: {
        width: '100%',
        height: 300,
        backgroundColor: '#1C1C36',
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.8,
        // shadowRadius: 2,  
        // elevation: 5,
        borderTopLeftRadius: 100,
        // paddingHorizontal: 10,
        alignItems: 'center',
        borderBottomLeftRadius: 100,
        overflow: 'hidden'

    },
    headIcon: {
        fontSize: 35,
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.50)',
        textShadowOffset: { width: 1, height: 3 },
        textShadowRadius: 10,

    },
    header: {
        paddingVertical: 25,
        marginTop: 32,
        width: '100%',
        backgroundColor: '#2F315B',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 35,
        borderBottomRightRadius: 100,
        zIndex: 2,
        // position:'relative'

    }
})
export default FrontEnd