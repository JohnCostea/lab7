// import useState so we can store values in the component
import { useState } from "react";
// import axios so we can send requests to the server
import axios from "axios";

// the Create component, used to add a new movie
function Create() {
  // state variables for each input box, they start off empty
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');

 // this runs when the form is submitted
 const handleSubmit = (e) => {
  // stops the page from refreshing when the form is submitted
  e.preventDefault();

  // print out the values so i can check them in the console
  console.log(`Title: ${title}, Year: ${year}, Poster: ${poster}`);

  // put the values into a movie object to send to the server
  const movie = {
    title: title,
    year: year,
    poster: poster
  };
  // send a POST request to the server with the new movie
  axios.post('http://localhost:4000/api/movies', movie)
    // if it works, print the response from the server
    .then((res) => {console.log(res.data)})
    // if there's an error, print it
    .catch((err) => {console.log(err.data)});
};

  // what gets shown on the page
  return (
    <div>
      <h2>This is my Create Component.</h2>
      {/* the form calls handleSubmit when you click the button */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {/* input for the movie title */}
          <label>Add Movie Title: </label>
          <input type="text"
            className="form-control"
            value={title}
            // update title every time the user types
            onChange={(e) => { setTitle(e.target.value) }}
          />

          {/* input for the movie year */}
          <label>Add Movie Year: </label>
          <input type="text"
            className="form-control"
            value={year}
            // update year every time the user types
            onChange={(e) => { setYear(e.target.value) }}
          />

          {/* input for the poster image link */}
          <label>Add Movie Poster: </label>
          <input type="text"
            className="form-control"
            value={poster}
            // update poster every time the user types
            onChange={(e) => { setPoster(e.target.value) }}
          />
        {/* button to submit the form */}
        <input type="submit" value="Add Movie" />
        </div>
      </form>
    </div>
  );
}

// export the component so it can be used in other files
export default Create;
