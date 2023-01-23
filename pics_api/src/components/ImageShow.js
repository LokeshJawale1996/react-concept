
function ImageShow({image}) {
  //here image's are received from parent component imageList
    return (
      <div>
         <img src={image.urls.small} alt={image.alt_description}/>
      </div>
    );
  }
  
  export default ImageShow;
  