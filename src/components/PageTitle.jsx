//using props
// function PageTitle(props) {
//   return <h1 className="page-title">{props.title}</h1>;
// }

// export default PageTitle;

//using props via destructuring

function PageTitle({ title }) {
  return <h1 className="page-title">{title}</h1>;
}

export default PageTitle;
