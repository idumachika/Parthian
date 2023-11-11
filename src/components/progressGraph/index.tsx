import {ProgressCircle} from 'react-native-svg-charts';

 const ProgressCircleComponent = () => {
  return (
    <ProgressCircle
      style={{height: 200}}
      progress={0.7}
      progressColor={'rgb(249, 166, 2)'}
      startAngle={-Math.PI * 0.8}
      endAngle={Math.PI * 0.8}
    />
  );
 };

 export default ProgressCircleComponent;
