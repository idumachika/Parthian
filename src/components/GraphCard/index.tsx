import React from 'react';
import {View, Text} from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import styles from './styles';

const GraphCard = ({pieData, title, amount}) => {
  return (
    <View style={styles.grapCardContainer}>
      <View style={styles.graphContainer}>
        <View style={{marginBottom: 10}}>
          <PieChart
            donut
            innerRadius={50}
            radius={60}
            data={pieData}
            strokeWidth={0.2}
            showGradient={true}
            gradientCenterColor={'#4B3ECC'}
            centerLabelComponent={() => {
              return <Text style={{fontSize: 30}}>70%</Text>;
            }}
          />
        </View>

        <Text style={styles.graphTitle}>{title}</Text>
        <Text style={styles.graphNumber}>{amount}</Text>
      </View>
    </View>
  );
};

export default GraphCard;
