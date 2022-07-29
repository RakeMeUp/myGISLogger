import { Preview } from "@mui/icons-material"
import { createContext, ReactNode, useContext, useState } from "react"
import { excelObject } from "../interfaces/excelObj"

interface DataContext{
    addData: (obj: excelObject)=> void
    removeData: (obj: excelObject)=> void
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


    function addData(obj: excelObject){
        try{
            if( !isNameMatching(obj, 'Hetes Sándor') ) throw new Error('Wrong Operator, Hetes Sándor does not match with ' + obj.Operator)
            
            setEntries(currentObjects =>{
                // check if item not in currentObjects array
                if(currentObjects.find(item=>  JSON.stringify(item) === JSON.stringify(obj) ) == null){
                    return[...currentObjects, obj];
                }else{
                    //this is probably bad 
                    return [...currentObjects];
                }
            })
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
        entries
    }}>
        {children}
    </DataContext.Provider>
  )
}