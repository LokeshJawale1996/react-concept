### FACTS OF THE APP

##### 1)The SearchBar Component contains the text input a user will type into

##### 2) The user 'enter' key in the text input means we need to do a search.

##### 3) We have a function that will turn a search term into an array of images objects.

##### 4) The array of image objects need to get into the ImageList component


#### 1) SearchBar Component
i)import useState and use it
const [term,setTerm] = useState([]);

ii)In SearchBar component there is search box we are searching for anything

iii)when we search for anything the the input we entered is the value of the state(term)

iv)when we searched and entered the onChange event fired(handleChange event we are setting the entered value) using setTerm() state

vv)SearchBar component received props onSubmit
and in handleFormSubmit we are passing the term in props
onSubmit(term)



#### 2.1) App Component
i)we imported useState and use it
  const [images,setImages] =useState([]);

ii)imported all required components searchImages function which call api

iii)SearchBar is child component of App component so we passed props onSubmit in child component

iv)so we are executing the handleSbmit as value of onSubmit in parent component App.

v)in handleSbmit event we ares setting state setImages(result)
and in result we are saving the data fetched from GET api call from searchImages(term)
here we are passing term in searchImages.


#### 3 ImageList Component

i)in this component we are returning the list of imageShow component

ii)ImageList is child component of App component so we passed props images in child component
which are received from parent component App.

iii)we are doing mapping in child component ImageList on received props data (images)

iv)and for each individual data we are rendering a special component ImageShow and storing whole data in renderedImages

v)while returning JSX of ImageList component we are displaying renderedImages


#### 4 ImageShow Component

i)ImageShow is child component of ImageList component 

ii)so we passed props image in ImageShow which is child component
which are received from parent component ImageList.

iii)we are finally displaying the images as per our search in these component
