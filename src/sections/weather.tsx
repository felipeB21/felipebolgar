import { Clock } from "@/components/clock";
import Image from "next/image";

export async function Weather() {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=Buenos Aires&aqi=no`
  );
  const data = await res.json();

  if (!data) return <p>Weather API is not working...</p>;

  const iconUrl = `https:${data.current.condition.icon}`;
  const temp = data.current.temp_c;

  const tempColor =
    temp > 22
      ? "bg-gradient-to-r from-red-600 to-pink-400 inline-block text-transparent bg-clip-text"
      : temp <= 14
      ? "bg-gradient-to-r from-blue-600 to-indigo-400 inline-block text-transparent bg-clip-text"
      : "dark:text-white";

  return (
    <div className="p-5 dark:bg-stone-800 bg-stone-300 rounded">
      <div className="flex items-center justify-between">
        <p className="text-sm">
          {data.location.name}, {data.location.country}
        </p>
        <div className="flex flex-col">
          <div className="flex items-center">
            <p className={`text-lg font-medium ${tempColor}`}>{temp}°C</p>
            <Image
              src={iconUrl}
              alt={data.current.condition.text}
              width={32}
              height={32}
            />
          </div>
          <Clock />
        </div>
      </div>
    </div>
  );
}
