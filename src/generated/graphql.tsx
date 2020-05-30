import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Clouds = {
   __typename?: 'Clouds';
  all?: Maybe<Scalars['Int']>;
};

export type CropGrowth = {
   __typename?: 'CropGrowth';
  geometry?: Maybe<Scalars['String']>;
};

export type CurrentWeather = {
   __typename?: 'CurrentWeather';
  dt?: Maybe<Scalars['Int']>;
  weather?: Maybe<Weather>;
  main?: Maybe<Main>;
  wind?: Maybe<Wind>;
  clouds?: Maybe<Clouds>;
};

export type Daily = {
   __typename?: 'Daily';
  date?: Maybe<Scalars['String']>;
  et0?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  precipitation?: Maybe<Scalars['Int']>;
  icon?: Maybe<Scalars['String']>;
};

export type Data = {
   __typename?: 'Data';
  truecolor?: Maybe<Scalars['String']>;
  falsecolor?: Maybe<Scalars['String']>;
  ndvi?: Maybe<Scalars['String']>;
  evi?: Maybe<Scalars['String']>;
};

export type Forecast = {
   __typename?: 'Forecast';
  dt?: Maybe<Scalars['Int']>;
  weather?: Maybe<Weather>;
  main?: Maybe<Main>;
  wind?: Maybe<Wind>;
  rain?: Maybe<Rain>;
  clouds?: Maybe<Clouds>;
};

export type Image = {
   __typename?: 'Image';
  truecolor?: Maybe<Scalars['String']>;
  falsecolor?: Maybe<Scalars['String']>;
  ndvi?: Maybe<Scalars['String']>;
  evi?: Maybe<Scalars['String']>;
};

export type IrriSat = {
   __typename?: 'IrriSat';
  series?: Maybe<Series>;
  daily?: Maybe<Array<Maybe<Daily>>>;
  forecast?: Maybe<Scalars['String']>;
};

export type Main = {
   __typename?: 'Main';
  temp?: Maybe<Scalars['Float']>;
  pressure?: Maybe<Scalars['Float']>;
  humidity?: Maybe<Scalars['Float']>;
  temp_min?: Maybe<Scalars['Float']>;
  temp_max?: Maybe<Scalars['Float']>;
  sea_level?: Maybe<Scalars['Float']>;
  grnd_level?: Maybe<Scalars['Float']>;
  temp_kf?: Maybe<Scalars['Float']>;
};

export type MapDates = {
   __typename?: 'MapDates';
  date?: Maybe<Scalars['String']>;
  dateurl?: Maybe<Scalars['String']>;
};

export type MapsDates = {
   __typename?: 'MapsDates';
  date?: Maybe<Scalars['String']>;
  dateurl?: Maybe<Scalars['String']>;
};

