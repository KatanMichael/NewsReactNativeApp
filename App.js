import { StatusBar } from 'expo-status-bar';
import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, FlatList, SafeAreaView, TextInput } from 'react-native';

import { Container, Header, Content, List, ListItem, Button } from 'native-base';

import NewsArticle from "./Components/NewsArticle"

import Client from "./Client/Client"

const client = new Client()
export default function App() {
  const [articles, setArticles] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [searchData, setSearchData] = useState("")

  useEffect(
    () => {
      if (isLoading) {
        client.getAllHeadlines("us")
          .then(res => res.json())
          .then(data => {
            console.log(data.status)
            console.log(data.totalResults)
            setArticles(data.articles)
            setLoading(false)
          })
      }

    }
  )

  if (isLoading) {
    return (
      <Text>Data is getting loaded</Text>
    )
  } else {
   if(typeof articles !== "undefined" && articles.length > 0)
   {
    return (
      <View style={{ flex: 1}}>
        <View style = {{marginTop: 30}}>
        <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => {setSearchData(text)
      client.getAllHeadlinesAbout(text)
    .then(res => res.json())
    .then(data =>
      {
        setArticles(data.articles)
      })
  }}
      value={searchData}
    />
    <Button onPress = {() =>
    {
      client.getAllHeadlinesAbout(searchData)
      .then(res => res.json())
      .then(data => {
        setArticles(data.articles)
      })
    }}>
      <Text>Search Category</Text>
    </Button>
          
        </View>

        <FlatList
          data={articles}
          renderItem={({ item }) => <NewsArticle data={item} />}
          keyExtractor={item => item.title} />
      </View>
    );
   }else
   {
     return(
       <View style = {{flex: 1, justifyContent: "center"}}>
         <SearchForm/>
         <Text>No Data Found</Text>
       </View>
     )
   }
  }
  function SearchForm() 
  {
    return(
      <View>
    <Button onPress = {() =>
    {
      client.getAllHeadlines()
      .then(res => res.json())
      .then(data => {
        setArticles(data.articles)
      })
    }}>
      <Text>Reset Search</Text>
    </Button>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

