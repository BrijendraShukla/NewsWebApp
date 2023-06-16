import React, { Component } from "react";
import Newsitem from "./Newsitem";
export class News extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=fa57b5d566974d6bb071c753bda9a511";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }
  render() {
    return (
      <div className="container my-4">
        <h2 className="d-flex justify-content-center my-3">
          News Monkey Top Headlines
        </h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title}
                  discription={element.description ? element.description : " "}
                  url={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://www.dsij.in/Portals/0/EasyDNNnews/28072/image_423.jpg"
                  }
                  pageurl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
