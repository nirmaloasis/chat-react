import React from 'react'
import ChatContainer from './containers/ChatContainer'
import WelcomePage from './common/WelcomePage'
import { connect } from 'react-redux'
import Navbar from './Navbar'
class App extends React.Component {
  constructor(props){
    super(props)
    this.currentUser = this.currentUser.bind(this)

  }
  

  currentUser(){
   return !!this.props.user 
  }
  render() {
    return (
      <div>
        <Navbar/>
        {this.currentUser() ? <ChatContainer /> : <WelcomePage />}
      </div> 
    )
  }
}


function mapStateToProps(state){
 return { user: state.user }  
}

export default connect(mapStateToProps)(App)
