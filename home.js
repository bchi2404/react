import React from "react";
import { View, Text, Button, Image, StyleSheet, ImageBackground, FlatList, Dimensions } from "react-native";

const Home = ({ navigation }) => {
  const screenWidth = Dimensions.get('window').width;
  const imagesTopRow = [
    require("./assets/icon3.png"),
    require("./assets/icon4.png"),
    require("./assets/icon5.png"),
  ];
  const imagesBottomRow = [
    require("./assets/icon6.png"),
    require("./assets/icon7.png"),
  ];

  const renderImageItem = ({ item }) => (
    <Image source={item} style={styles.galleryImage} />
  );

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#FEBBCC" }}>
      
     
        <Image source={require("./assets/icon8.png")} style={styles.img} />
        <Text style={styles.txt2}>Way to</Text>
        <Text style={styles.txt3}>Fantasy</Text>
        <Text style={styles.txt1}>Content Categories</Text>
        <FlatList
          data={imagesTopRow}
          renderItem={renderImageItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          style={styles.firstRow} 
        />
        <FlatList
          data={imagesBottomRow}  
          renderItem={renderImageItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          style={styles.imageGallery} 
        />
        
      
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 220,
    height: 150,
    marginTop: 20,
  },
  backimg: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageGallery: {
    marginTop: -30, 
    marginBottom: 5,
  },
  firstRow:{
    marginTop: 120, 
    marginBottom: 5,
  },
  galleryImage: {
    width: 110, 
    height: 110,
    marginHorizontal: 10,
    borderRadius: 30,
   
    marginBottom: 5,
  },
  txt1:{
    fontWeight:'bold',
    
    fontSize:20,
    marginBottom:-110,
    marginTop:120
  },
  txt2:{
    
    fontSize:30,
  },
  txt3:{
    fontWeight:'bold',
    fontSize:38,
    marginBottom:-70,
  },
});

export default Home;
