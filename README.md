
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

## Task description

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

- Installing React Router: ``` npm install -save react-router-dom```
- Importing it to your application: ``` import { BrowserRouter } from "react-router-dom"```


If you have any personal video files or images you want to showcase, you can create a
Gallery.js which holds all your images. 


## Onwards

[Link to tutorial: Hosting your React application with AWS in 30 minutes](https://itnext.io/hosting-your-react-application-with-aws-in-30-minutes-623f6539d92d)

I've provided a link for a walkthrough on how to host your application on AWS. We'll go through this 
in the end of the course, so that you can try it yourself later. 