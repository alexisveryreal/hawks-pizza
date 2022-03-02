import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
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

  console.log('HOme PopuldateDataState: ', popularDataState);

  // const [popular] = useState<PopularTypes>(popularState);
  // const [filteredData, setFilteredData] =
  //   useState<PopularTypes>(popularDataState);
  // console.log("POPULAR: ", popular);
  // console.log("FILTERED: ", filteredData);
  // const hasFiltered = filteredData !== popular;
  // console.log(hasFiltered);

  const hasFiltered =
    popularDataState.data !== popularData &&
    popularDataState.data !== popularSodaData;

  const { colors } = useColors();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        <HomeHeader navigation={navigation} />
        <HomeTitles />
        <Search
          originalPopular={popularDataState}
          setFilteredData={setPopularDataState}
        />

        {!hasFiltered && <Categories />}
        <Popular popularData={popularDataState} navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
