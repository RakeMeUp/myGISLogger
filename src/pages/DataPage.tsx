import { useEffect, useState } from "react";
import DataTable from "../components/Statistics/DataTable";
import TableComp from "../components/Statistics/TableComp";
import { useDataContext } from "../contexts/dataContext";
import { excelObject } from "../interfaces/excelObj";
import excelToObject from "../utils/excelToObject";

function DataPage() {
  const [isTableOpen, setIsTableOpen] = useState(false)

  const {addData, entries} = useDataContext()

  
  useEffect(() => {
    const handlePasteAnywhere = (event:any) => {  
      let data = event.clipboardData.getData('text')
      let object: excelObject[] = excelToObject(data);
      object.forEach(e=>{
        addData(e)
      })
    };

    window.addEventListener('paste', handlePasteAnywhere);

    return () => {
      window.removeEventListener('paste', handlePasteAnywhere);
    };
  }, []);


  return (
    <div>
      <h1>DataPage</h1>
      <p>Paste it HERE</p>
      <button onClick={()=>{setIsTableOpen(!isTableOpen)}}>Table</button>
      {isTableOpen ? <DataTable/> : null}
    </div>
  );
}

export default DataPage