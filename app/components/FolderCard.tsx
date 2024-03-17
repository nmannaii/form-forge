import React from 'react';
import {Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {ImageIconPlaceholder} from "./ImageIconPlaceholder";
import colors from "../config/colors";
import {Typography} from "../config/typography";

export const FolderCard = () => {
    return (
        <View style={styles.cardContainer}>
            <TouchableOpacity style={styles.imageContainer}>
                <ImageIconPlaceholder/>
            </TouchableOpacity>
            <View style={styles.detailsContainer}>
                <Text style={Typography.titleL}>Hello there</Text>
                <Text style={[Typography.bodyM, styles.cardDetails]} numberOfLines={3}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab fugiat magni quia rerum. Doloribus ipsa
                    natus necessitatibus possimus recusandae? Eaque fugiat neque reprehenderit! Ipsa, libero perferendis
                    quo similique sunt unde.
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        width: '100%',
        marginBottom: 20,
        elevation: 1,
        backgroundColor: colors.lightGray,
        borderRadius: 10,
        overflow: 'hidden',
    },
    cardDetails: {
        color: colors.darkGray
    },
    imageContainer: {
        width: '100%',
        height: 200
    },
    detailsContainer: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    }
});