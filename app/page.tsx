import { roboto } from "./ui/fonts";

export default function Dashboard() {
  return (
    <div className="flex justify-center flex-col py-4 px-8 w-full h-full bg-gray-800 rounded-md">
      <h1
        className={`${roboto.className} text-4xl font-extrabold text-white w-full py-2`}
      >
        Welcome To Cricket Stats Dashboard!
      </h1>
      <p className={`${roboto.className} text-xl text-white w-full py-2`}>
        Select a tab to start exploring!
      </p>
    </div>
  );
}
