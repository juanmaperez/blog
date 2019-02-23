import React, { Component} from 'react'
import Experience from './../components/experience';
import styled from 'styled-components'

const AboutPageView = styled.div`
#about {
  background: #fff;
  
  .about-container {
    font-family: 'Questrial', sans-serif;
    width: 100%;
    max-width:1300px;
    margin: 0px auto;
    position: relative;
    margin-top:100px;
    padding: 0px 20px 20px;
    box-sizing: border-box;
    @media(max-width:480px) {
      margin-top:50px;
      padding: 0px 15px 20px;
      top: 10px;
    }
  }
`


class AboutPage extends Component {
  experiences = [
    {
      title: "Colossus Bets",
      date: "June 2018",
      icon: "colossus.jpg",
      tasks: [
        "Work focused on getting the best user experience on the main application.",
        "Continued improvement of the main view of the application working close to the design team.",
        "Apply the best logic to manage the different information displayed on the view.",
        "Develop different services to set the application state and persist information.",
        "Git workflow in every environment."]
    },
    {
      title: "Crealogix",
      date: "November 2017 | June 2018",
      icon: "crealogix.png",
      tasks: [
        "Bring to the website the instructions related to the app features and functionalities in each report.",
        "Modules develop based on Angular 2, 4, 5 for fintech applications.",
        "Manage data flowing between different screens through customized Angular Router.",
        "Communication between front and back through different components and services and manage JSON responses.",
        "Show information for users finding the best solution through a decision-making process based on UX.",
        "TeamWork in development based on Control Version Git Flow."
      ]
    },
    {
      title: "InboundCycle",
      date: "November 2015 | November 2017",
      icon: "inboundcycle.jpg",
      tasks: [
        "Landing pages, Thank you pages, emails design and development from scratch with HTML5, SASS and JS.",
        "Exclusive WordPress Themes development and marketing tools integration.",
        "UX design application to increase visitors conversion to leads.",
        "Internal tools developed to increase productivity.",
        "Projects development based in SCRUM methodologies.",
        "RESTful API integrations and source control with git.",
        "Experience with Client Side frameworks as Angular2."
      ]
    }
  ]

  render(){
    return (
      <AboutPageView>
        <div id="about" className="page">
          <div className="title-container">
            <h1>Who I used to be</h1>
          </div> 
          <div className="about-container">
            <div className="experience-list">
              {this.experiences.map((experience, index)=> <Experience key={index} index={(index + 1)} node={experience}/>)}
            </div>
          </div>      
        </div>
      </AboutPageView>
    )
  }
}

export default AboutPage