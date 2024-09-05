- Created a vite application 
- Used Material UI to create the basic login page and done styling
- Created login/signup using google service
- Created a new project in the google cloud 
- Got the client id from the project by setting urls from which this can be called and also added the emails for which this login can be valid for development purposes
- now impleted the login logic by checking if the user is successfully logged in or not 
- created an account provider context using context API
   This is the structure we need to follow for that
    - create a context using `createContext()` hook and initialize it with null
        `const context = createContext(null)`
    - now create the context component and then using the `provider` attribute of the context
        ```
            const contextProrivder = ({children}) => {
                return(
                    <context.provider values = {{<__values for which context is needed__>}}>
                        {children}
                    <context.provider>
                )
            }
        ```
    - Now export the contextProvider to every where and then wrap every component of app in the app
- Create components of both the left side chat section and right side chat section
- 