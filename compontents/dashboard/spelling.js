import React, { Component } from "react";
import { Link } from "react-router-dom";

class Spelling extends Component {
  render() {
    return (
      
        <div className="container-fluid">
          <div className="cards row">
            <div className="card">
              <div className="header"><h1>Bunuba Spelling and Pronunciation</h1></div>
              <p>The spelling of Bunuba language words are based on the Bunuba Dictionary, draft version May 2019. The dictionary is held in a database at the Kimberly language Resource Centre in Halls Creek, Wa.
                        
                  Some sounds in Bunuba do not occur in English and vice versa. Bunuba people chose their alphabet at a workshop in 1929, run bt the Kimberly Language Resource Centre. To indicate sounds not familiar to English speakers, Bunuba uses a system of underlining. The line under a letter modifies the sound of that letter. For example, l is underlined when it sounds more like rl.
                  Note that ng is underlined when it sounds more like the ng in sing or singer. However,  when n and g are two different sounds that happen to come together, they are separated by a full stop: n.g, as in the English engrave. The English word bingo would be written as: bi<u>ngg</u>u (there us no o in Bunuba).
              </p>
            </div>

            <div className="card">
              <h1>Pronunciation</h1>
              <div className="responsive-table">
                
              </div>
            </div>
          </div>
        </div>
      
    );
  }
}

export default Spelling;