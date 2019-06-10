class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
     
        this.state = {
            status: false
        }
    }

        handleToggleVisibility() {
 
            this.setState((prevState) => {
                return {
                    status: !prevState.status
                };
            });

        }

    render() {
        return (
           <div>
            <h1>Visibility App</h1>
            <button onClick={this.handleToggleVisibility}>
                {this.state.status ? 'Hide Details' : 'Show Details'}
            </button>
            {this.state.status && (
                <div>
                <p>Hey, these are some detailss</p>
                </div>
            )}
        </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))
