import React, { Component } from 'react';
import _ from 'lodash';
import { InputGroup, InputGroupButton, Input, Button } from 'reactstrap';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import NewsSourcesStore from '../stores/NewsSourcesStore';
import NewsActions from '../actions/NewsActions';
// import '../../public/style.scss';


class SourcesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
    };

    this.getItemsState = this.getItemsState.bind(this);
    this._onChange = this._onChange.bind(this);
  }

	// Method to retrieve state from Stores
  getItemsState() {
    return {
      sources: NewsSourcesStore.getAll(),
    };
  }

	// Get initial state from stores
  getInitialState() {
    return getItemsState();
  }

	 _onChange() {
   const blah = this.getItemsState();
   this.setState({
     sources: blah.sources || [],
   });
 }

  componentDidMount() {
    const data = NewsSourcesStore.getAll();
    NewsSourcesStore.addChangeListener(this._onChange);
    NewsActions.getSources();
  }

  componentWillUnMount() {
    NewsSourcesStore.removeChangeListener(this._onChange);
  }

  render() {
    console.log(this.state, 'state');

    return (
      <div>
        <h2>News Sources</h2>

        <div className="searchBar">

        </div>
        <Row classname="card">
          {this.state.sources.map(source => (
            <Col xs="6" sm="4">
              <Card block inverse color="info" key={source.id}>
                <CardTitle>{source.title}</CardTitle>
                <CardText>{source.description}</CardText>
              </Card>
            </Col>
            ))
            }
        </Row>

      </div>
    );
  }
}

export default SourcesView;
