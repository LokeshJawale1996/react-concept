

## Concepts in React

|  #  |            Topic             | Source |
| :-: | :----------------------------: | :-------: |
| 01  |     useState     | [Codes](./src/components/useState/) |  
| 02  |     useEffect    | [Codes](./src/components/useEffect/) |  
| 03  |     useContext    | [Codes](./src/components/useContext/) |  
| 04  |     useReducer    | [Codes](./src/components/useReducer/) |  
| 05  |     useCallback   | [Codes](./src/components/useCallback/) |  
| 06  |     useMemo   | [Codes](./src/components/useMemo/) |  


## 1.useState

#### This hook is used to add state to your functional components.
#### It allows you to store and manage state data that is local to a component.

## 2.useEffect

#### useEffect is a hook in React that allows you to run some logic (side effects) in your component every time it re-renders. Some examples of side effects include:

##### Updating the document title
##### Fetching data from an API
##### Setting up or cleaning up a subscription
##### Manipulating the DOM
##### Logging some information to the console
#### useEffect is used to perform these side effects after the component has rendered and is used to handle changes in the component's state or props.

 useEffect(() => {
 // Perform side effects here
 // ...
// Clean up the side effects here (optional)
 return () => {
// ...
 };
 }, [dependencies]);

## 3.useContext: 
#### This hook lets you access the context data created by the React.createContext() method. It makes it easier to pass data through your component tree without having to pass props down manually at every level.

## 4.useReducer: 
#### This hook lets you use a reducer function, similar to the one used with the useState hook, to manage state in your functional components. It can be useful for handling complex state updates that depend on the previous state.

## 5.useRef: 
#### This hook lets you create a reference to a DOM element or a value that doesn't change across renderings. It's useful for accessing elements or values that don't change, such as the height of a DOM element, or for holding a value between renderings, such as a timer ID.

## 6.useMemo: 
#### This hook lets you optimize your components by memorizing the results of expensive computations. The memorized value will be returned and re-used as long as the inputs don't change.

These are some of the most commonly used hooks in React, but there are others available as well, such as useCallback, useImperativeHandle, useDebugValue, etc.




