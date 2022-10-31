import remoteConfig from '@react-native-firebase/remote-config';

export const fetchConfig = async () => {
  await remoteConfig().setConfigSettings({
    isDeveloperModeEnabled: __DEV__,
    minimumFetchInterval: 0,
  });
  await remoteConfig().fetchAndActivate();
};

export const refreshConfig = () =>
  remoteConfig()
    .fetchAndActivate()
    .then(fetchedRemotely => {
      if (fetchedRemotely) {
        console.log(
          'Configs were retrieved from the backend and activated.',
          fetchedRemotely,
        );
      } else {
        console.log(
          'No configs were fetched from the backend, and the local configs were already activated',
        );
      }
    });

export const getRemoteValue = key => remoteConfig().getValue(key).asBoolean();
