import React, { Component} from 'react';
import { Link } from 'react-router-dom';

import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/Auxillary/Auxillary';
import classes from './Poem.module.css';

import PropTypes from 'prop-types';

const propTypes = {
    onFetchPoem: PropTypes.func.isRequired,
    poem: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    poemIsLoaded: PropTypes.bool.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

const defaultProps = {

};

export default class Poem extends Component {
    state = {
        poemId: null
    }

    changeRenderedPoemIdHandler = () => {
        const newPoemId = this.props.match.params.id;
        const oldPoemId = this.state.poemId;
        if(this.props.isAuthenticated && newPoemId !== oldPoemId){
            this.setState({poemId: newPoemId});
            this.props.onFetchPoem(newPoemId);
        }
    }

    componentDidMount(){
        this.changeRenderedPoemIdHandler();   
    }   
    componentDidUpdate(){
        this.changeRenderedPoemIdHandler();
    }
    
    render() {
        if(this.props.loading) {
            return <Spinner />;
        }

            
        if(!this.props.isAuthenticated) {
            return <div>
                <div style={{textAlign: "center", padding: "30px"}}>Please authenticate to read full text!</div>
                <Link  
                    className={classes.GoBackButton} 
                    to='/'
                    >Go to homepage
                </Link>
                </div>
        }
        
        let poem = null;
        
        if(this.props.poemIsLoaded && this.props.isAuthenticated){
            poem = <div className={classes.Poem}>
            <h2>{this.props.poem.title}</h2>
            <div>
                <i>by {this.props.poem.author}</i>
            </div>
            <pre style={{width: "100%", margin: "30px 0px"}}>
                {this.props.poem.content}
            </pre>
            <Link  
                    className={classes.GoBackButton} 
                    to={`/categories/${this.props.poem.category.slug}`}
                    >Go to all {this.props.poem.category.name.toUpperCase()} POEMS
                </Link>
            
        </div>;
        }  

     

        return (
            <Aux>
               
                {poem}
                
            </Aux>
        );
    }
}

Poem.propTypes = propTypes;
Poem.defaultProps = defaultProps;