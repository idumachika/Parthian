import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ProgressBar from '../../components/ProgressBar';
import banner from '../../assests/images/banner.png';
import ProfileIcon from '../../assests/images/Profile_Image.png';
import GrowthIcon from '../../assests/images/growth.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import Divider from '../../components/Divider';
import {channels_data, onBoarding_progress} from '../../utils/DummyData';

import styles from './styles';
import {useNavigation} from '@react-navigation/native';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const navigation = useNavigation();

  const renderHeaderItem = () => {
    return (
      <View style={styles.HeaderContainer}>
        <View style={styles.HeaderProfileSection}>
          <Text style={styles.profileName}>Hi Philip </Text>
          <Image source={ProfileIcon} />
        </View>
        <View style={styles.balanceContainer}>
          <Text style={styles.amountTxt}>$7,425</Text>
          <Text style={styles.availbalance}>Available balance</Text>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.cardWrapper}>
            <View style={styles.cardContent}>
              <View>
                <Text style={styles.cardTitle}>Spent</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Octicons name={'dot-fill'} size={20} color="#7165E3" />

                  <Text style={styles.cardAmount}>$1,460</Text>
                </View>
              </View>
              <View>
                <Text style={styles.cardTitle}>Earned</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Octicons name={'dot-fill'} size={20} color="#FF5141" />

                  <Text style={styles.cardAmount}>$1,460 </Text>
                </View>
              </View>
            </View>
            <View style={styles.Divider} />
            <View style={styles.cardDescriptionContainer}>
              <Text style={styles.cardDescription}>
                {
                  'You spent $2,732 on dining out this month. \nThis is 25% more than last month.'
                }
              </Text>
            </View>
            <View style={styles.cardDescriptionContainer}>
              <Text style={styles.cardTellMore}>Tell me more</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  const ScreenNavigation = (index: number) => {
    if (index === 0) {
      navigation.navigate('Transfer');
    } else if (index === 1) {
      navigation.navigate('Budget');
    } else if (index === 3) {
      navigation.navigate('FinanceBudget');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#7165E3"
        translucent={true}
      />
      {renderHeaderItem()}

      <View style={styles.ActivityContainer}>
        <Text style={styles.activityText}>Activity</Text>
        <View style={styles.ActivityCard}>
          {channels_data.map((items, index) => (
            <TouchableOpacity
              onPress={() => ScreenNavigation(index)}
              style={styles.ActivityCardWrapper}>
              <View style={styles.ActivityCardContent}>
                {items.channel === 'Transfer' ? (
                  <Ionicons name={'paper-plane'} size={24} color="#fff" />
                ) : items.channel === 'My Card' ? (
                  <FontAwesome name={'credit-card'} size={24} color="#fff" />
                ) : (
                  <Image source={GrowthIcon} style={styles.Icon} />
                )}
              </View>
              <Text style={styles.ActivityCardTitle}>{items.channel}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.completeRegCard}>
        <Text style={styles.completeTitle}>Complete Registration</Text>
        <View style={styles.completeRegCardContainer}>
          <View style={styles.completeRegSection}>
            <Text style={styles.completeRegPercent}>75%</Text>
            <Text style={styles.completeRegText}>7 of 10 completed</Text>
          </View>
          <View style={styles.progressBarContainer}>
            <ProgressBar currentStep={70} totalNumberOfSteps={100} />
            <View style={styles.Divider2} />
          </View>

          {onBoarding_progress.map((items, index) => (
            <React.Fragment key={index}>
              {index == 0 && (
                <View style={styles.infoContainer}>
                  <Image source={items.icon} />
                  <View>
                    <Text style={styles.personalInfo}>{items.steps}</Text>
                    <Text style={styles.personalInfoDescription}>
                      {items.info}
                    </Text>
                    <Text style={styles.continueBtn}>{items.btn}</Text>
                  </View>
                </View>
              )}
              {index !== 0 && (
                <View style={[styles.infoContainer, {alignItems: 'center'}]}>
                  <Image source={items.icon} />
                  <View>
                    <Text style={styles.personalInfo}>{items.steps}</Text>
                  </View>
                </View>
              )}
              {index !== onBoarding_progress.length - 1 && (
                <Divider height={0.5} color="#C7C7C7" style={styles.Divider4} />
              )}
            </React.Fragment>
          ))}
        </View>
      </View>
      <View style={styles.promoContainer}>
        <Text style={styles.promoText}>New and Promo</Text>

        <View style={styles.promoCardContainer}>
          <ImageBackground
            source={banner}
            resizeMode="cover"
            style={styles.promoImageContainer}></ImageBackground>
          <View style={styles.promoContent}>
            <Text style={styles.promoTitle}>Invite Your friend !</Text>
            <Text style={styles.promoDescription}>
              For Every user you invite and signs up, you can earn up $5
            </Text>
            <Text style={styles.inviteNow}>Invite Now</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
