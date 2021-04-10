import React from 'react';
import { User } from '../model/Model'
import {AuthService} from '../services/AuthService'

interface Appstate{
  user: User | undefined
}


export class App extends React.Component<{},{}>{

  private authservice: AuthService = new AuthService();
  

  render(){
    return(
      <div>DTP App from Class Works!!</div>
    )
  }
}
