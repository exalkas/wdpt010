import { createContext, useReducer } from "react"

export const AppContext = createContext()

export default function ContextProvider({children}) {

    const reducer = (state, action) => {

        switch (action.type) {

            case ('login'):
                return {
                    ...state,
                    user: action.payload
                }
            case ('getPosts'):
                return {
                    ...state,
                    posts: action.payload
                }
            case ('addPost'):
                return {
                    ...state,
                    posts: [...state.posts, action.payload]
                }
            default:
                return
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        user: {},
        posts: []
    })

    return <AppContext.Provider value={{state, dispatch}}>
        {children}
    </AppContext.Provider>
}