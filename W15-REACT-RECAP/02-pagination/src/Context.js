import { useReducer, createContext } from "react";

export const AppContext = createContext()

export default function MyContext({children}) {

    // const [state, setState] = useState({})

    let alkis = 234

    const reducer = (state, action) => {

        switch(action.type) {

            case 'add':

            // action.payload
            return state

            case 'delete':

            return state
            
            default:


        }

    }

    const [state, dispatch] = useReducer(reducer, {})

    return <AppContext.Provider value={{state, dispatch, alkis}}>

        {children}
    </AppContext.Provider>
}