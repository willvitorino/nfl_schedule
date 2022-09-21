import type { ResponseSchedule } from "./responseSchedule"

export type Response = {
  config: Object,
  data: ResponseSchedule,
  headers: Object,
  request: XMLHttpRequest,
  status: number,
  statusText: string
}