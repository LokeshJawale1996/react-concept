import './ImageList.css'
import ImageShow from "./ImageShow";
function ImageList({images}) {
  // (images props) received from parent component App.js we are saved the images redered in on variale
  //we add map function/(we do mapping) on received props images from parent component and returning ImageShow component for each one

  const rederedImages = images.map((image) => {
    return (
    // <div key={image.id}>
       <ImageShow  key={image.id} image={image}/>
    // </div>
    )
  })
    return (
      <div className='image-list'>
         ImageList:{rederedImages}
      </div>
    );
  }
  
  export default ImageList;
  