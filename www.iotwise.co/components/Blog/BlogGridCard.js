import React from "react";
import { BlogCard } from "./BlogCard";

const BlogGridCard = ({articles}) => {

  const RenderArticles = (articles) => {
    let render = []
    articles.forEach(article => render.push(<BlogCard {...article} />))
    return render
  }

  return (
    <>
      <section className="news-area ptb-100">

        <div className="container">

          {/* <div className="text-center">
            <img src="https://fecoljudo.org.co/wp-content/uploads/2020/07/construccion5.png" width="50%" alt="Pagina en Construcción" />
          </div> */}

          {/* Search Box */}
          {/* <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Buscar artículo" aria-label="Buscar artículo" aria-describedby="basic-addon2" />
            <button className="btn btn-outline-secondary" type="button">Buscar</button>
          </div> */}


          {/* Articles Grid */}
          <div className="row">
            {RenderArticles(articles)}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogGridCard;
