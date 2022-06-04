import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, ScrollView, RefreshControl } from 'react-native';
import { Card } from 'react-native-paper';
import Countdown from './Countdown'

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
const TickerCard = (props) => {

    const [refreshing, setRefreshing] = React.useState(false);
  
    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, []);
    return (
      <SafeAreaView style={styles.container}>
       <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
          <View style={styles.container}>
          <Card style={styles.privateCard}>
            <Text style={styles.title}>
              CELEBRATION DINNER
            </Text>
            <Countdown 
            timeTillDate="06 02 2022, 6:30 pm" 
            timeFormat="MM DD YYYY, h:mm a" 
            />
            <Text style={styles.username}>
              private
            </Text>
          </Card>
          <Card style={styles.card}>
            <Text style={styles.title}>
              ZACH'S POOL PARTY
            </Text>
            <Countdown 
            timeTillDate="06 03 2022, 2:20 pm" 
            timeFormat="MM DD YYYY, h:mm a" 
            />
            <Text style={styles.username}>
              public
            </Text>
          </Card>
          <Card style={styles.privateCard}>
            <Text style={styles.title}>
              END OF CUT
            </Text>
            <Countdown 
            timeTillDate="06 06 2022, 4:15 pm" 
            timeFormat="MM DD YYYY, h:mm a" 
            />
            <Text style={styles.username}>
            private 
            </Text>
          </Card>
          <Card style={styles.card}>
            <Text style={styles.title}>
              NASHVILLE VACATION
            </Text>
            <Countdown 
            timeTillDate="06 12 2022, 4:28 pm" 
            timeFormat="MM DD YYYY, h:mm a" 
            />
            <Text style={styles.username}>
              public
            </Text>
          </Card>
          <Card style={styles.card}>
            <Text style={styles.title}>
              MARK'S BIRTHDAY
            </Text>
            <Countdown 
            timeTillDate="06 17 2022, 12:00 am" 
            timeFormat="MM DD YYYY, h:mm a" 
            />
            <Text style={styles.username}>
              public
            </Text>
          </Card>
          <Card style={styles.privateCard}>
            <Text style={styles.title}>
              FLEET FOXES CONCERT
            </Text>
            <Countdown 
            timeTillDate="06 20 2022, 7:35 pm" 
            timeFormat="MM DD YYYY, h:mm a" 
            />
            <Text style={styles.username}>
              private
            </Text>
          </Card>
          <Card style={styles.privateCard}>
            <Text style={styles.title}>
              NATIONAL CHAMPIONSHIP GAME
            </Text>
            <Countdown 
            timeTillDate="06 22 2022, 8:20 pm" 
            timeFormat="MM DD YYYY, h:mm a" 
            />
            <Text style={styles.username}>
              private
            </Text>
          </Card>
          <Card style={styles.card}>
            <Text style={styles.title}>
              BRANDON'S BIRTHDAY
            </Text>
            <Countdown 
            timeTillDate="06 29 2022, 12:00 am" 
            timeFormat="MM DD YYYY, h:mm a" 
            />
            <Text style={styles.username}>
             public
            </Text>
          </Card>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };

  export default TickerCard;

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#C5E063',
        },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 20,
        marginBottom: 10,
        color: "white"
        },
    card: {
        backgroundColor: "#5F9EA0",
        shadowRadius: 5,
        marginVertical: 10,
        padding: 10,
    },
    privateCard: {
      backgroundColor: "#34403A",
      shadowRadius: 5,
      marginVertical: 10,
      padding: 10
    },
    username: {
        fontSize: 10,
        textAlign: 'left',
        padding: 15,
        color: "white"
    }
  })

  