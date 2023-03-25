import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header.component";
import Players from "./components/players/players.component";
import { Component } from "react";
import AddPlayerForm from "./components/add-player-form/add-player-form.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextId: 4,
      players: [
        {
          id: 1,
          name: "Clark Joy Pesco",
          score: 54,
        },
        { id: 2, name: "Siezmicrush Yuri", score: 23 },
        {
          id: 3,
          name: "Luke Heros",
          score: 35,
        },
      ],
    };
  }

  onRemove = (index) => {
    this.state.players.splice(index, 1);
    this.setState(this.state);
  };

  onAdd = (name) => {
    const player = {
      id: this.state.nextId,
      name: name,
      score: 0,
    };
    this.state.players.push(player);
    this.state.nextId += 1;
    this.setState(this.state);
  };

  onScoreChange = (index, delta) => {
    // this.state.players[index].score += delta;
    // this.setState(this.state);

    this.setState((prevState, propState) => {
      return {
        players: prevState.players.map((player, i) =>
          i === index ? { ...player, score: player.score + delta } : player
        ),
      };
    });
  };
  render() {
    return (
      <div className='App'>
        <Header title={this.props.title} {...this.state} />
        <Players
          {...this.state}
          onScoreChange={this.onScoreChange}
          onRemove={this.onRemove}
        />
        <AddPlayerForm onAdd={this.onAdd} />
      </div>
    );
  }
}

export default App;
