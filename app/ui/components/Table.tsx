"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Player } from "@/app/lib/definitions";

const columns = [
  "Name",
  "Country",
  "Batting Hand",
  "Bowling Arm",
  "Bowling Type",
  "Matches",
  "Innings",
  "Not Out",
  "Runs",
  "High Score",
  "Average",
  "Balls Faced",
  "Strike Rate",
  "Centuries",
  "Half Centuries",
  "Ducks",
  "Fours",
  "Sixes",
];

export function DataTable({ data }: { data: Player[] }) {
  return (
    <div className="text-white">
      <Table>
        <TableCaption>A list of players and their stats.</TableCaption>
        <TableHeader>
          <TableRow>
            {columns.map((column, index) => (
              <TableHead key={index}>{column}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((player, rowIndex) => (
            <TableRow key={rowIndex}>
              <TableCell>{player.name}</TableCell>
              <TableCell>{player.name}</TableCell>
              <TableCell>{player.name}</TableCell>
              <TableCell>{player.name}</TableCell>
              <TableCell>{player.name}</TableCell>
              <TableCell>{player.name}</TableCell>
              <TableCell>{player.name}</TableCell>
              <TableCell>{player.name}</TableCell>
              <TableCell>{player.name}</TableCell>
              <TableCell>{player.name}</TableCell>
              <TableCell>{player.name}</TableCell>
              <TableCell>{player.name}</TableCell>
              <TableCell>{player.name}</TableCell>
              <TableCell>{player.name}</TableCell>

              {/* Add other cells based on the properties you want to display */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
