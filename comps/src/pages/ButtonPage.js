import React from 'react'
import {GoBell,GoDatabase} from 'react-icons/go'
import Button from '../components/Button'
function ButtonPage(){
  const handleClick = () => {
    console.log("clicked");
  }
  return(
    <div>
      <div>
       <Button secondary outline rounded onClick={handleClick}>
        <GoBell className='mr-1'/>
        Click me!
        </Button>
      </div>
      <div>
      <Button danger outline>
        Buy Now!
        </Button>
      </div>
      <div>
      <Button warning>
        <GoDatabase className='mr-1'/>
        See Deal!!
        </Button>
      </div>
      <div>
      <Button secondary outline>Hide Ads!</Button>
      </div>
      <div>
      <Button primary rounded>Something!</Button>
      </div>
    </div>
  )
}

export default ButtonPage;