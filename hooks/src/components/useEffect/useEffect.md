## 2.1 Dependencies argument
dependencies argument of useEffect(callback, dependencies) lets you control when the side-effect runs. If dependencies are:

### A) Not provided: the side-effect runs after every rendering.

import { useEffect } from 'react';
function MyComponent() {
  useEffect(() => {
    // Runs after EVERY rendering
  });  
}


 ### B) An empty array []: the side-effect runs once after the initial rendering.

import { useEffect } from 'react';
function MyComponent() {
  useEffect(() => {
    // Runs ONCE after initial rendering
  }, []);
}


### C) Has props or state values [prop1, prop2, ..., state1, state2]: the side-effect runs once after initial rendering and then only when any dependency value changes.

import { useEffect, useState } from 'react';
function MyComponent({ prop }) {
  const [state, setState] = useState('');
  useEffect(() => {
    // Runs ONCE after initial rendering
    // and after every rendering ONLY IF `prop` or `state` changes
  }, [prop, state]);
}
Let's detail cases B) and C) since they're often used.