export type MapsLayers = {
   __typename?: 'MapsLayers';
  token?: Maybe<Scalars['String']>;
  mapid?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Mutation = {
   __typename?: 'Mutation';
  mapDate?: Maybe<Array<Maybe<MapsLayers>>>;
};


export type MutationMapDateArgs = {
  date?: Maybe<Scalars['String']>;
};

export type Ndvi = {
   __typename?: 'NDVI';
  dt?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['String']>;
  zoom?: Maybe<Scalars['Int']>;
  dc?: Maybe<Scalars['Float']>;
  cl?: Maybe<Scalars['Float']>;
  data?: Maybe<NdviData>;
};

export type NdviData = {
   __typename?: 'NDVIData';
  std?: Maybe<Scalars['Float']>;
  p75?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  median?: Maybe<Scalars['Float']>;
  p25?: Maybe<Scalars['Float']>;
  num?: Maybe<Scalars['Int']>;
  mean?: Maybe<Scalars['Float']>;
};

export type Query = {
   __typename?: 'Query';
  weather?: Maybe<CurrentWeather>;
  forecast?: Maybe<Array<Maybe<Forecast>>>;
  soil?: Maybe<Soil>;
  images?: Maybe<Array<Maybe<SatImages>>>;
  ndvi?: Maybe<Array<Maybe<Ndvi>>>;
  uvi?: Maybe<Uvi>;
  irrisat?: Maybe<IrriSat>;
  daily?: Maybe<Array<Maybe<Daily>>>;
  series?: Maybe<Series>;
  mapLayers?: Maybe<Array<Maybe<MapsLayers>>>;
  mapImage?: Maybe<Array<Maybe<MapsLayers>>>;
  mapDates?: Maybe<Array<Maybe<MapDates>>>;
  cropGrowth?: Maybe<CropGrowth>;
};


export type QueryMapLayersArgs = {
  date?: Maybe<Scalars['String']>;
};

export type Rain = {
   __typename?: 'Rain';
  rain?: Maybe<Scalars['Float']>;
};

export type SatImages = {
   __typename?: 'SatImages';
  dt?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  dc?: Maybe<Scalars['Float']>;
  cl?: Maybe<Scalars['Float']>;
  sun?: Maybe<Sun>;
  image?: Maybe<Image>;
  tile?: Maybe<Tile>;
  stats?: Maybe<Stats>;
  data?: Maybe<Data>;
};

export type Series = {
   __typename?: 'Series';
  timestamp?: Maybe<Array<Maybe<Scalars['String']>>>;
  et0tall?: Maybe<Array<Maybe<Scalars['Float']>>>;
  et0short?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type Soil = {
   __typename?: 'Soil';
  dt?: Maybe<Scalars['Int']>;
  d10?: Maybe<Scalars['Float']>;
  moisture?: Maybe<Scalars['Float']>;
  t0?: Maybe<Scalars['Float']>;
};

export type Stats = {
   __typename?: 'Stats';
  ndvi?: Maybe<Scalars['String']>;
  evi?: Maybe<Scalars['String']>;
};

export type Sun = {
   __typename?: 'Sun';
  azimuth?: Maybe<Scalars['Float']>;
  elevation?: Maybe<Scalars['Float']>;
};

export type Tile = {
   __typename?: 'Tile';
  truecolor?: Maybe<Scalars['String']>;
  falsecolor?: Maybe<Scalars['String']>;
  ndvi?: Maybe<Scalars['String']>;
  evi?: Maybe<Scalars['String']>;
};


export type Uvi = {
   __typename?: 'UVI';
  dt?: Maybe<Scalars['Int']>;
  uvi?: Maybe<Scalars['Float']>;
};

export type Weather = {
   __typename?: 'Weather';
  id?: Maybe<Scalars['Int']>;
  main?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
};

export type Wind = {
   __typename?: 'Wind';
  speed?: Maybe<Scalars['Float']>;
  deg?: Maybe<Scalars['Int']>;
};

export type CurrentWeatherQueryVariables = {};


export type CurrentWeatherQuery = (
  { __typename?: 'Query' }
  & { weather: Maybe<(
    { __typename?: 'CurrentWeather' }
    & Pick<CurrentWeather, 'dt'>
    & { weather: Maybe<(
      { __typename?: 'Weather' }
      & Pick<Weather, 'id' | 'main' | 'description' | 'icon'>
    )>, main: Maybe<(
      { __typename?: 'Main' }
      & Pick<Main, 'temp' | 'temp_min' | 'temp_max' | 'pressure' | 'humidity'>
    )>, wind: Maybe<(
      { __typename?: 'Wind' }
      & Pick<Wind, 'speed' | 'deg'>
    )>, clouds: Maybe<(
      { __typename?: 'Clouds' }
      & Pick<Clouds, 'all'>
    )> }
  )>, uvi: Maybe<(
    { __typename?: 'UVI' }
    & Pick<Uvi, 'uvi'>
  )>, soil: Maybe<(
    { __typename?: 'Soil' }
    & Pick<Soil, 'dt' | 'd10' | 'moisture' | 't0'>
  )> }
);

export type ForecastDataQueryVariables = {};


export type ForecastDataQuery = (
  { __typename?: 'Query' }
  & { forecast: Maybe<Array<Maybe<(
    { __typename?: 'Forecast' }
    & Pick<Forecast, 'dt'>
    & { weather: Maybe<(
      { __typename?: 'Weather' }
      & Pick<Weather, 'id' | 'main' | 'description' | 'icon'>
    )>, main: Maybe<(
      { __typename?: 'Main' }
      & Pick<Main, 'temp' | 'pressure' | 'humidity' | 'temp_min' | 'temp_max' | 'sea_level' | 'grnd_level' | 'temp_kf'>
    )>, wind: Maybe<(
      { __typename?: 'Wind' }
      & Pick<Wind, 'speed' | 'deg'>
    )>, clouds: Maybe<(
      { __typename?: 'Clouds' }
      & Pick<Clouds, 'all'>
    )> }
  )>>> }
);

export type IrriSatQueryVariables = {};


export type IrriSatQuery = (
  { __typename?: 'Query' }
  & { daily: Maybe<Array<Maybe<(
    { __typename?: 'Daily' }
    & Pick<Daily, 'date' | 'et0' | 'description' | 'icon' | 'precipitation'>
  )>>> }
);

export type MapDatesQueryVariables = {};


export type MapDatesQuery = (
  { __typename?: 'Query' }
  & { mapDates: Maybe<Array<Maybe<(
    { __typename?: 'MapDates' }
    & Pick<MapDates, 'date' | 'dateurl'>
  )>>> }
);

export type MapImageQueryVariables = {};


export type MapImageQuery = (
  { __typename?: 'Query' }
  & { mapImage: Maybe<Array<Maybe<(
    { __typename?: 'MapsLayers' }
    & Pick<MapsLayers, 'token' | 'mapid' | 'name'>
  )>>> }
);

export type NdviDataQueryVariables = {};


export type NdviDataQuery = (
  { __typename?: 'Query' }
  & { ndvi: Maybe<Array<Maybe<(
    { __typename?: 'NDVI' }
    & Pick<Ndvi, 'dt' | 'source' | 'zoom' | 'dc' | 'cl'>
    & { data: Maybe<(
      { __typename?: 'NDVIData' }
      & Pick<NdviData, 'p75' | 'min' | 'max' | 'median' | 'p25' | 'num' | 'mean'>
    )> }
  )>>> }
);

export type SatImagesQueryVariables = {};


export type SatImagesQuery = (
  { __typename?: 'Query' }
  & { images: Maybe<Array<Maybe<(
    { __typename?: 'SatImages' }
    & Pick<SatImages, 'dt' | 'type' | 'dc' | 'cl'>
    & { sun: Maybe<(
      { __typename?: 'Sun' }
      & Pick<Sun, 'azimuth' | 'elevation'>
    )>, image: Maybe<(
      { __typename?: 'Image' }
      & Pick<Image, 'truecolor' | 'falsecolor' | 'ndvi' | 'evi'>
    )>, tile: Maybe<(
      { __typename?: 'Tile' }
      & Pick<Tile, 'truecolor' | 'falsecolor' | 'ndvi' | 'evi'>
    )>, stats: Maybe<(
      { __typename?: 'Stats' }
      & Pick<Stats, 'ndvi' | 'evi'>
    )>, data: Maybe<(
      { __typename?: 'Data' }
      & Pick<Data, 'truecolor' | 'falsecolor' | 'ndvi' | 'evi'>
    )> }
  )>>> }
);


export const CurrentWeatherDocument = gql`
    query CurrentWeather {
  weather {
    dt
    weather {
      id
      main
      description
      icon
    }
    main {
      temp
      temp_min
      temp_max
      pressure
      humidity
    }
    wind {
      speed
      deg
    }
    clouds {
      all
    }
  }
  uvi {
    uvi
  }
  soil {
    dt
    d10
    moisture
    t0
  }
}
    `;
export type CurrentWeatherComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CurrentWeatherQuery, CurrentWeatherQueryVariables>, 'query'>;

    export const CurrentWeatherComponent = (props: CurrentWeatherComponentProps) => (
      <ApolloReactComponents.Query<CurrentWeatherQuery, CurrentWeatherQueryVariables> query={CurrentWeatherDocument} {...props} />
    );
    
export type CurrentWeatherProps<TChildProps = {}> = ApolloReactHoc.DataProps<CurrentWeatherQuery, CurrentWeatherQueryVariables> & TChildProps;
export function withCurrentWeather<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CurrentWeatherQuery,
  CurrentWeatherQueryVariables,
  CurrentWeatherProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, CurrentWeatherQuery, CurrentWeatherQueryVariables, CurrentWeatherProps<TChildProps>>(CurrentWeatherDocument, {
      alias: 'currentWeather',
      ...operationOptions
    });
};

/**
 * __useCurrentWeatherQuery__
 *
 * To run a query within a React component, call `useCurrentWeatherQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentWeatherQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentWeatherQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentWeatherQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CurrentWeatherQuery, CurrentWeatherQueryVariables>) {
        return ApolloReactHooks.useQuery<CurrentWeatherQuery, CurrentWeatherQueryVariables>(CurrentWeatherDocument, baseOptions);
      }
export function useCurrentWeatherLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CurrentWeatherQuery, CurrentWeatherQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CurrentWeatherQuery, CurrentWeatherQueryVariables>(CurrentWeatherDocument, baseOptions);
        }
export type CurrentWeatherQueryHookResult = ReturnType<typeof useCurrentWeatherQuery>;
export type CurrentWeatherLazyQueryHookResult = ReturnType<typeof useCurrentWeatherLazyQuery>;
export type CurrentWeatherQueryResult = ApolloReactCommon.QueryResult<CurrentWeatherQuery, CurrentWeatherQueryVariables>;
export const ForecastDataDocument = gql`
    query ForecastData {
  forecast {
    dt
    weather {
      id
      main
      description
      icon
    }
    main {
      temp
      pressure
      humidity
      temp_min
      temp_max
      sea_level
      grnd_level
      temp_kf
    }
    wind {
      speed
      deg
    }
    clouds {
      all
    }
  }
}
    `;
export type ForecastDataComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ForecastDataQuery, ForecastDataQueryVariables>, 'query'>;

    export const ForecastDataComponent = (props: ForecastDataComponentProps) => (
      <ApolloReactComponents.Query<ForecastDataQuery, ForecastDataQueryVariables> query={ForecastDataDocument} {...props} />
    );
    
export type ForecastDataProps<TChildProps = {}> = ApolloReactHoc.DataProps<ForecastDataQuery, ForecastDataQueryVariables> & TChildProps;
export function withForecastData<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ForecastDataQuery,
  ForecastDataQueryVariables,
  ForecastDataProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, ForecastDataQuery, ForecastDataQueryVariables, ForecastDataProps<TChildProps>>(ForecastDataDocument, {
      alias: 'forecastData',
      ...operationOptions
    });
};

/**
 * __useForecastDataQuery__
 *
 * To run a query within a React component, call `useForecastDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useForecastDataQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useForecastDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useForecastDataQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ForecastDataQuery, ForecastDataQueryVariables>) {
        return ApolloReactHooks.useQuery<ForecastDataQuery, ForecastDataQueryVariables>(ForecastDataDocument, baseOptions);
      }
export function useForecastDataLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ForecastDataQuery, ForecastDataQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ForecastDataQuery, ForecastDataQueryVariables>(ForecastDataDocument, baseOptions);
        }
export type ForecastDataQueryHookResult = ReturnType<typeof useForecastDataQuery>;
export type ForecastDataLazyQueryHookResult = ReturnType<typeof useForecastDataLazyQuery>;
export type ForecastDataQueryResult = ApolloReactCommon.QueryResult<ForecastDataQuery, ForecastDataQueryVariables>;
export const IrriSatDocument = gql`
    query IrriSat {
  daily {
    date
    et0
    description
    icon
    precipitation
  }
}
    `;
export type IrriSatComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<IrriSatQuery, IrriSatQueryVariables>, 'query'>;

    export const IrriSatComponent = (props: IrriSatComponentProps) => (
      <ApolloReactComponents.Query<IrriSatQuery, IrriSatQueryVariables> query={IrriSatDocument} {...props} />
    );
    
export type IrriSatProps<TChildProps = {}> = ApolloReactHoc.DataProps<IrriSatQuery, IrriSatQueryVariables> & TChildProps;
export function withIrriSat<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  IrriSatQuery,
  IrriSatQueryVariables,
  IrriSatProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, IrriSatQuery, IrriSatQueryVariables, IrriSatProps<TChildProps>>(IrriSatDocument, {
      alias: 'irriSat',
      ...operationOptions
    });
};

/**
 * __useIrriSatQuery__
 *
 * To run a query within a React component, call `useIrriSatQuery` and pass it any options that fit your needs.
 * When your component renders, `useIrriSatQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIrriSatQuery({
 *   variables: {
 *   },
 * });
 */
export function useIrriSatQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IrriSatQuery, IrriSatQueryVariables>) {
        return ApolloReactHooks.useQuery<IrriSatQuery, IrriSatQueryVariables>(IrriSatDocument, baseOptions);
      }
