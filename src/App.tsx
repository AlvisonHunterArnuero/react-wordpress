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
    <div className="w-screen flex flex-col border-2 p-4 h-screen bg-yellow-500">
      {data.map((item) => {
        const {
          id,
          title,
          excerpt,
          date,
          jetpack_featured_media_url,
        } = item
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
        )
      })}
    </div>
  )
}

export default App;
