import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  
  
  constructor(){
    super();
    console.log("heloo")
    this.state={
    articles:this.articles
    };
  }
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=9046f967c479402984a6612f52c7c11d";
    let data = await fetch(url);
    let parsedata= await data.json();
    console.log(parsedata);
    this.setState({articles:parsedata.articles})
    
  }
  render() {
    return (
      <div className='container ' >
       
        <h1 style={{margin:"4vh"}}>Top HeadLines!!</h1>
        <div className='row' >
        {this.state.articles ?.map((element)=>{
          return <div className='col-md-4' key={element.url}>
         <NewsItem
         title={element.title} 
         description={element.description}
         urlimg={element.urlToImage}
         newurl={element.url}/>
        </div>
        })}
       </div>
        
      </div>
    )
  }
}
