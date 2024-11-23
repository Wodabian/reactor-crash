import { Link } from "react-router-dom";
import * as React from "react";
interface props {
  cardColor: string;
  comment: string;
  title: string;
  url: string;
  linkText: string;
}

class Card extends React.Component<
  props & React.HTMLAttributes<HTMLDivElement>,
  {}
> {
  render() {
    const { className, cardColor, title, comment, url, linkText } = this.props;
    return (
      <div className={`${className} ${cardColor} p-6 rounded-lg show-md`}>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-2 mb-4">{comment}</p>
        <Link
          to={url}
          className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-purple-700"
        >
          {linkText}
        </Link>
      </div>
    );
  }
}
export default Card;
