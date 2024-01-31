"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";
import { ScatterGraph } from "./ScatterGraph";
import { BarChart } from "./BarChart";
import { DataTable } from "./Table";
import { HeadToHead } from "./HeadToHead";
import { ScatterDataPoint } from "../../lib/definitions";

export default function ChartTabs({ data }: ScatterDataPoint[]) {
  let tabData = [

    {
      value: "One Metric",
      label: "One Metric",
      content: <BarChart data={data} />,
    },
    {
      value: "Two Metrics",
      label: "Two Metrics",
      content: <ScatterGraph data={data} />,
    },
    {
      value: "Head To Head",
      label: "Head To Head",
      content: <HeadToHead data={data} />,
    },
  ];
  return (
    <div className="px-4 pb-8">
      <Tabs defaultValue={tabData[0].value} className="w-full">
        <TabsList>
          {tabData.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabData.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            {tab.content}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
