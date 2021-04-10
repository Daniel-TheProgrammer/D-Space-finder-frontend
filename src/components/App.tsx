import React from 'react';
import { User } from '../model/Model'

interface Appstate{
  user: User | undefined
}


export class App extends React.Component<{},{}>{


  render(){
    return(
      <div>DTP App from Class Works!!</div>
    )
  }
}
