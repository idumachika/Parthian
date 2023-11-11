import React, {useReducer} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  FlatList,
} from 'react-native';
import styles from './styles';
import BannerTwo from '../../assests/images/banner2.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {userData, Transfer_list} from '../../utils/DummyData';

const FinanceBudget = () => {
  const UserProfileCard = ({item}) => {
    return (
      <View style={styles.profileCardContainer}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={require('../../assests/images/ProfileIcon.png')}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.ProfileNumber}>+090078601</Text>
        </View>
      </View>
    );
  };

  const renderItem = () => {
    return (
      <View style={styles.HeaderContainer}>
        <View style={{marginTop: 40}}>
          <Text style={styles.HeaderTitle}>Transfer</Text>
          <View style={styles.HeaderContent}>
            {Transfer_list.map((options, index) => (
              <View style={{alignItems: 'center'}}>
                <View style={styles.ActivityCardContent}>
                  <FontAwesome name={options.Icon} size={30} color="#fff" />
                </View>
                <Text style={styles.transferChannel}>{options.channel}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {renderItem()}

      <View style={styles.subSectionContainer}>
        <Text style={styles.subSectionTitle}>Recent</Text>
        <FlatList
          data={userData}
          keyExtractor={item => item.id}
          horizontal
          renderItem={({item}) => <UserProfileCard data={item} />}
          contentContainerStyle={{paddingHorizontal: 10}}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={{flex: 1, backgroundColor: '#fff', zIndex: 10}}>
        <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
          <Text style={styles.allContact}>All Contact</Text>
          <View style={styles.searchContainer}>
            <EvilIcons name={'search'} size={30} color="#8F96AD" />
            <Text style={styles.searchLabel}>Search name or number</Text>
          </View>
        </View>
        {userData.map(user => {
          return (
            <>
              <View style={styles.infoContainer}>
                <Image source={user.icon} style={{width: 100, height: 100}} />
                <View
                  style={{
                    paddingTop: 20,
                  }}>
                  <Text style={styles.personalInfo}>{user.username}</Text>
                  <Text style={styles.contactInfo}>{user.phoneNumber}</Text>
                </View>
              </View>
              <View style={styles.Divider4} />
            </>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default FinanceBudget;
