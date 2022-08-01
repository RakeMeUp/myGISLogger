import { excelObject } from "../interfaces/excelObj";

export default function fixDate(array: excelObject[]){
    return array.map(item =>{
        item.Date = new Date(item.Date);
        return item;
    })
}