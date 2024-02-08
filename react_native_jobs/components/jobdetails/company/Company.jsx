import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './company.style';
import { icons } from '../../../constants';

// import { checkImageURL } from '../../../../../utils';
// Weird dependency issue, fixed! Just have the function in here lol
const checkImageURL = (url) => {
  if (!url) return false
  else {
      const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i');
      return pattern.test(url);
  }
};

const Company = ( {companyLogo, jobTitle, companyName, location }) => {
  return (
    <View style = {styles.container}>
      <View style={styles.logoBox }>
        <Image source = {{ uri: checkImageURL(companyLogo)
            ? companyLogo
            : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqz05H.jpg'
          }}  style = {styles.logoImage} />
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName} / </Text>
        <View style={styles.locationBox}>
          <Image source = {icons.location} resizeMode="contain" styles={styles.locationImage} />
          <Text style={styles.locationName}> {location} </Text>
        </View>
      </View>
    </View>
  )
}

export default Company