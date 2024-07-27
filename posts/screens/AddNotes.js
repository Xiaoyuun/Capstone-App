import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, IconButton, TextInput, FAB } from 'react-native-paper'
import Header from '../component/Header'

function AddNotes({ route, navigation }) {
    const [noteTitle, setNoteTitle] = useState('')
    const [noteDescription, setNoteDescription] = useState('')

    function onSaveNote() {
        route.params.addNote({ noteTitle, noteDescription })
        navigation.goBack()
    }

    return (
        <>
            <View style={styles.container}>
                <IconButton
                    icon="close"
                    size={25}
                    color='white'
                    backgroundColor='pink'
                    onPress={() => navigation.goBack()}
                    style={styles.iconButton}
                />
                <TextInput
                    placeholder='Add post title here'
                    value={noteTitle}
                    mode='outlined'
                    onChangeText={setNoteTitle}
                    style={styles.title}
                />
                <TextInput
                    placeholder='description...'
                    value={noteDescription}
                    onChangeText={setNoteDescription}
                    mode="flat"
                    multiline={true}
                    style={styles.text}
                    scrollEnabled={true}
                    returnKeyLabel='done'
                    blurOnSubmit={true}
                />
                <FAB
                    style={styles.fab}
                    small
                    icon="check"
                    disabled={noteTitle == '' ? true : false}
                    onPress={() => onSaveNote()}
                />
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    iconButton: {
        backgroundColor: '#219653',
        position: 'absolute',
        right: 0,
        top: 40,
        margin: 10
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    title: {
        marginTop: 80,
        fontSize: 20,
        marginBottom: 16,
    },
    text: {
        height: 300,
        fontSize: 16,
        backgroundColor: 'white',
        borderColor: 'darkgray',
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 10,
        textAlignVertical: 'top'
    },
    fab: {
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 0,
        backgroundColor: 'pink'
    }

})

export default AddNotes