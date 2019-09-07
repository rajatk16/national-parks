import React, {Component} from 'react';
import { Container } from 'semantic-ui-react';

import ParksTable from './components/ParksTable.jsx';

export default class App extends Component {
  render() {
    return (
      <Container>
        <ParksTable/>
      </Container>
    )
  }
}