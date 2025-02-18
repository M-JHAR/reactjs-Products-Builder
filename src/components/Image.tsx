interface IProbs {
  ImageURL: string;
  alt: string;
  className: string;
}

const Image = ({ ImageURL, alt, className }: IProbs) => {
  return <img src={ImageURL} alt={alt} className={className} />;
};

export default Image;
