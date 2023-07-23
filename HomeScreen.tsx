// HomeScreen.tsx

import { View, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';

import Header from './Header'; 
import Feed from './Feed';

export default function HomeScreen() {

  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time => time + 1); 
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Header time={time} />
      
      <ScrollView
        refreshControl={
          <RefreshControl 
            onRefresh={fetchNewData}
          />
        }
      >
        <Feed 
          section="following"
          apiEndpoint="https://following.api/" 
        />

        <Feed
          section="foryou"
          apiEndpoint="https://foryou.api/" 
        />
      </ScrollView>

    </View>
  );

}
