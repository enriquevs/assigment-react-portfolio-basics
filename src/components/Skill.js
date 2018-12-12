import React, {Component} from 'react'

class Skill extends Component {
  render() {
    return (
      <span className="skills-list__single">
        {this.props.dataSkill/* pass in skill string as props in <SkillsList/> component*/}
      </span>
    );
  }
}

export default Skill
