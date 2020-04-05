//Modify the head tags
import Head from "next/head";

//Page elements
import Header from "./page/Header";
import Footer from "./page/Footer";

const HeadTags = (props) => (
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
      crossOrigin="anonymous"
    />
    {/* Font Awesome */}
    <link
      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      rel="stylesheet"
      integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
      crossOrigin="anonymous"
    />

    {/* Custom Styles */}
    <link rel="stylesheet" href="/css/nprogress.css" />
    <link rel="stylesheet" href="/css/style.css" />
    <title>{process.env.SHOP_NAME} | Delivery</title>
  </Head>
);

class DonutApp extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeadTags />
        <Header />
        <div className="container">
          <div className="jumbotron">{this.props.children}</div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default DonutApp;
