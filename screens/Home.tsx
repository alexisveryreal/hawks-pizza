import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRecoilState } from 'recoil';

import popularData from '../assets/data/popularData';
import popularSodaData from '../assets/data/popularSodaData';
import popularState from '../atoms/popularAtom';
import {
  HomeHeader,
  HomeTitles,
  Search,
  Categories,
  Popular,
} from '../components';
import { useColors } from '../hooks/useColors';
import { RootStackParamList } from '../navigation/NavigationRoot';

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export type HomeScreenNavigation = HomeScreenProps['navigation'];

const Home = ({ navigation, route }: HomeScreenProps) => {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  const [popularDataState, setPopularDataState] = useRecoilState(popularState);
  const [notFound, setNotFound] = useState(false);

  // console.log('HOme PopuldateDataState: ', popularDataState);

  const hasFiltered =
    (popularDataState.data !== popularData &&
      popularDataState.data !== popularSodaData) ||
    notFound;

  const { colors } = useColors();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        <HomeHeader navigation={navigation} />
        <HomeTitles />
        <Search
          originalPopular={popularDataState}
          setFilteredData={setPopularDataState}
          setNotFound={setNotFound}
        />

        {!hasFiltered && <Categories />}
        <Popular
          popularData={popularDataState}
          navigation={navigation}
          notFound={notFound}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
