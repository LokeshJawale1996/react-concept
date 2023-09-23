#### Custom Hooks Creation Process Details

|    #    |                                           Details                                            |
| :-----: | :------------------------------------------------------------------------------------------: |
| Step 01 |                             Make a function called useSomething                              |
| Step 02 |           Find all the non-JSX expressions that refer 1-2 related pieces of state            |
| Step 03 |                       Cut them all out, paste them into 'useSomething'                       |
| Step 04 |                         Find 'not defined' errors in your component                          |
| Step 05 |        In your hook, return an object that contains the variables the component needs        |
| Step 06 |       In the component call your hook. Destructure the properties the component needs        |
| Step 07 | Find 'not defined' errors in the hook. Pass the missing variables in as argument to the hook |
| Step 08 |                        Rename the hook to something more meaningfull                         |
| Step 09 |                   Rename returned properties to something more descriptive                   |

#### some Custom Hooks in this Project

|  #  |   Hook Name   |                Path                |         Path of Component in which this hook is used         |
| :-: | :-----------: | :--------------------------------: | :----------------------------------------------------------: |
| 01  | useNavigation | [code](../hooks/use-Navigation.js) | [code1](../components/Link.js) [code2](../components/Route.js) |
| 02  |  useCounter   |  [code](../hooks/use-Counter.js)   |               [code](../pages/CounterPage.js)                |
| 01  |    useSort    |    [code](../hooks/use-Sort.js)    |            [code](../components/SortableTable.js)            |
