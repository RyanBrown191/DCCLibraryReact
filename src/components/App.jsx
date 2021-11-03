import React, {Component} from "react";
import './App.css'
import TitleBar from './TitleBar/TitleBar';

class App extends Component {
    constructor(props) {
        super(props);
        this.books= [
            {title: "Utopia", author: "Thomas More"},
            {title: 'Annals', author: 'Plutarch'},
            {title: 'Consider Phlebas', author: 'Ian Banks'}
        ];
        this.state = {
            bookNumber: 0
        };

    }
    
    render(){
        return (
            <div className="container-fluid">
                <TitleBar />
                <div className="col-md-4">
                    {/*Button here to move to the previous book viewed*/}
                </div>
                <div className="col-md-4"></div>
                    {/*Display book with cover here*/}
                    <h1>{this.books[this.state.bookNumber].title}</h1>
                    <h4>{this.books[this.state.bookNumber].author}</h4>
                <div className="col-md-4"></div>
                    {/*Button here to move to the next book viewed*/}
            </div>
            )
        }       
}
export default App;