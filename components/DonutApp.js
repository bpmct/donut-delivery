//Modify the head tags
import Head from "next/head";

//Page elements
import Header from "./page/Header";

const HeadTags = props => (
  <Head>
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    {/* Bootstrap CSS */}
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
      crossorigin="anonymous"
    />

    {/* Custom Styles */}
    <link rel="stylesheet" href="/css/style.css" />

    <title>
      {props.title} | {props.page}
    </title>
  </Head>
);

class DonutApp extends React.Component {
  state = {
    order: {}
  };

  render() {
    const siteName = "🍩 Donut Shop Delivery";
    return (
      <React.Fragment>
        <HeadTags title={siteName} page="Home" />
        <Header title={siteName} />
        <div className="container">
          <div className="jumbotron">{this.props.children}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default DonutApp;
