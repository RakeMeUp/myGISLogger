//Paste structure:
//Project_name \t Managed_Area \t LAS_name \t Operator \t Date \t Start \t End \t Duration \r\n

//takes excel rows, turns them into an object, returns an array size [1 : inf[
import { excelObject } from '../interfaces/excelObj';

function commaToDot(str: string){
  let replaced = str.replace(/,/g, '.')
  return replaced
}


function excelToObject(str: string) {
    let linesArr: Array<string> = str.trim().split('\n');
    let resultArr: excelObject[] = linesArr.map(line =>{

      const trimmed = line.trim().split('\t');
      if(trimmed.length != 8) throw new Error('Paste Error: Wrong Format')

      return {
        'Project name': trimmed[0],
        'Managed Area': trimmed[1],
        'LAS name': trimmed[2],
        'Operator': trimmed[3],
        'Date': new Date(trimmed[4]),
        'Start': trimmed[5],
        'End': trimmed[6],
        'Duration': +commaToDot(trimmed[7]),
      }
    })
//HORRIBLY HARD CODED!!!
  return resultArr;
}

export default excelToObject