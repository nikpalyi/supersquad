import React, { Component } from 'react';
import { connect } from 'react-redux';
import characters from '../reducers/characters_reducer';

class HeroList extends Component {
  render() {
    return (
      <div>
        <h4>Your Hero Squad</h4>
        <ul className='list-group'>
          {this.props.heroes.map(hero => {
            return (
              <li key={hero.id} className='list-group-item'>
                <div className='list-item'>{hero.name}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    heroes: state.heroes
  };
}

const mapDispatchToProps = dispatch => {
  return {
    characterRemove: id => dispatch(characters.characterRemove(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroList);
