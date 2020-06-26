import React, { Component } from 'react';
import { StyleSheet, View,Image, Text,TouchableOpacity} from 'react-native';

import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';

export default function NewsArticle(props)
{
    const {data} = props

    return(     
        <View style ={{marginHorizontal: 15}}>
        <Container>
    <Content>
      <Card>
        <CardItem bordered>
          <Left>
            <Body>
          <Text>Author: {data.author}</Text>
  <Text note>Source: {data.source.name}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
        <TouchableOpacity style = {{flex: 1}} onPress = {() => {alert(data.url)}}>
          <Image source={{uri: data.urlToImage}} style={{height: 200, width: null, flex: 1}}/>
          </TouchableOpacity>
        </CardItem>
        <CardItem bordered>
          <Text>
            {data.description}
          </Text>
        </CardItem>
        <CardItem>
          <Left>
            <Text>{data.title}</Text>
          </Left>
        </CardItem>
      </Card>
    </Content>
  </Container>
      </View>
     
    )
}