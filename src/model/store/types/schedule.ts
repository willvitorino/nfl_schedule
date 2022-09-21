import type { TeamGameInfo } from './team_game_info'

export type Schedule = {
  date: string,
  venue: string,
  name: string,
  shortName: string
  awayTeam: TeamGameInfo,
  homeTeam: TeamGameInfo
}

export interface iSchedule {
  date: string,
  venue: string,
  name: string,
  shortName: string
  awayTeam: TeamGameInfo,
  homeTeam: TeamGameInfo
}