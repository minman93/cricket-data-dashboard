export type Player = {
  id: number;
  name: string;
  country: string;
  batting_hand: string;
  bowling_arm: string;
  bowling_type: string;
  t20BattingMatches: number;
  t20BattingInnings: number;
  t20BattingNotOut: number;
  t20BattingRuns: number;
  t20BattingHighScore: string;
  t20BattingAverage: number;
  t20BattingBallsFaced: number;
  t20BattingStrikeRate: number;
  t20BattingCenturies: number;
  t20BattingHalfCenturies: number;
  t20BattingDucks: number;
  t20BattingFours: number;
  t20BattingSixes: number;
};
export type ScatterDataPoint = {
  x: number | null;
  y: number | null;
  name: string | null;
};

export type GraphDataPoints = {
  data: ScatterDataPoint[];
};

export type PlayerData = {
  data: Player[];
};