export function useIrriSatLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IrriSatQuery, IrriSatQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IrriSatQuery, IrriSatQueryVariables>(IrriSatDocument, baseOptions);
        }
export type IrriSatQueryHookResult = ReturnType<typeof useIrriSatQuery>;
export type IrriSatLazyQueryHookResult = ReturnType<typeof useIrriSatLazyQuery>;
export type IrriSatQueryResult = ApolloReactCommon.QueryResult<IrriSatQuery, IrriSatQueryVariables>;
export const MapDatesDocument = gql`
    query MapDates {
  mapDates {
    date
    dateurl
  }
}
    `;
export type MapDatesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MapDatesQuery, MapDatesQueryVariables>, 'query'>;

    export const MapDatesComponent = (props: MapDatesComponentProps) => (
      <ApolloReactComponents.Query<MapDatesQuery, MapDatesQueryVariables> query={MapDatesDocument} {...props} />
    );
    
export type MapDatesProps<TChildProps = {}> = ApolloReactHoc.DataProps<MapDatesQuery, MapDatesQueryVariables> & TChildProps;
export function withMapDates<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MapDatesQuery,
  MapDatesQueryVariables,
  MapDatesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, MapDatesQuery, MapDatesQueryVariables, MapDatesProps<TChildProps>>(MapDatesDocument, {
      alias: 'mapDates',
      ...operationOptions
    });
};

