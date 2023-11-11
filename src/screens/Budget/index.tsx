import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Text,
  Dimensions,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Divider from '../../components/Divider';
import {BarChart, LineChart, PieChart} from 'react-native-gifted-charts';
import Graph from '../../assests/images/Graph.png';
import GraphCard from '../../components/GraphCard';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {Top_Transaction, pieData} from '../../utils/DummyData';

const HomeScreen = () => {
  const navigation = useNavigation();

  const renderItem = () => {
    return (
      <View style={styles.HeaderContainer}>
        <View style={styles.HeaderProfileSection}>
          <TouchableOpacity onPress={navigation.canGoBack}>
            <Ionicons name={'chevron-back'} size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.leftTextTitle}>Set Budget</Text>
        </View>
        <View style={styles.balanceContainer}>
          <Text style={styles.amountTxt}>Your balance is $2,639</Text>
          <Text style={styles.availbalance}>Last month, you spent $2,719</Text>
        </View>

        {/* <View> */}
        {/* <View style={{}}> */}
        {/* <Image source={Graph} style={{}} /> */}
        {/* </View> */}
        {/* </View> */}
        <View style={styles.cardContainer}>
          <View style={styles.cardWrapper}>
            <View style={styles.cardContent}>
              <View>
                <Text style={styles.cardTitle}>Spent</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Octicons name={'dot-fill'} size={20} color="#7165E3" />
                  <Text style={styles.cardAmount}>$2,730</Text>
                </View>
              </View>
              <View>
                <Text style={styles.cardTitle}>Earned</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Octicons name={'dot-fill'} size={20} color="#FF5141" />

                  <Text style={styles.cardAmount}>$1,460</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#FFF"
        translucent={true}
      />

      {renderItem()}

      <View style={{marginTop: 120, paddingHorizontal: 30}}>
        <Text style={styles.HeaderTitle}>Top Transaction</Text>
        {Top_Transaction.map(transactions => (
          <>
            <View style={styles.transSubSection}>
              <View style={styles.transContent}>
                <View style={styles.TransactionCardContent}>
                  <Image
                    source={transactions.icon}
                    style={{width: 28, height: 28}}
                  />
                </View>
                <View style={{marginLeft: 20}}>
                  <Text style={styles.transItem}>{transactions.item}</Text>
                  <Text style={styles.transaction}>
                    {transactions.transaction}
                  </Text>
                </View>
              </View>

              <Text style={styles.TransAmount}>$200</Text>
            </View>
            <Divider
              height={0.5}
              color="#C7C7C7"
              style={{paddingVertical: 5}}
            />
          </>
        ))}
        <View style={{paddingTop: 20}}>
          <Text style={styles.HeaderTitle}>Top Category</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <GraphCard pieData={pieData} title="Lunch & Dinner" amount="$330" />
          <GraphCard
            pieData={pieData}
            title="Medical Allowance"
            amount="$330"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
