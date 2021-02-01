import React from 'react'

import Button from '@material-ui/core/Button';

export default class Home extends React.Component {
    render() {
        return(
            <div>
                <h1>Welcome To Ryan's React Tools</h1>
                <Button variant="contained" color="primary">
                    Call Script
                </Button>
            </div>

        )
    }
}