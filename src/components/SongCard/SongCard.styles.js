import React from 'react';
import { StyleSheet } from 'react-native';

/*Flex içinde bulunduğu yerde kaplayabildiği kadar yer kaplar haliyle bir elementin ekrandan 
    taşmasını istemiyorsam o element için flex kullanıp bu sorunu çözebilirim. Aynı zamanda flex
    bir elementi bulunduğu eksende ötelemek için de kullanılabilir.*/

export default StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    inner_container: {
        padding: 10,
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 27,
    },
    info_container: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    year: {
        marginLeft: 10,
        fontWeight: 'bold',
        color: 'gray',
        fontSize: 12,
    },
    soldout_container:{
        borderWidth: 1,
        borderColor: 'red',
        padding: 5,
        borderRadius: 5,
    },
    soldout_title: {
        color: 'red',
    },
    content_container: {
        flexDirection: 'row',
    },
})