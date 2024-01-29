import { roboto } from "./ui/fonts";

export default function Dashboard() {
  return (
    <div className="flex justify-center flex-col p-8 w-full h-full bg-gray-800 rounded-md bg-cover bg-[url(https://wallpapercosmos.com/w/full/b/1/6/1112848-3200x2142-desktop-hd-cricket-background-photo.jpg)] ">
      <div className="flex justify-center flex-col w-96  h-full opacity-80 bg-white rounded-md py-4 px-8">
        <h1
          className={`${roboto.className} text-4xl font-extrabold text-gray-800 w-full `}
        >
          Welcome To Cricket Stats Dashboard!
        </h1>
        <p className={`${roboto.className} text-xl text-gray-800 w-full py-2`}>
          Select a tab to start exploring!
        </p>
      </div>
    </div>
  );
}
