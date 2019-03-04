import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './Overview.module.css';

const propTypes = {
    onFetchCategoryOverview: PropTypes.func.isRequired,
    isOverviewLoaded: PropTypes.bool.isRequired,
    loading: PropTypes.bool,
    overview: PropTypes.shape({
        poems: PropTypes.arrayOf(PropTypes.shape({
            poemId: PropTypes.number,
            author: PropTypes.string,
            title: PropTypes.string
        })),
        category: PropTypes.shape({
            name: PropTypes.string
        })
    }),
    isPoemPreviewLoaded: PropTypes.bool,
    poemPreview: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        author: PropTypes.string,
        content: PropTypes.string
    }),
    overviewLoading: PropTypes.bool
};

const defaultProps = {

};

export default class Overview extends Component {
    state = {
        overviewCategory: null,
        selectedPoemId: null,
        showPoemPreview: false
    }

    handleOverviewLoading = () => {
        const newOverviewCategory = this.props.match.params.slug;
        const oldOverviewCategory = this.state.overviewCategory;
        if(newOverviewCategory !== oldOverviewCategory){
            this.setState({overviewCategory: newOverviewCategory, showPoemPreview: false});
            this.props.onFetchCategoryOverview(newOverviewCategory);
        }
    }

    componentDidMount(){
        this.handleOverviewLoading();
    }
    
    componentDidUpdate(){
        this.handleOverviewLoading();
    }

    handleItemClick = (poemId) => {
        this.props.onFetchPoemPreview(poemId);
        this.setState({selectedPoemId: poemId, showPoemPreview: true});
    };

    render(){
        let overviewItems = this.props.loading ? <Spinner /> : null;
        if(this.props.isOverviewLoaded) overviewItems = this.props.overview.poems.map(item => {
            return (
                <div className={classes.OverviewItem}
                    key={item.poemId} 
                    onClick={() => this.handleItemClick(item.poemId)} 
                    style= {this.state.selectedPoemId === item.poemId ? {color: "blue", backgroundColor: "#f1f1f1"} : {color: "black"}}
                    >
                    <i>{item.author}</i> - {item.title}
                </div>
            );
        })

        let poemPreview = null;
        if(this.props.isPoemPreviewLoaded && this.state.selectedPoemId!==null && this.state.showPoemPreview){
            poemPreview = <div className={classes.PoemPreview}>
                <h2 className={classes.PoemTitle}>{this.props.poemPreview.title}</h2>
                <div><i>by {this.props.poemPreview.author}</i></div>
                <pre className={classes.PoemContent}>{this.props.poemPreview.content}<br/>...</pre>
                <br/>
                <Link className={classes.ContinueButton} to={`/poems/${this.props.poemPreview.id}`}>CONTINUE READING</Link>
                </div>
        }

        let overview = this.props.overviewLoading ? <Spinner /> : <h1 style={{textAlign: "center"}}>Something Went Wrong</h1>;
        if(this.props.isOverviewLoaded){
            overview = (
                <div>
                    <h2 style={{textAlign: "center", padding: "30px 0px", color: "#aaa"}}> {this.props.overview.category.name} POEMS</h2>
                    <div className={classes.Overview}>
                        <div className={classes.ContentsBlock}>
                            <div className={classes.Title}> All {this.props.overview.category.name} Poems:</div>
                            <ul className={classes.Content}>
                                {overviewItems}
                            </ul>
                        </div>
                        {poemPreview}
                    </div>
                </div>
            );
        }
        return overview;
    }
}

Overview.propTypes = propTypes;
Overview.defaultProps = defaultProps;