import React, { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { Text, FAB, List } from 'react-native-paper'
import Header from '../component/Header'
import { useSelector, useDispatch } from 'react-redux'
import { addnote, deletenote } from '../reducer/notesApp'
import { Ionicons } from '@expo/vector-icons'

function ViewNotes({ navigation }) {
    // const [notes, setNotes] = useState([])
    const notes = useSelector(state => state)
    const dispatch = useDispatch()

    const addNote = note => {
        console.log(note)
        dispatch(addnote(note))
    }

    const deleteNote = id => dispatch(deletenote(id))

    // const addNotes = note => {
    //     note.id = notes.length + 1
    //     setNotes([...notes, note])
    // }

    return (
        <>
            <View style={styles.container}>
                {notes.length === 0 ? (
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>There are no posts to view</Text>
                    </View>
                ) : (
                    <FlatList
                        data={notes}
                        renderItem={({ item }) => (
                            <List.Item
                                title={item.note.noteTitle}
                                description={item.note.noteDescription}
                                descriptionNumberOfLines={1}
                                titleStyle={styles.listTitle}
                                right={() => (
                                    <Ionicons name="trash-bin-outline" size={24} color="red" onPress={() => deleteNote(item.id)} />
                                )}

                            />
                        )}
                        keyExtractor={item => item.id.toString()}

                    />
                )}


                <FAB
                    style={styles.fab}
                    small
                    icon='plus'
                    label='Add a new post'
                    onPress={() => navigation.navigate('AddNotes', {
                        addNote
                    })
                    }
                />
                <FAB
                    style={styles.fabdash}
                    small
                    icon='home'
                    onPress={() => navigation.navigate("Dashboard")}
                />
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginTop: 30,
    },
    header: {
        backgroundColor: "blue"
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    title: {
        fontSize: 20
    },
    fab: {
        backgroundColor: 'pink',
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 10
    },
    fabdash: {
        backgroundColor: 'lilac',
        position: 'absolute',
        margin: 20,
        left: 0,
        bottom: 10
    },
    listTitle: {
        fontSize: 20
    }

})

export default ViewNotes