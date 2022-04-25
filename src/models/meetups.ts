import {IComment} from "./comments"

export interface Meetups {
  id: string,
  title: string,
  description: string,
  location: string,
  date: string //YYYY-mm-dd,
  time: string,
  comments: IComment[],
  attending: number
}