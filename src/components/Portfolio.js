import React, { Component } from "react";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works. Visit<a href="https://github.com/bmtuan" target="_blank"> here </a>for more detail.</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item, idx) => {
                  return (
                    <div className="columns portfolio-item" key={idx}>
                      <div className="item-wrap">
                        <a href={item.link} target="_blank">
                          <img
                            src={`${item.imgurl}`}
                            style={{ height: 150, width: 220 }}
                          />
                          <a className="overlay" target="_blank">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </a>
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
