import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import context from "../DataProvider";
import CardsofSearchResult from "./CardsofSearchResult.js";



class SearchResult extends Component {

    state = {
        datas: [],
        button: "Save"
    };


    render() {

        return (
            <context.Consumer>
                {({searchdata}) => (
                    <div className="mycontainer">
                        {searchdata.map((data) => (
                            <CardsofSearchResult data={data}/>
                        ))}
                    </div>
                )}
            </context.Consumer>
        )
    }
}
SearchResult.contextType = context;
export default SearchResult;