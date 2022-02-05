import React, { Component } from "react";
import RadioHeader from "../radioHeader/RadioHeader";
import RadioBody from "../radioBody/RadioBody";
import RadioFooter from "../radioFooter/RadioFooter";
import { getChannels } from "../../services/fakeChannels/fakeChannels";

class Radio extends Component {
  state = {
    channelList: [],
    selectedChannel: null,
  };

  componentDidMount() {
    const channels = getChannels();
    this.setState({ channelList: channels });
  }

  handleSelectChannel = (channel) => {
    this.setState({ selectedChannel: channel });
  };
  render() {
    const { channelList, selectedChannel } = this.state;
    return (
      <div className='bg-[#2b2b36] w-[695px] h-[1010px] mx-auto rounded-[50px] overflow-hidden flex flex-col justify-between drop-shadow-2xl '>
        <RadioHeader />
        <RadioBody
          channelList={channelList}
          selectedChannel={selectedChannel}
          onSelectChannel={this.handleSelectChannel}
        />
        <RadioFooter selectedChannel={selectedChannel} />
      </div>
    );
  }
}

export default Radio;
