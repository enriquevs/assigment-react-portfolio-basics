import React, {Component} from 'react';
import PortfolioFixed from "./PortfolioFixed"
import PortfolioContent from "./PortfolioContent"



class App extends Component{
  render (){
    return(
      <div id= 'app-container'>
        <PortfolioFixed/>
        <PortfolioContent SkillsInfo= {this.props.SkillsInfo}
                          EduListInfo= {this.props.EduListInfo}
                          JobsListInfo= {this.props.JobsListInfo}
        />
      </div>
    );
  }
}


export default App;
