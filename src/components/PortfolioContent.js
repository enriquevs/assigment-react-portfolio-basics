import React, {Component} from "react";
import Header from "./Header"
import Summary from "./Summary"
import ContactInfo from "./ContactInfo"
import SkillsList from "./SkillsList"
import EducationHistory from "./EducationHistory"
import WorkHistory from "./WorkHistory"
// import WorkHistory from "./WorkHistory"


class PortfolioContent extends Component {
  render(){
    return(
      <div class="portfolio-content">
        <Header/>
        <Summary/>
        <ContactInfo/>
        <SkillsList SkillsInfo= {this.props.SkillsInfo}  />
        <EducationHistory EduListInfo= {this.props.EduListInfo}/>
        <WorkHistory JobsListInfo= {this.props.JobsListInfo}/>


      </div>
    );
  }
}

export default PortfolioContent;