/**
 * __useMapDatesQuery__
 *
 * To run a query within a React component, call `useMapDatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMapDatesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMapDatesQuery({
 *   variables: {
 *   },
 * });
 */
export function useMapDatesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MapDatesQuery, MapDatesQueryVariables>) {
        return ApolloReactHooks.useQuery<MapDatesQuery, MapDatesQueryVariables>(MapDatesDocument, baseOptions);
      }
export function useMapDatesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MapDatesQuery, MapDatesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MapDatesQuery, MapDatesQueryVariables>(MapDatesDocument, baseOptions);
        }
export type MapDatesQueryHookResult = ReturnType<typeof useMapDatesQuery>;
export type MapDatesLazyQueryHookResult = ReturnType<typeof useMapDatesLazyQuery>;
export type MapDatesQueryResult = ApolloReactCommon.QueryResult<MapDatesQuery, MapDatesQueryVariables>;
export const MapImageDocument = gql`
    query MapImage {
  mapImage {
    token
    mapid
    name
  }
}
    `;
export type MapImageComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MapImageQuery, MapImageQueryVariables>, 'query'>;

    export const MapImageComponent = (props: MapImageComponentProps) => (
      <ApolloReactComponents.Query<MapImageQuery, MapImageQueryVariables> query={MapImageDocument} {...props} />
    );
    
