import {FlatList, SafeAreaView, StatusBar, StyleSheet, View} from "react-native";
import {FolderCard} from "../components/FolderCard";
import {Folder} from "../dtos/Folder";

export const Folders = () => {
    const folders: Folder[] = [
        {id: 1, name: "Folder 1"},
        {id: 2, name: "Folder 2"},
        {id: 3, name: "Folder 3"},
        {id: 4, name: "Folder 4"},
        {id: 5, name: "Folder 5"},
        {id: 6, name: "Folder 6"},
        {id: 7, name: "Folder 7"},
        {id: 8, name: "Folder 8"},
        {id: 9, name: "Folder 9"},
        {id: 10, name: "Folder 10"}
    ];

    return (
        <FlatList data={folders}
                  style={styles.container}
                  renderItem={({item}) => <FolderCard/>}
                  keyExtractor={(item) => item.id.toString()}/>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    }
})