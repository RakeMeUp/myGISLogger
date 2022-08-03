import { excelObject } from "../interfaces/excelObj";
import { getDay } from "./dataAlgos";

export function compareExcelObjects(currObj: excelObject, nextObj: excelObject){
   return getDay(currObj) === getDay(nextObj) ? 0 : ( getDay(currObj) < getDay(nextObj) ) ? -1 : 1
}