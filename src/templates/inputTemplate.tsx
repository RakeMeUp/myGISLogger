import {Options} from '../contexts/varContext'

interface InputType{
  id: number
  name: keyof Options
  type: "number"
  placeholder: string
  label: string
}

export const inputTemplate: Array<InputType> = [
  {
    id: 1,
    name: "pay",
    type: "number",
    placeholder: "Pay",
    label: "Pay",
  },
  {
    id: 2,
    name: "goal_tree_per_hour",
    type: "number",
    placeholder: "Goal tree/hr",
    label: "Goal tree/hr",
  },
  {
    id: 3,
    name: "mon_hrs",
    type: "number",
    placeholder: "Monday",
    label: "Monday",
  },
  {
    id: 4,
    name: "tue_hrs",
    type: "number",
    placeholder: "Tuesday",
    label: "Tuesday",
  },
  {
    id: 5,
    name: "wed_hrs",
    type: "number",
    placeholder: "Wednesday",
    label: "Wednesday",
  },
  {
    id: 6,
    name: "thu_hrs",
    type: "number",
    placeholder: "Thursday",
    label: "Thursday",
  },
  {
    id: 7,
    name: "fri_hrs",
    type: "number",
    placeholder: "Friday",
    label: "Friday",
  },
  {
    id: 8,
    name: "sat_hrs",
    type: "number",
    placeholder: "Saturday",
    label: "Saturday",
  },
  {
    id: 9,
    name: "sun_hrs",
    type: "number",
    placeholder: "Sunday",
    label: "Sunday",
  },
];
