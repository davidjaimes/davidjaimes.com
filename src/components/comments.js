import React, {Component} from "react";
// Bootstrap Dependencies
import {Container, Row, Col} from 'react-bootstrap';


export default class Comments extends Component {

  constructor(props){ 
    super(props);
    this.commentBox = React.createRef();
  }
  componentDidMount () {
      let scriptEl = document.createElement("script");
      scriptEl.setAttribute("src", "https://utteranc.es/client.js");
      scriptEl.setAttribute("crossorigin","anonymous");
      scriptEl.setAttribute("async", true);
      scriptEl.setAttribute("repo", "davidjaimes/comments");
      scriptEl.setAttribute("issue-term", "pathname");
      scriptEl.setAttribute( "theme", "github-light");
      this.commentBox.current.appendChild(scriptEl);
  }

  render() {
    return (
        <Container fluid className="pr-0 pl-0">
        <Row className="m-0">
        <Col style={{maxWidth: "768px"}}>
        <div ref={this.commentBox} className="comment-box"></div>
        </Col>
        </Row>
        </Container>
    );
  }
}