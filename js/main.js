class Content extends React.Component {
    render(){
        return <section className="content col-sm-offset-3 col-sm-9 col-xs-12">
                    
                    <div className="result-wrap">
                        <div className="panel panel-primary result">
                            <div className="panel-body">
                                Panel content
                            </div>
                        </div>
                    </div>
                    <AddPositionButton isActive={false}/>
                    <AddPositionPanel isActive={false}/>
                </section>
    }
}
class AddPositionButton extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isActive: this.props.isActive};
    }
    render(){
        return <div className= {this.state.isActive ? 'add in': 'add'}>+</div>
    }
}
class AddPositionPanel extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isActive: this.props.isActive};
    }
    render(){
        return <div className={this.state.isActive ? 'newposition in':'newposition'}>
                        
        <div className="panel panel-primary add-panel shadow">
            <div className="panel-heading">
                    <h3 className="panel-title">Panel title</h3>
            </div>
            <div className="panel-body">
                    Panel content
            </div>
            <div className="panel-footer">
                <button className="btn btn-primary">button</button>
            </div>
        </div>
        
    </div>;
    }
}



ReactDOM.render(<Content />, document.getElementById('react-main'));