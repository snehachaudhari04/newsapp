import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let{title,description ,urlimg, newurl}=this.props
    return (
        <div className="card" style={{width: "20rem"}}>
        <img src={!urlimg? "https://pbs.twimg.com/media/C2cyM1FWEAA2Oib.jpg":urlimg} className="card-img-top" alt="img"/>
        <div className="card-body ">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newurl}  target='_blank' className="btn btn-sm btn-primary bg-dark">Read More..</a>
        </div>
      </div>
    )
  }
}

export default NewsItem
