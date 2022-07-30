import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

export interface Options{
    pay: number
    mon_hrs: number
    tue_hrs: number
    wed_hrs: number
    thu_hrs: number
    fri_hrs: number
    sat_hrs: number
    sun_hrs: number
    goal_tree_per_hour: number
}

interface VarContext{
    setVariables : (obj: Options) => void
    eraseVariables: ()=>void
    toggleMenu : ()=>void
    isMenuOpen : boolean
    vars : Options
}

interface VarContextProviderProps{
    children: ReactNode
}

// type OptionUnion = "pay" | "mon_hrs" | "tue_hrs" | "wed_hrs" | "thu_hrs" | "fri_hrs" | "sat_hrs" | "sun_hrs" | "goal_tree_per_hour"

const VarContext = createContext({} as VarContext)

export function useVarContext(){
    return useContext(VarContext)
}

export function VarContextProvider({children}: VarContextProviderProps) {

    const [vars, setVars] = useState<Options>({} as Options)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const initVars = {
        pay: 1700,
        mon_hrs: 5,
        tue_hrs: 5,
        wed_hrs: 5,
        thu_hrs: 5,
        fri_hrs: 5,
        sat_hrs: 0,
        sun_hrs: 0,
        goal_tree_per_hour: 5
    }

    useEffect(()=>{
        setVars(JSON.parse(localStorage.getItem('VARS') || JSON.stringify(initVars)))
    }, [])

    function setVariables(obj: Options){
        setVars(currVars => { 
            const result = {...currVars, ...obj}
            localStorage.setItem('VARS', JSON.stringify(result))
            return result
        })
    }
    function eraseVariables(){
        localStorage.removeItem('VARS')
    }

    function toggleMenu(){
        setIsMenuOpen(prevState => !prevState)
    }

  return (
    <VarContext.Provider value={{
        setVariables,
        vars,
        toggleMenu,
        isMenuOpen,
        eraseVariables
    }}>
        {children}
    </VarContext.Provider>
  )
}
