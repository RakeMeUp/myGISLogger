import { createContext, ReactNode, useContext, useState } from 'react'

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
    toggleMenu : ()=>void
    vars : Options
    isMenuOpen : boolean
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

    const [vars, setVars] = useState<Options>({
        pay: 1700,
        mon_hrs: 5,
        tue_hrs: 5,
        wed_hrs: 5,
        thu_hrs: 5,
        fri_hrs: 5,
        sat_hrs: 0,
        sun_hrs: 0,
        goal_tree_per_hour: 5
    })
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function setVariables(obj: Options){
        setVars(currVars => { 
            return {...currVars, ...obj}
        })
    }

    function toggleMenu(){
        setIsMenuOpen(prevState => !prevState)
    }

  return (
    <VarContext.Provider value={{
        setVariables,
        vars,
        toggleMenu,
        isMenuOpen
    }}>
        {children}
    </VarContext.Provider>
  )
}
