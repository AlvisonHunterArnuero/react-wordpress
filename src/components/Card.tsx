import { getHumanReadableDate } from "../utils";

type cardDataObj = {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string | TrustedHTML};
  date: string;
  jetpack_featured_media_url: string;
  meta?: {
    reader_suggested_tags: string[];
  }
};
type CardProps = {
  cardData: cardDataObj;
};

function Card(props: CardProps) {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="max-w-[720px] mx-auto">
          <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
              <img
                src={props.cardData.jetpack_featured_media_url}
                alt={props.cardData.title.rendered}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="block mx-auto font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: props.cardData.title.rendered,
                    }}
                  />
                </p>
              </div>
              <p className="text-xs block mb-3 font-sans antialiased font-medium leading-relaxed text-blue-gray-900">
                Post created on <span  dangerouslySetInnerHTML={{
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
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                type="button"
              >
                Read more...
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card