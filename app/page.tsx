import { roboto } from "./ui/fonts";


export default function Dashboard() {
  return (
    <div>
      <p className={`${roboto.className} text-2xl`}>
        Welcome To Cricket Stats Dashboard!
      </p>
    </div>
  );
}
