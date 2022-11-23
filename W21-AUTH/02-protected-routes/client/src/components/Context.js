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
            case ('like'):

                const oldPosts = [...state.posts]

                const idx = oldPosts.findIndex(item => item._id === action.payload._id)
                console.log("🚀 ~ idx", idx)
                console.log("🚀 ~ action", action)
                
                oldPosts[idx].likes = [...action.payload.likes]
                console.log("🚀 ~ state", state)
                
                return {
                    ...state,
                    posts: oldPosts
                }
            
            case ('comment'):

                const oldPostsComments = [...state.posts]

                const idxComment = oldPostsComments.findIndex(item => item._id === action.payload._id)

                oldPostsComments[idxComment].comments = [...action.payload.comments]
                return {
                    ...state,
                    posts: oldPostsComments
                }

            case 'logout':

                return {
                    user: {},
                    posts: []
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