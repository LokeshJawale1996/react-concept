

## Concepts in React

|  #  |            Topic             | Source |
| :-: | :----------------------------: | :-------: |
| 01  |     useState     | [Codes](./src/components/useState/) |  
| 02  |     useEffect    | [Codes](./src/components/useEffect/ |  


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

###### useEffect(() => {
###### // Perform side effects here
###### // ...
######  // Clean up the side effects here (optional)
###### return () => {
######   // ...
###### };
###### }, [dependencies]);
