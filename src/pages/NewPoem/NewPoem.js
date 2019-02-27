import React, { Component } from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

import Spinner from '../../components/UI/Spinner/Spinner';

import classes from './NewPoem.module.css';

const propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isCategoriesLoaded: PropTypes.bool.isRequired,
  isAuthorsLoaded: PropTypes.bool.isRequired,
  authors: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  onSubmitNewAuthor: PropTypes.func.isRequired,
  onSubmitNewCategory: PropTypes.func.isRequired,
  onSubmitNewPoem: PropTypes.func.isRequired,
  error: PropTypes.object
};

const defaultProps = {

};

export class NewPoem extends Component {
  render() {

    if(!this.props.isAuthenticated) return <div style={{textAlign: "center", padding: "30px"}}>You can create a Poem only if you are authenticated!</div>;
    if(!this.props.isCategoriesLoaded || !this.props.isAuthorsLoaded) {
      return <Spinner />;
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
            validate={values => {
              let errors = {};
              const minLength = 2;
              if (!values.authorName) { errors.authorName = 'Required'; }
                else if (values.authorName.length <= minLength) { errors.authorName = "Too small"; }
              return errors;
              }}
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
            validate={values => {
              let errors = {};
              const minLength = 2;
              if (!values.categoryName) { errors.categoryName = 'Required'; }
                else if (values.categoryName.length <= minLength) { errors.categoryName = "Too small"; }
              return errors;
              }}
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
            setSubmitting(false);
          }}
          validate={values => {
            let errors = {};
            const minLength = 10;
            if (!values.title) { errors.title = 'Required'; }
            if (!values.authorId) { errors.authorId = 'Required'; }
            if (!values.categoryId) { errors.categoryId = 'Required'; }
            if (!values.content) { errors.content = 'Required'; } 
              else if (values.content.length <= minLength) { errors.content = "Too small"; }
            return errors;
            }}
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
      </div>    
    )
  }
}

export default NewPoem;
NewPoem.propTypes = propTypes;
NewPoem.defaultProps = defaultProps;