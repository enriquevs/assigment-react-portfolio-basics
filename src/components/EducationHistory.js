import React, {Component} from 'react'
// import EduTitle component
import EduTitle from "./EduTitle"
class EducationHistory extends Component {
  render() {

    /* receive `eduList` array as props from App compnonent */

    return (
      <section>
        <h4>Education</h4>
        <div className="skills-list">

          {
            this.props.EduListInfo.map(function(edu){
              return < EduTitle  institute= {edu.institute}
                                  fieldOfStudy= {edu.fieldOfStudy}
                                  date={edu.dates} />

            })
            /*
              map over jobsList array and return an array of <Job/> components
              NOTE: you must pass values from each education object
                    to the <EduTitle> component as props...
            */
          }

        </div>
      </section>
    )
  }
}

export default EducationHistory;
