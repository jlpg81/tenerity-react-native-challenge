import React from 'react';
import Context from './context';

export default class GlobalState extends React.Component {
  myOffers = [];

  render() {
    return (
      <Context.Provider
        value={{
          myOffers: this.myOffers,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
