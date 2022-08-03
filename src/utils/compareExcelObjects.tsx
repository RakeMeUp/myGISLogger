import { excelObject } from "../interfaces/excelObj";
import { getDay } from "./dataAlgos";
import { timeToDecimal } from "./timeToDecimal";

export function compareExcelObjects(currObj: excelObject, nextObj: excelObject){
   return getDay(nextObj) - getDay(currObj) || timeToDecimal(currObj.Start) - timeToDecimal(nextObj.Start)
}