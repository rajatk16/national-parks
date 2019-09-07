import React, {Component} from 'react';
import {Table, Image, Header} from 'semantic-ui-react';

import PARKS from '../data/parks.json';

export default class ParksTable extends Component {
  renderRows = () => {
    return PARKS.map((park, index) => {
      return (
        <Table.Row key={index}>
          <Table.Cell textAlign="center">
            {park.Name}
          </Table.Cell>
          <Table.Cell>
            <Image src={park.Thumbnail} />
          </Table.Cell>
          <Table.Cell textAlign="center">
            {park.Location}
          </Table.Cell>
          <Table.Cell textAlign="center">
            {park.Established}
          </Table.Cell>
          <Table.Cell textAlign="center">
            {park.Area}
          </Table.Cell>
          <Table.Cell textAlign="center">
            {park["Recreation visitors"]}
          </Table.Cell>
          <Table.Cell textAlign="center">
            {park.Description}
          </Table.Cell>
        </Table.Row>
      )
    })
  }


  render() {
    return (
      <Table striped celled collapsing padded compact>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              <Header as="h3" textAlign="center">
                Name
              </Header>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Header as="h3" textAlign="center">
                Image
              </Header>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Header as="h3" textAlign="center">
                Location
              </Header>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Header as="h3" textAlign="center">
                Established
              </Header>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Header as="h3" textAlign="center">
                Area
              </Header>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Header as="h3" textAlign="center">
                Visitors
              </Header>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Header as="h3" textAlign="center">
                Description
              </Header>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.renderRows()}
        </Table.Body>
      </Table>
    )
  }
}