import { View, Button, Text } from "react-native";

import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "../redux/actions";

export default function Counter() {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    return (
        <View>
            <Button title="Increment" onPress={() => dispatch(increment())} />
            <Text>{count}</Text>
            <Button title="Decrement" onPress={() => dispatch(decrement())} />
        </View>
    );
}