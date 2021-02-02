import React from 'react'

import Button from '@material-ui/core/Button';
export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            something: [],
        }

        this.ButtonClick = this.ButtonClick.bind(this);
    }


    ButtonClick(){
        fetch('http://localhost:3000/')
            .catch((error) => console.log(error))

    }

    render() {
        return(
            <div>
                <h1>Welcome To Ryan's React Tools</h1>
                <Button variant="contained" color="primary" onClick={this.ButtonClick}>
                    Call Script
                </Button>
            </div>

        )
    }
}
