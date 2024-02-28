import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from "prop-types"

export default class News extends Component {
  static defaultProps ={
   country:"in",
   category:"general"

  };
  PropTypes={
    country:PropTypes.string,
    category:PropTypes.string
  };
  
  constructor(){
    super();
    this.state={
    articles:this.articles,
    loading:false,
    page :1
    };
  }
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9046f967c479402984a6612f52c7c11d&page=1`;
    let data = await fetch(url);
    let parsedata= await data.json();
    console.log(parsedata);
    this.setState({articles:parsedata.articles})
    
  }
  handleprevious=async()=>{
    console.log("prev");
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9046f967c479402984a6612f52c7c11d&page=${this.state.page-1}`;
    let data = await fetch(url);
    let parsedata= await data.json();
    console.log(parsedata);
    this.setState({articles:parsedata.articles})
    this.setState({
    page:this.state.page -1,
    })
  }
  handlenext=async()=>{
    console.log("next");
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9046f967c479402984a6612f52c7c11d&page=${this.state.page+1}`;
    let data = await fetch(url);
    let parsedata= await data.json();
    console.log(parsedata);
    this.setState({articles:parsedata.articles})
    this.setState({
    page:this.state.page +1,
    })
    
  }
  render() {
    return (
      <div className='container ' >
       
        <h1  className="text-center"style={{margin:"4vh"}}>NewsPrime : Top Headlines !!</h1>
        <div className='row' >
        {this.state.articles ?.map((element)=>{
          return <div className='col-md-4' key={element.url}>
         <NewsItem
         title={element.title ?element.title:""} 
         description={element.description?element.description.slice(0,50):""}
         urlimg={element.urlToImage}
         newurl={element.url}/>
        </div>
        })}
       </div>
       <div className='container d-flex justify-content-between my-4'>
       <button  disabled={this.state.page<=1}type="button" className="btn btn-primary" onClick={this.handleprevious}> &larr; Previous</button>
       <button type="button" className="btn btn-primary"onClick={this.handlenext}>Next &rarr; </button>
       </div>
        
      </div>
    )
  }
}
