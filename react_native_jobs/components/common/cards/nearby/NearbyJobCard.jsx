import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './nearbyjobcard.style';

// import { checkImageURL } from '../../../../../utils';
// Weird dependency issue, fixed! Just have the function in here lol
const checkImageURL = (url) => {
  if (!url) return false
  else {
      const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i');
      return pattern.test(url);
  }
};

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity style = {styles.container}
      onPress = {handleNavigate}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image 
          source = {{uri: checkImageURL(job.employer_logo)
          ? job.employer_logo : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqz05H.jpg' }}
          resizeMode='contain'
          style = {styles.logoImage}
        />
      </TouchableOpacity>

      <View style ={styles.textContainer}>
        <Text style={styles.jobName } numberOfLines={1}> {job.job_title} </Text>
        <Text style={styles.jobType}> {job.job_employment_type} </Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard;
