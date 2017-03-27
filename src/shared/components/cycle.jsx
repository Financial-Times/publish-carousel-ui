import React from "react";
import {observable, action} from 'mobx';
import {observer} from "mobx-react";
import Progress from './progress';
import Button from './button';

import State from './states';


/**
 * Component showing progress bar for a single collection cycle
 * @type {Observer}
 */
@observer
export default class Cycle extends React.Component {

  @observable selectedTab = 'statistics'

  @action
  selectTab(tab){
    this.selectedTab = tab;
  }

  render(){
    let cycle = this.props.cycle;

    return (
      <div className="cycle">
         <div className="level">
            <div className="level-left">
               <h3 className="level-item name">{cycle.name}</h3>
            </div>

            <div className="level-right">
               <div className="level-item control buttons">
                  <Button type="start" id={cycle.id}>Start</Button>
                  <Button type="stop"  id={cycle.id}>Stop</Button>
                  <Button type="reset" id={cycle.id}>Reset</Button>
               </div>
            </div>
         </div>

         <div className="columns">
            <div className="column">
               {cycle.metadata.state.map(state => (
                  <State key={state} state={state} />
               ))}
            </div>
         </div>

        <Progress percentage={cycle.metadata.progress * 100} />

        <div className="tabs is-right">
           <ul>
             <li className={this.selectedTab === 'statistics' ? 'is-active' : undefined}><a onClick={() => this.selectTab('statistics')}>Statistics</a></li>
             <li className={this.selectedTab === 'id' ? 'is-active' : undefined}><a onClick={() => this.selectTab('id')}>ID</a></li>
             <li className={this.selectedTab === 'origin' ? 'is-active' : undefined}><a onClick={() => this.selectTab('origin')}>Origin</a></li>
           </ul>
         </div>

         {this.selectedTab === 'statistics' ?
            <nav className="level">
               <div className="level-item has-text-centered">
                  <div>
                     <p className="heading">Total</p>
                     <p className="title">{cycle.metadata.total.toLocaleString()}</p>
                  </div>
               </div>
               <div className="level-item has-text-centered">
                  <div>
                     <p className="heading">Completed</p>
                     <p className="title">{cycle.metadata.completed.toLocaleString()}</p>
                  </div>
               </div>
               <div className="level-item has-text-centered">
                  <div>
                     <p className="heading">Errors</p>
                     <p className="title">{cycle.metadata.errors.toLocaleString()}</p>
                  </div>
               </div>
               <div className="level-item has-text-centered">
                  <div>
                     <p className="heading">Iteration</p>
                     <p className="title">{cycle.metadata.iteration.toLocaleString()}</p>
                  </div>
               </div>
            </nav> : undefined}

            {this.selectedTab === 'id' ?
               <nav className="level">
                  <div className="level-item has-text-centered">
                     <div>
                        <p className="heading">ID</p>
                        <p className="title">{cycle.id}</p>
                     </div>
                  </div>
                  <div className="level-item has-text-centered">
                     <div>
                        <p className="heading">Type</p>
                        <p className="title">{cycle.type}</p>
                     </div>
                  </div>
               </nav> : undefined}

            {this.selectedTab === 'origin' ?
               <nav className="level">
                  <div className="level-item has-text-centered">
                     <div>
                        <p className="heading">Origin System ID</p>
                        <p className="title">{cycle.origin}</p>
                     </div>
                  </div>
                  <div className="level-item has-text-centered">
                     <div>
                        <p className="heading">Collection</p>
                        <p className="title">{cycle.collection}</p>
                     </div>
                  </div>
               </nav> : undefined}


      </div>
    )
  }
}
