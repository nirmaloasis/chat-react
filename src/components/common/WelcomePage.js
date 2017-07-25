import React, { Component } from 'react'
import * as userActions from '../../actions/userActions'
import { connect } from 'react-redux'
import { InputGroup, Button, PageHeader, FormGroup, FormControl,ControlLabel,Form } from 'react-bootstrap'
import '../style.css'

class WelcomePage extends Component { 
  constructor(props){
    super(props) 
    this.state = { 
      input: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSumbit.bind(this)

  }
  
  handleOnChange(ev){
    this.setState({input: ev.target.value})
    console.log(ev.target.value)
  }

  handleOnSumbit(ev){
    ev.preventDefault()
    this.props.newUser(this.state.input)
    this.setState({ input: ''})
  }

  render(){ 
    return (
      <div> 
         <div id="centerBox" className="bgimg">
          <form > 
            <Form inline onSubmit={this.handleOnSubmit}>
            <FormGroup controlId="formInlineName">
              <ControlLabel>Nickname</ControlLabel>
              {' '}
              <FormControl value={this.state.input} onChange={this.handleOnChange} type="text" placeholder="Jane Doe" />
            </FormGroup>
            {' '}
          
            <Button type="submit">
              Join
            </Button>
          </Form>
          </form>
         </div> 
        </div> 
    )  
  }
}



function mapStateToProps(state, ownProps){
  return { user: state.user }
}

function mapDispatchToProps(dispatch){
 return { 
   newUser: (user) => {
    dispatch(userActions.newUser(user))
  }
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);
