export default function ProfileCard({ placeName, image, description }) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{placeName}</p>
        </div>
        <div className="content">{description}</div>
      </div>
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="pda logo" />
        </figure>
      </div>
    </div>
  );
}
