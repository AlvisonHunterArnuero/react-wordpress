import { useContext, useEffect } from 'react';
import DataContext from './DataProviderContext';

import Card from './components/Card';

function App() {
  const { data, fetchData } = useContext(DataContext);
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-wrap min-h-screen gap-4 p-4">
      {data.map((item) => {
        const {
          id,
          title,
          excerpt,
          date,
          jetpack_featured_media_url,
        } = item;
        return (
          <Card
            key={item.id}
            cardData={{
              id,
              title,
              excerpt,
              date,
              jetpack_featured_media_url,
            }}
          />
        );
      })}
    </div>
  );
}

export default App;
