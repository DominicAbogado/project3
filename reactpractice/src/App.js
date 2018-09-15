import React, { Component } from "react";
import WorkshopCard from "./components/WorkshopCard";
import WorkshopModal from "./components/WorkshopModal"
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import workshops from "./workshops.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    workshops
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <Wrapper>
        <Title>In-School Workshops</Title>
        {this.state.workshops.map(workshop => (
          <WorkshopCard
            id={workshop.id}
            key={workshop.id}
            title={workshop.title}
            description={workshop.description}
            offerings = {workshop.offerings}
          />
        ))}
      </Wrapper>

      <WorkshopModal />
      
          </div>
    );

  }



}

export default App;
