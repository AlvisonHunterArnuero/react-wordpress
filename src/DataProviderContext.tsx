import { createContext, useState} from 'react';
import { DataContextProps } from './Types';
import * as Sentry from '@sentry/react';

const DataContext = createContext<DataContextProps>({
  data: [],
  fetchData: () => {},
});

export const DataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState([]);

  const publicAPIDomain = 'https://public-api.wordpress.com';
  const domainSuffix = '/wp/v2/sites';
  const userDomain = 'alvisonhunter.wordpress.com/posts';

  const apiUrl = `${publicAPIDomain}${domainSuffix}/${userDomain}`;

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      const newData = await response.json();
      setData(newData);
    } catch (error) {
      console.error('Error fetching data:', error);
      Sentry.captureException(new Error('Error Fetching Data'));
    }
  };

  return (
    <DataContext.Provider value={{ data, fetchData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
