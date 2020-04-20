1. What problem does the context API help solve?

    `Context API allows the user to share state data across an application. It also simplifies prop drilling as it shares it with other components that it's wrapped in.`

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

`In redux state management...`
`Actions are events or processes that occur and dispatch data in the form of a payload to your app.`

`Reducers are functions that declare what change in state the app wants, utilizing the initial state before changing to ensure a smooth state change.`

`The store is the hub that essentially stores the information you want. It must take an action to release data. `

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

`Application state is global. Component is specific state inside the individual app components.`


4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

`Thunk is a plugin library that acts a =s a logger, which essentially implements middleware which takes care of the state change process. It prevents bugs from occuring that may skip a specific state change process by running over a checklist to ensure each step is complete before changing state.`


5. What is your favorite state management system you've learned and this sprint? Please explain why!

`I personally like Context API because of the simplicity. I like redux, but I like the simplicity of being able to easily utilize hooks in the main app and allow Context to manage the state much more simply.`
