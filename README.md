
## React Course @NTNU

Dette er en React applikasjon som beskriver mange vanlige konsepter som

- Components and the component Hierarchy
- ES6 Javascript with 
    - Arrow functions
    - let, const
    - React classes
- Passing down Props to components
- Updating State 
- Lifecycle methods 
    - componentDidMount
    - render
    - shouldComponentUpdate
    - componentDidUnmount
- Conditional rendering

## React

We're creating an application to showcase yourself, such as a CV or Portfolio page.
You'll use whatever data you want, but a reference could be the personal_information.js 
file included in this projects root folder. 

personal_information.js is created as a Javascript object, containing some personal 
information, and then arrays of your different experiences. Feel free to add/remove 
arrays and try out different combinations, based on what you want to present about yourself.

We'll directly use this file to present data in our application. The file exports
the object and is imported in App.js, where we keep most the Application State and functionality.

App.js State and Functions are sent as Props to Child Components.


### Tasks

Create your own personal_information.js with your own or some mock data. Feel free to
add arrays and other information you want to present. Export it and import it 
to your App.js.

Create a Lifecycle method componentDidMount in App.js which sets the "user" state 
to the content of your document. You can either do this, or create a function and 
call it on the click of a button. 

Create a PageContent.js file and code a React Class for holding your personal_information 
data which will be in the App.js state (user). Send it down to the PageContent component
as props. 

Create a reusable component to actually present your data. Example is in ```src/components/PersonalEntry.js```
Here we'll use a JS array function to retrieve all data from that array. Implement this reusable component
in your PageContent.js file and send down an array for each entry you had in personal_information.js.
```
Array.map( (arrayItem) => {
    return (
        <h1>{arrayItem.title}</h1>
    )
})
```

Currently, we have displayed conditional data based on the Application state. Try to
install React Router and implement a tab view in your application. You can see how this
implementation is done in this projects ```/src/components/TabRouting``` folder. 

- Installing React Router: ``` npm install --save react-router-dom```
- Importing it to your application: ``` import { BrowserRouter } from "react-router-dom"```

If you have any personal video files or images you want to showcase, you can create a
Gallery.js (or use the one provided) which holds all your images. We've created a css class 
for this, gallery-container, which you can use to get a grid of squares.
You can see how this implementation is done in this projects ```/src/components/Gallery``` folder. 
Try to place this gallery wherever in your content you want. 


## Redux

We've integrated the application with Redux. This includes 
- "Actions" are called from the components (such as button, input or in componentDidMount) 
- "Reducers" are called from the Actions, which structures the data being stored
- "Store" is the single place you store all application state and is updated from Reducers.

We've implemented Redux with getting images from an Instagram account.
We also added empty functions for setting the User state object in the store. 

### Tasks

#### Check the Instagram logs created in by Redux 

Open the DevTools (F12) and refresh the website. We've added Redux-Logger to log every state update in Redux. Open the objects
that's being logged (prevState, current, nextState) and try to see how the store is being updated in each log.


#### Implement User in the Redux store 

We want to move the user from ```App.js this.state``` to the Redux store. We've added empty functions to do this in the 
```src/redux/actions/user-action.js, src/redux/reducers/user-reducer.js```. You want to implement the Redux functionality in these, and 
call the Redux action instead of the ```App.js this.setState({user})```. 
When adding to the empty skeleton functions, you can  use the Instagram implementation as reference, 
but these functions are asynchronous (to fetch the Instagram API), you don't need this for the user example. 

Make sure that the user object is retrieved from the Redux state instead of the App.js state. You can see the Instagram example in
```src/components/PageContent.js``` where we get the Redux state in our component.


#### Create a greeting form with Redux

Create a Form in your application which posts a greeting to your application. Create these files to implement your own Redux 
action and reducer:

```src/redux/actions/greeting-action.js, src/redux/reducers/greeting-reducer.js```

In these files, create actions for ```handleInputChange, storeMessage``` and a reducer in the same format we did earlier. In your reducer, you want to store the state
for the 2 input fields. Call them "name" and "message". You also need a state variable array called "messages" which holds all your messages.  
These should be updated from the ```<input onChange={handleInputChange} />``` which updates the reducer state. 

It can be a bit tricky to update the Redux store from input elements, you need to give the input a name which will be used in a
function called from the input element, which then calls the ```greeting-action.js handleInputChange function```.

This is an implementation of the function you can use in your React component. 

- Add it to the component
- Call it from input
- Give input their names "name", "messages"
- Make sure the function calls the Redux action with the input "name" and "value" 

```
    handleInputChange = (event) => {
        action.handleInputChange(event.target.name, event.target.value)
    
    }
```

Create a button in the form which invokes the action ```<button onClick={storeMessage}```. stores the current message in 
your Reducer "messages" array. 

Make sure to display data from the Redux store "messages" array in a React component (the same way we did with instagram and user)
```
store: {
    messages: [
        { name: "Greetors name", message: "My message to you!" },
        { name: "Another name", message: "A special delivery for you :)" },
    ]
    
```

## Hosting to AWS

[Link to tutorial: Hosting your React application with AWS in 30 minutes](https://itnext.io/hosting-your-react-application-with-aws-in-30-minutes-623f6539d92d)

I've provided a link for a walkthrough on how to host your application on AWS. We'll go through this 
in the end of the course, so that you can try it yourself later. 