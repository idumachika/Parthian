import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import styles from './styles';
import BannerTwo from '../../assests/images/banner2.png';

const FinanceBudget = () => {
  const renderHeaderItem = () => {
    return (
      <View style={styles.HeaderContainer}>
        <ImageBackground
          source={BannerTwo}
          resizeMode="contain"
          style={{
            alignItems: 'center',
            justifyContent: 'space-between', // Use space-between to place items at the top and bottom
            width: '80%',
            height: '80%',
            marginTop: 30,
          }}>
          <View style={{marginTop: 20}}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 18,
                fontWeight: '700',
                lineHeight: 28,
              }}>
              Finance Score
            </Text>
          </View>

          <View style={{marginBottom: 20}}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 18,
                fontWeight: '700',
                lineHeight: 28,
              }}>
              It can be better!
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: '#fff',
                lineHeight: 25,
                fontWeight: '400',
              }}>
              Below are some recommendations
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {renderHeaderItem()}

      <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            lineHeight: 18,
            color: '#1C1939',
          }}>
          Recommendation
        </Text>
      </View>
      <View style={styles.RecommendationCard}>
        <View style={styles.CardContent}>
          <View style={styles.ActivityCardContent}>
            <Text style={styles.title}>+17</Text>
          </View>

          <View style={{paddingHorizontal: 25}}>
            <Text style={styles.cardTitle}>Spending</Text>

            <Text style={styles.cardDescription}>
              {
                'You spent $468 on food. That’s 50% \n higher than the average of our users.'
              }
            </Text>
            <Text style={styles.moreDetailBtn}>Continue</Text>
          </View>
        </View>
      </View>
      <View style={styles.RecommendationCard}>
        <View style={styles.CardContent}>
          <View style={styles.ActivityCardContent}>
            <Text style={styles.title}>+8</Text>
          </View>

          <View style={{paddingHorizontal: 25}}>
            <Text style={styles.cardTitle}>Credit</Text>

            <Text style={styles.cardDescription}>
              {
                'You were late to pay last month’s card \n bills. Lets try to be on time this month.'
              }
            </Text>
            <Text style={styles.moreDetailBtn}>Continue</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default FinanceBudget;
