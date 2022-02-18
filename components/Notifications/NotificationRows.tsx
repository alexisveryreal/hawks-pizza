import React from 'react';
import { StyleSheet, View } from 'react-native';

import {
  EMAIL_DESC,
  EMAIL_LABEL,
  PUSH_LABEL,
  SMS_LABEL,
  UNREAD_DESC,
  UNREAD_LABEL,
} from '../../constants/strings';
import NotifRow from './NotifRow';

// TODO: Make a custom hook to return the translated labels
// * need all the translated labels/descriptions first
// * -> have it return all the labels to just import

const NotificationRows = () => {
  return (
    <View style={styles.allRowsWrapper}>
      <NotifRow label={UNREAD_LABEL} description={UNREAD_DESC} />
      <NotifRow label={PUSH_LABEL} />
      <NotifRow label={SMS_LABEL} />
      <NotifRow label={EMAIL_LABEL} description={EMAIL_DESC} />
    </View>
  );
};

export default NotificationRows;

const styles = StyleSheet.create({
  allRowsWrapper: {
    paddingHorizontal: 20,
  },
});
