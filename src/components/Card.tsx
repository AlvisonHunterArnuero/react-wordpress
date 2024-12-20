import { useState } from 'react';
import { CardProps } from '../Types';
import { getHumanReadableDate } from '../utils';

function Card(props: CardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="max-w-[720px] mx-auto p-2 basis-1/3">
      <div className="relative flex flex-col bg-slate-800 shadow-md bg-clip-border rounded-xl w-[400px] h-[750px]">
        <div className="relative mx-4 mt-4 overflow-hidden bg-clip-border rounded-xl h-96">
          <img
            src={props.cardData.jetpack_featured_media_url}
            alt={props.cardData.title.rendered}
            onLoad={handleImageLoad}
            className={
              isLoading
                ? 'opacity-0'
                : 'opacity-100 transition-opacity duration-300 object-cover w-full h-full'
            }
          />
        </div>
        <div className="p-6">
          <div className="flex flex-col items-center mb-2">
            <p className="uppercase text-center font-sans text-sm antialiased leading-relaxed text-sky-200">
              <span
                dangerouslySetInnerHTML={{
                  __html: props.cardData.title.rendered,
                }}
              />
            </p>
            <p className="text-xs my-3 font-sans antialiased font-medium leading-relaxed text-amber-500">
              Post created on
              <span
                className="mx-2 text-xs my-3 font-sans antialiased font-medium leading-relaxed text-yellow-300"
                dangerouslySetInnerHTML={{
                  __html: getHumanReadableDate(props.cardData.date),
                }}
              />
            </p>
          </div>

          <p className="block font-sans text-sm antialiased font-normal leading-normal text-teal-100 opacity-75">
            <span
              dangerouslySetInnerHTML={{
                __html: props.cardData.excerpt.rendered,
              }}
            />
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            type="button"
          >
            Leer Mas...
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;