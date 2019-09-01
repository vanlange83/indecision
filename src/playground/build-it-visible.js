class VisibleToggle extends React.Component {
    constructor(props) {
        super(props)
        this.showDetails = this.showDetails.bind(this)
        this.state = {
            Visibility: false
        }
    }

    showDetails() {
        this.setState((prevState) => { 
            return {Visibility: !prevState.Visibility}
    })
}

    render() {

        return (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.showDetails}> { this.state.Visibility ? 'Hide Details' : 'Show Details'} </button>
            {this.state.Visibility && (
                <div>
                    <p>Hey. These are some messages</p>
                </div>
            )}
        </div>
        )    
    }
}

ReactDOM.render(<VisibleToggle />, document.getElementById('root'))
