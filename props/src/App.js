import "bulma/css/bulma.css";

import ProfileCard from "./ProfileCard";
import ProfileOne from "./images/P1.jpg";
import ProfileTwo from "./images/p2.jpg";
import ProfileThree from "./images/sars.jpg";

function App() {
  return (
    <div className="App">
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Best Place To Visit In Pune</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                placeName="1. dagdusheth ganpati"
                description="The Dagadusheth Halwai Ganapati temple is a Hindu Temple located in Pune and is dedicated to the Hindu god Ganesh. Devotees of the temple include celebrities and chief ministers of Maharashtra who visit during the annual ten-day Ganeshotsav festival."
                image={ProfileOne}
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                placeName="2. Shaniwar Wada"
                image={ProfileTwo}
                description="Shaniwar Wada is a historical fortification in the city of Pune, India. Built in 1732, it was the great seat of the Peshwas of the Maratha Empire until 1818. Following the rise of the Maratha Empire, the palace became the center of Indian politics in the 18th century."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                placeName="3. Saras Baug"
                description="Saras Baug is a popular attraction in Pune which was initially a lake at the foothills of Parvati. the exposed land was developed into a park and was named Saras Baug. The attraction expands over an area 25 acres and also has a temple in the centre"
                image={ProfileThree}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