export type MapImageProps<TChildProps = {}> = ApolloReactHoc.DataProps<MapImageQuery, MapImageQueryVariables> & TChildProps;
export function withMapImage<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MapImageQuery,
  MapImageQueryVariables,
  MapImageProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, MapImageQuery, MapImageQueryVariables, MapImageProps<TChildProps>>(MapImageDocument, {
      alias: 'mapImage',
      ...operationOptions
    });
};

/**
 * __useMapImageQuery__
 *
 * To run a query within a React component, call `useMapImageQuery` and pass it any options that fit your needs.
 * When your component renders, `useMapImageQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMapImageQuery({
 *   variables: {
 *   },
 * });
 */
export function useMapImageQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MapImageQuery, MapImageQueryVariables>) {
        return ApolloReactHooks.useQuery<MapImageQuery, MapImageQueryVariables>(MapImageDocument, baseOptions);
      }
export function useMapImageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MapImageQuery, MapImageQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MapImageQuery, MapImageQueryVariables>(MapImageDocument, baseOptions);
        }
export type MapImageQueryHookResult = ReturnType<typeof useMapImageQuery>;
export type MapImageLazyQueryHookResult = ReturnType<typeof useMapImageLazyQuery>;
export type MapImageQueryResult = ApolloReactCommon.QueryResult<MapImageQuery, MapImageQueryVariables>;
export const NdviDataDocument = gql`
    query NdviData {
  ndvi {
    dt
    source
    zoom
    dc
    cl
    data {
      p75
      min
      max
      median
      p25
      num
      mean
    }
  }
}
    `;
