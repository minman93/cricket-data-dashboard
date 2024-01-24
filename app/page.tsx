import { roboto } from "./ui/fonts";

export default function Dashboard() {
  return (
    <div className="flex justify-around py-8 w-full h-full bg-gray-800">
      <h1 className={`${roboto.className} text-4xl font-extrabold text-white`}>
        Welcome To Cricket Stats Dashboard!
      </h1>
    </div>
  );
}
