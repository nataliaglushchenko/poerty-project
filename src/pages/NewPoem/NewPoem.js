import React, { Component } from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import PropTypes from 'prop-types';

import Spinner from '../../components/UI/Spinner/Spinner';

import classes from './NewPoem.module.css';

const propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isCategoriesLoaded: PropTypes.bool.isRequired,
  isAuthorsLoaded: PropTypes.bool.isRequired,
  authors: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string
  })),
  categories: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
  })),
  onSubmitNewAuthor: PropTypes.func.isRequired,
  onSubmitNewCategory: PropTypes.func.isRequired,
  onSubmitNewPoem: PropTypes.func.isRequired,
  error: PropTypes.shape({
    author: PropTypes.string,
    category: PropTypes.string,
    newPoem: PropTypes.string
  }),
  resetState: PropTypes.func.isRequired,
  isNewPoemSubmitted: PropTypes.bool.isRequired,
  newPoem: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
    content: PropTypes.string
  })
};

const defaultProps = {

};

const authorSchema = yup.object().shape({
  authorName: yup
      .string()
      .min(2, 'Too Short!')
      .required('Author Name is not valid!')
});

const categorySchema = yup.object().shape({
  categoryName: yup
      .string()
      .min(2, 'Too Short!')
      .required('Category is not valid!')
});

const newPoemSchema = yup.object().shape({
  title: yup.string().required('Required!'),
  authorId: yup.number().required('Required!'),
  categoryId: yup.number().required('Required!'),
  content: yup.string().min(10, 'Too short!')
})

export class NewPoem extends Component {
  componentDidMount(){
    this.props.resetState();
  };

  componentDidUpdate(){
    if(this.props.isNewPoemSubmitted){
      this.scrollToNewPoem();
    }
  }
  scrollToNewPoem = () => {
    this.newPoem.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    if(!this.props.isAuthenticated){
      return (
        <div style={{textAlign: "center", padding: "30px"}}>
          You can create a Poem only if you are authenticated!
        </div>
      );
    }
    if(!this.props.isCategoriesLoaded || !this.props.isAuthorsLoaded) {
      return <Spinner />;
    }

    let newPoem = null;
    if(this.props.isNewPoemSubmitted){
      newPoem = <div>
        <h4 style={{textAlign: "center"}}>You have successfully submitted your Poem!</h4>
        <div className={classes.Poem}>
          <h3>{this.props.newPoem.title}</h3>
          <div>
              <i>by {this.props.newPoem.author}</i>
          </div>
          <pre style={{width: "100%", margin: "30px 0px"}}>
              {this.props.newPoem.content}
          </pre>
        </div>
        <div style={{padding: "20px", textAlign: "center"}}>
          <Link  to='/'>CHECK OUT OTHER POEMS</Link>
        </div>
      </div>      
    }

    return (
      <div>
        <div className={classes.Add}>
          <Formik
            initialValues={{ authorName: '' }}
            onSubmit={(values, { setSubmitting }) => {
              this.props.onSubmitNewAuthor(values);
              setSubmitting(false);
            }}
            validationSchema={authorSchema}
          >
          {({
            values, 
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
            }) => {
              return (
                <form className={classes.Form} onSubmit={handleSubmit}>
                <div>Add New Author: <span style={{color: "red"}}>{errors.authorName && touched.authorName && errors.authorName}</span></div>
                <input
                  type="text"
                  name="authorName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.authorName}
                />            
                <button type="submit" disabled={isSubmitting}>Submit</button>
                <div style={{ color: "red"}}>{this.props.error.author}</div>
              </form>
              )
            }}
          </Formik>
          <Formik
            initialValues={{ categoryName: '' }}
            onSubmit={(values, { setSubmitting }) => {
              this.props.onSubmitNewCategory(values);
              setSubmitting(false);
            }}
            validationSchema={categorySchema}
          >
          {({
            values, 
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
            }) => {
              return (
                <form className={classes.Form} onSubmit={handleSubmit}>
                <div>Add New Category: <span style={{color: "red"}}>{errors.categoryName && touched.categoryName && errors.categoryName}</span></div>
                <input
                  type="text"
                  name="categoryName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.categoryName}
                />            
                <button type="submit" disabled={isSubmitting}>Submit</button>
                <div style={{ color: "red"}}>{this.props.error.category}</div>
              </form>
              )
            }}
          </Formik>
        </div>
        <h2 style={{margin: "20px 60px"}}>Submit Your Poem Here!</h2>
        <Formik
          initialValues={{ title: '', authorId: '', categoryId: '', content: '' }}
          onSubmit={(values, { setSubmitting }) => {
            this.props.onSubmitNewPoem(values);
            this.scrollToNewPoem();
            setSubmitting(false);
          }}
          validationSchema={newPoemSchema}
        >
        {({
          values, 
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
          }) => {
            return (
              <form className={classes.Form} onSubmit={handleSubmit}>
              <div>Title: <span style={{color: "red"}}>{errors.title && touched.title && errors.title}</span></div>
              <input
                type="text"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              <div>Author: <span style={{color: "red"}}>{errors.author && touched.author && errors.author}</span></div>
              <select 
                  name="authorId"
                  value={values.authorId}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  style={{ display: 'block' }}
                  >
                    <option value="" label="Select an author" />
                    {this.props.authors.map(author => {
                      return <option key={author.id} value={author.id} label={author.name} />;
                    })}
              </select>
              <div>Category: <span style={{color: "red"}}>{errors.category && touched.category && errors.category}</span></div>
              <select 
                  name="categoryId"
                  value={values.categoryId}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  style={{ display: 'block' }}
                  >
                    <option value="" label="Select a category" />
                    {this.props.categories.map(cat => {
                      return <option key={cat.id} value={cat.id} label={cat.name} />;
                    })}
              </select>
              <div>Your Poem: <span style={{color: "red"}}>{errors.content && touched.content && errors.content}</span></div>
              <textarea
                type="text"
                name="content"
                rows="4"
                placeholder="Enter your Poem here ..."
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.content}
              />              
              <button type="submit" disabled={isSubmitting}>Submit</button>
              <div style={{ color: "red"}}>{this.props.error.newPoem}</div>
            </form>
            )
          }}
        </Formik>
        <div ref={(el) => { this.newPoem = el;}}></div>
        {newPoem}         
      </div>    
    )
  }
}

export default NewPoem;
NewPoem.propTypes = propTypes;
NewPoem.defaultProps = defaultProps;