import { View, Text, Button } from "react-native";
import { useLayoutEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import styles from './styles';

function About() {
    const route = useRoute();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params?.nome === "" ? 'Tela About' : `Olá ${route.params?.nome}`
        })
    })

    return (
        <View style={styles.container}>
            <Text>
                Página About
            </Text>
            <Text>
                {route.params?.nome}
            </Text>
            <Text>
                {route.params?.canal}
            </Text>
            <Button title="Voltar para a Home" onPress={() => navigation.goBack()} />
        </View>
    )
};

export default About;