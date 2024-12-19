import { createContext, useState} from 'react';
import { DataContextProps, FetchedDataProps } from './Types';
import * as Sentry from '@sentry/react';

/**
 * React Context to provide data and fetch functionality across the application.
 */
const DataContext = createContext<DataContextProps>({
  data: [],
  fetchData: () => {},
});

/**
 * DataProvider component to supply data and fetch functionality to child components.
 * @param {Object} props - The properties passed to the provider.
 * @param {React.ReactNode} props.children - The child components that will consume the context.
 * @returns {JSX.Element} - The context provider wrapping child components.
 */
export const DataProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  /** State for storing fetched data and its updater. */
  const [data, setData] = useState<FetchedDataProps[]>([]);

  /** The public API base domain. */
  const publicAPIDomain = 'https://public-api.wordpress.com';

  /** The API domain suffix path. */
  const domainSuffix = '/wp/v2/sites';

  /** The user-specific domain path for fetching posts. */
  const userDomain = 'alvisonhunter.wordpress.com/posts';

  /** The complete API URL constructed dynamically. */
  const apiUrl = `${publicAPIDomain}${domainSuffix}/${userDomain}`;

  /**
   * Fetches data from the API and updates the `data` state.
   * Logs an error to Sentry if the fetch operation fails.
   */
  const fetchData = async (): Promise<void> => {
    try {
      const response = await fetch(apiUrl);
      const newData = await response.json();
      setData(newData);
    } catch (error) {
      console.error('Error fetching data:', error);
      Sentry.captureException(new Error(`Error Fetching Data: ${error}`));
    }
  };

  return (
    <DataContext.Provider value={{ data, fetchData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
