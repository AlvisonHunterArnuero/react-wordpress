import { useContext, useEffect } from 'react';
import DataContext from './DataProviderContext';

import Card from './components/Card';
import Header from './components/Heaader.tsx';
import Footer from './components/Footer.tsx';

function App() {
  const { data, fetchData } = useContext(DataContext);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-screen max-w-screen-xl justify-center items-center mx-auto">
      <Header />
      <div className="w-full flex flex-wrap justify-center md:justify-between">
        {data.map((item) => {
          const { id, title, excerpt, date, jetpack_featured_media_url } = item;
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
      <Footer />
    </div>
  );
}

export default App;
