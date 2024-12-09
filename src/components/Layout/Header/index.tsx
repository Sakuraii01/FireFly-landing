const Header = (props: { header?: string; topic?: string }) => {
  return (
    <div className="my-3">
      {props.header && <h4 className="text-navtext my-2">{props.header}</h4>}
      <h1 className="gradient-text2 font-bold text-2xl w-fit">
        {props.topic ? props.topic : `OUR ${props.header}`}
      </h1>
    </div>
  );
};

export default Header;
