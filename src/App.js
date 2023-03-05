import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import music_data from './data/music-data.json';
import SongCard from './components/SongCard';
import SearchBar from './components/SearchBar';


/*Birden fazla sayfa olma durumunda custom component olarak generic ilerlemek daha mantıklı
    ama birden fazla sayfa ama birden fazla yazı tipi var o zaman da ayrı bir stil olarak 
    yaratmak daha mantıklı custom component oluşturmaya gerek yok. Bu projede sadece tek tip
    tükendi yazısı olduğu için SongCard alında ayrı bir stil js. oluşturmadan ilerlemek daha
    doğru.*/

function App(){

    //Açıldığı anda şarkı listesini görmek istiyorum. Music datayı verdim o yüzden.
    const [list, setList] = useState(music_data);

    const renderSong = ({item}) => <SongCard song={item}></SongCard>;

    const renderSeperator = () => <View style={styles.seperator}></View>

    const handleSearch = text => {
        const filteredList = music_data.filter(song => {
            const searchedText = text.toLowerCase();
            const currentTitle = song.title.toLowerCase();

            return currentTitle.indexOf(searchedText) > -1;
        });

        setList(filteredList);
    }

    //onSearch property'si handleSearch'i taşıyor.
    return(
        <SafeAreaView style={styles.container}>
            <SearchBar onSearch={handleSearch}></SearchBar>
        <View style={styles.container}>
            <FlatList 
                        keyExtractor={item => item.id}
                        data={list}
                        renderItem={renderSong}
                        ItemSeparatorComponent={renderSeperator}></FlatList>
        </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    seperator:{
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
})

export default App;