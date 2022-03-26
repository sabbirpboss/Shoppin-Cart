import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'>
            <div>
                <h3>Question:1: How React works?</h3>
                <p>Answer: There are 3 stages in react's every component. those are (i)Mounting, (ii)Update, (iii)Unmounting. Now number one Mounting: it is Initial stage. When any component enter DOM then this state start. There are four steps in Mounting. 1.constructor() 2.getDerivedStateFromProps() 3.render() 4.componentDidMount(). Now number two Updating: When any props or state change the component, component enter this stage. There are five methods in Updating. 1.getDerivedStateFromProps() 2.shouldComponentUpdate() 3.render() 4.getSnapshotBeforeUpdate() 5.componentDidUpdate(). Now number three Unmounting: When DOM needs to move component, then component enter this stage. There are only one method in Unmounting. 1.componentWillMount()</p>
            </div>
            <div>
                <h3>Question:2: props vs state?</h3>
                <p>Answer: props means properties. props is read-only. But state can be read and write too. props can be modified. On the other hand, state can be modified using this.setState. So state updated using this.setState. state can be change any time but props can not be changed. props one way data binding. props send data from parent to child. It means props send data only up to bottom method. props is stateless component. state changes can be asynchronous. props send data one component to another. On the other hand state is local data storage and can not be passed to other component. state represents the local storage data or information. Props are immutable so we cannot modify the props from inside the component. But state mutable</p>
            </div>
        </div>
    );
};

export default Question;