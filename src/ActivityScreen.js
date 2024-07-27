import React, { useEffect, useState } from 'react';
import { View, Text, Button, TouchableOpacity, FlatList, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { collection, addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { FIRESTORE_DB } from "../firebaseConfig"; // Adjust the path to where your Firebase config file is

import { onSnapshot } from 'firebase/firestore';
import { Ionicons, Entypo } from '@expo/vector-icons';

import { FAB } from 'react-native-paper'

export default function ActivityPage() {
    const navigation = useNavigation();
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");
    const [place, setPlace] = useState("");


    const addTodo = async () => {
        console.log('in addtodo, todo is: ', todo);
        try {
            const docRef = await addDoc(collection(FIRESTORE_DB, 'todos'), {
                title: todo,
                done: false
            });
            setTodo('');
            console.log('Document written with ID: ', docRef.id);
        } catch (e) {
            console.error('Error adding document: ', e);
        }
    };

    useEffect(() => {
        const todoRef = collection(FIRESTORE_DB, 'todos');

        const subscriber = onSnapshot(todoRef, {
            next: (snapshot) => {
                const todos = [];
                snapshot.docs.forEach((doc) => {
                    todos.push({
                        id: doc.id,
                        ...doc.data()
                    });
                });

                setTodos(todos);
            }
        });

        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);


    const renderTodo = ({ item }) => {
        const ref = doc(FIRESTORE_DB, `todos/${item.id}`);

        const toggleDone = async () => {
            await updateDoc(ref, { done: !item.done });
        };

        const deleteItem = async () => {
            await deleteDoc(ref);
        };

        return (
            <View style={styles.todoContainer}>
                <TouchableOpacity onPress={toggleDone} style={styles.todo}>
                    {item.done ? (
                        <Ionicons name="checkmark-circle" size={32} color="green" />
                    ) : (
                        <Entypo name="circle" size={32} color="black" />
                    )}
                    <Text style={styles.todoText}>{item.title}</Text>
                </TouchableOpacity>
                <Ionicons name="trash-bin-outline" size={24} color="red" onPress={deleteItem} />
            </View>
        );
    };

    return (
        <View style={styles.view}>
            <Text style={styles.texta}>
                Activities
            </Text>

            <View style={styles.container}>
                <View style={styles.form}>
                    <TextInput
                        style={styles.input2}
                        placeholder="Add new activity"
                        onChangeText={(text) => setTodo(text)}
                        value={todo}
                    />
                    <Button onPress={addTodo} title="Add activity" disabled={todo === ''} />
                </View>

                {todos.length > 0 && (
                    <View>
                        <FlatList
                            data={todos}
                            renderItem={renderTodo}
                            keyExtractor={(todo) => todo.id}
                        // removeClippedSubviews={true}
                        />
                    </View>
                )}
            </View>
            <FAB
                style={styles.fab}
                small
                icon='home'
                onPress={() => navigation.navigate("Dashboard")}
            />
        </View >
    )
}


const styles = StyleSheet.create({
    container2: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input2: {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },
    texta: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 40,
        marginTop: 50,
    },
    texta2: {
        color: "black",
        fontSize: 18,
    },
    button: {
        backgroundColor: "lightgray",
        padding: 10,
        width: "100%",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        alignItems: "center",
    },
    profileButton: {
        backgroundColor: "lightgray",
        padding: 10,
        width: "100%",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        alignItems: "center",
    },
    view: { flex: 1, padding: 10, backgroundColor: "#BEBOBB" },
    container: {
        marginHorizontal: 20
    },
    form: {
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff'
    },
    todo: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    todoText: {
        flex: 1,
        paddingHorizontal: 4
    },
    todoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 4
    },
    fab: {
        backgroundColor: 'pink',
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 10
    },
    fabSearch: {
        backgroundColor: 'pink',
        position: 'absolute',
        margin: 20,
        top: 110
    },
    fabPost: {
        backgroundColor: 'pink',
        position: 'absolute',
        margin: 20,
        top: 180
    },
    fabProfile: {
        backgroundColor: 'pink',
        position: 'absolute',
        margin: 20,
        top: 250
    },
    fabActivity: {
        backgroundColor: 'orange',
        position: 'absolute',
        margin: 20,
        top: 320
    },
});
