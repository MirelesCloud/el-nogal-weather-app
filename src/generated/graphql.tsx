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

export type CurrentWeather = {
   __typename?: 'CurrentWeather';
  dt?: Maybe<Scalars['Int']>;
  weather?: Maybe<Array<Maybe<Weather>>>;
  main?: Maybe<Main>;
  wind?: Maybe<Wind>;
  clouds?: Maybe<Clouds>;
};

export type Main = {
   __typename?: 'Main';
  temp?: Maybe<Scalars['Float']>;
  pressure?: Maybe<Scalars['Float']>;
  humidity?: Maybe<Scalars['Float']>;
  temp_min?: Maybe<Scalars['Float']>;
  temp_max?: Maybe<Scalars['Float']>;
};

export type Query = {
   __typename?: 'Query';
  weather?: Maybe<CurrentWeather>;
};


export type Weather = {
   __typename?: 'Weather';
  id?: Maybe<Scalars['ID']>;
  main?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
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
    & { main: Maybe<(
      { __typename?: 'Main' }
      & Pick<Main, 'temp' | 'temp_min' | 'temp_max' | 'pressure' | 'humidity'>
    )>, wind: Maybe<(
      { __typename?: 'Wind' }
      & Pick<Wind, 'speed' | 'deg'>
    )>, clouds: Maybe<(
      { __typename?: 'Clouds' }
      & Pick<Clouds, 'all'>
    )> }
  )> }
);


export const CurrentWeatherDocument = gql`
    query CurrentWeather {
  weather {
    dt
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