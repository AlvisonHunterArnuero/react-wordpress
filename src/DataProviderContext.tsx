import { createContext, useState} from 'react';
import {FetchedDataProps} from './Types'

interface DataContextProps {
  data: FetchedDataProps[];
  fetchData: () => void;
}

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

    const apiUrl =
      'https://public-api.wordpress.com/wp/v2/sites/alvisonhunter.wordpress.com/posts';

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
        const newData = await response.json();
      setData(newData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <DataContext.Provider value={{ data, fetchData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
