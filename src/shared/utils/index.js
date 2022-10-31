import analytics from '@react-native-firebase/analytics';

export const logAnalytic = async (contentType, itemId) => {
  await analytics().logSelectContent({
    content_type: contentType,
    item_id: itemId,
  });
};
