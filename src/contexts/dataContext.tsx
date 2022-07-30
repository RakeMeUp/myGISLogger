import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { excelObject } from "../interfaces/excelObj"
import fixDate from "../interfaces/fixDate"

interface DataContext{
    addData: (obj: excelObject)=> void
    removeData: (obj: excelObject)=> void
    getData: ()=> excelObject[] | []
    eraseData: ()=>void
    getSumOfMinutes: (arr: excelObject[])=> number
    entries: excelObject[]
}

interface DataContextProviderProps{
    children: ReactNode
}
const DataContext = createContext({} as DataContext)
export function useDataContext(){
    return useContext(DataContext)
}

export function DataContextProvider({children}: DataContextProviderProps) {

    const [entries, setEntries] = useState<excelObject[]>([])

    useEffect(()=>{
        setEntries(getData())
    },[])

    function getData(){
       return fixDate(JSON.parse(localStorage.getItem("DATA") || "[]"))
    }

    function eraseData(){
        localStorage.removeItem('DATA'),
        setEntries([])
    }

    function addData(obj: excelObject){
        try{
            if( !isNameMatching(obj, 'Hetes Sándor') ) throw new Error('Wrong Operator, Hetes Sándor does not match with ' + obj.Operator)
            
            setEntries(currentObjects =>{
                // check if item not in currentObjects array
                if(currentObjects.find(item=>  JSON.stringify(item) === JSON.stringify(obj) ) == null){
                    const result = [...currentObjects, obj]
                    localStorage["DATA"] = JSON.stringify(result);
                    return result;
                }else{
                    //this is probably bad 
                    return [...currentObjects];
                }
            });
        }catch(e: any){
            console.log(e.message)
        }
    }

    function removeData(obj: excelObject){
        setEntries(currentEntries =>{
            return currentEntries.filter(e => JSON.stringify(e) !== JSON.stringify(obj))
        })
    }

    function getSumOfMinutes(arr: excelObject[]){
        return arr.reduce((acc, curr)=> { return acc + curr.Duration}, 0)
    }

    function isNameMatching(obj: excelObject, name: string){
        return name === obj.Operator
    }

  return (
    <DataContext.Provider value={{
        addData,
        removeData,
        getSumOfMinutes,
        entries,
        getData,
        eraseData
    }}>
        {children}
    </DataContext.Provider>
  )
}