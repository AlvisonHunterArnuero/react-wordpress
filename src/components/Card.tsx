import { CardProps } from '../Types';
import { getHumanReadableDate } from '../utils';

function Card(props: CardProps) {
  return (
    <div className="max-w-[480px] min-w-[380px] mx-auto my-4">
      <div className="relative flex flex-col text-gray-700 bg-slate-200 shadow-md bg-clip-border rounded-xl w-96">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-slate-200 bg-clip-border rounded-xl h-96">
          <img
            src={props.cardData.jetpack_featured_media_url}
            alt={props.cardData.title.rendered}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="uppercase block mx-auto font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              <span
                dangerouslySetInnerHTML={{
                  __html: props.cardData.title.rendered,
                }}
              />
            </p>
          </div>
          <p className="text-xs block mb-3 font-sans antialiased font-medium leading-relaxed text-blue-gray-900">
            Post created on{' '}
            <span
              dangerouslySetInnerHTML={{
                __html: getHumanReadableDate(props.cardData.date),
              }}
            />
          </p>
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
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
  )
}

export default Card;