export type NdviDataComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<NdviDataQuery, NdviDataQueryVariables>, 'query'>;

    export const NdviDataComponent = (props: NdviDataComponentProps) => (
      <ApolloReactComponents.Query<NdviDataQuery, NdviDataQueryVariables> query={NdviDataDocument} {...props} />
    );
    
export type NdviDataProps<TChildProps = {}> = ApolloReactHoc.DataProps<NdviDataQuery, NdviDataQueryVariables> & TChildProps;
export function withNdviData<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  NdviDataQuery,
  NdviDataQueryVariables,
  NdviDataProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, NdviDataQuery, NdviDataQueryVariables, NdviDataProps<TChildProps>>(NdviDataDocument, {
      alias: 'ndviData',
      ...operationOptions
    });
};

/**
 * __useNdviDataQuery__
 *
 * To run a query within a React component, call `useNdviDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useNdviDataQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNdviDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useNdviDataQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<NdviDataQuery, NdviDataQueryVariables>) {
        return ApolloReactHooks.useQuery<NdviDataQuery, NdviDataQueryVariables>(NdviDataDocument, baseOptions);
      }
export function useNdviDataLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NdviDataQuery, NdviDataQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<NdviDataQuery, NdviDataQueryVariables>(NdviDataDocument, baseOptions);
        }
export type NdviDataQueryHookResult = ReturnType<typeof useNdviDataQuery>;
export type NdviDataLazyQueryHookResult = ReturnType<typeof useNdviDataLazyQuery>;
export type NdviDataQueryResult = ApolloReactCommon.QueryResult<NdviDataQuery, NdviDataQueryVariables>;
export const SatImagesDocument = gql`
    query SatImages {
  images {
    dt
    type
    dc
    cl
    sun {
      azimuth
      elevation
    }
    image {
      truecolor
      falsecolor
      ndvi
      evi
    }
    tile {
      truecolor
      falsecolor
      ndvi
      evi
    }
    stats {
      ndvi
      evi
    }
    data {
      truecolor
      falsecolor
      ndvi
      evi
    }
  }
}
    `;
export type SatImagesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SatImagesQuery, SatImagesQueryVariables>, 'query'>;

    export const SatImagesComponent = (props: SatImagesComponentProps) => (
      <ApolloReactComponents.Query<SatImagesQuery, SatImagesQueryVariables> query={SatImagesDocument} {...props} />
    );
    
export type SatImagesProps<TChildProps = {}> = ApolloReactHoc.DataProps<SatImagesQuery, SatImagesQueryVariables> & TChildProps;
export function withSatImages<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SatImagesQuery,
  SatImagesQueryVariables,
  SatImagesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, SatImagesQuery, SatImagesQueryVariables, SatImagesProps<TChildProps>>(SatImagesDocument, {
      alias: 'satImages',
      ...operationOptions
    });
};

/**
 * __useSatImagesQuery__
 *
 * To run a query within a React component, call `useSatImagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSatImagesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSatImagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useSatImagesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SatImagesQuery, SatImagesQueryVariables>) {
        return ApolloReactHooks.useQuery<SatImagesQuery, SatImagesQueryVariables>(SatImagesDocument, baseOptions);
      }
export function useSatImagesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SatImagesQuery, SatImagesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SatImagesQuery, SatImagesQueryVariables>(SatImagesDocument, baseOptions);
        }
export type SatImagesQueryHookResult = ReturnType<typeof useSatImagesQuery>;
export type SatImagesLazyQueryHookResult = ReturnType<typeof useSatImagesLazyQuery>;
export type SatImagesQueryResult = ApolloReactCommon.QueryResult<SatImagesQuery, SatImagesQueryVariables>;