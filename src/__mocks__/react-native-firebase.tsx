const firebase = {
  crashlytics: () => ({
    crash: (): void => {
      return;
    },
  }),
  messaging: () => ({
    hasPermission: (): Promise<boolean> => Promise.resolve(true),
    requestPermission: (): Promise<boolean> => Promise.resolve(true),
    getToken: (): Promise<string> => Promise.resolve('token'),
  }),
  notifications: () => ({
    onNotification: () => null,
    onNotificationOpened: () => null,
    getInitialNotification: (): Promise<boolean> => Promise.resolve(true),
  }),
};

export default firebase;
