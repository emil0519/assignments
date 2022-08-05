class Header extends React.Component {
  state = {
    cN: "small-none",
  };

  open() {
    this.setState((preState) => ({
      cN: "small-block",
    }));
  }

  close() {
    this.setState((preState) => ({
      cN: "small-none",
    }));
  }

  render() {
    return (
      <header>
        <div className="header-wrap">
          <span className="header-text">Website Title/ Logo</span>
          <button className="header-btn">
            <i className="fa fa-bars" onClick={this.open.bind(this)}></i>
          </button>
          <nav>
            <ul className="nav-list">
              <li className="nav-item">Item 1</li>
              <li className="nav-item">Item 2</li>
              <li className="nav-item">Item 3</li>
              <li className="nav-item">Item 4</li>
            </ul>
          </nav>

          <section className={this.state.cN}>
            <div className="small-nav">
              <ul className="small-nav-list">
                <li className="small-nav-item">Item 1</li>
                <li className="small-nav-item">Item 2</li>
                <li className="small-nav-item">Item 3</li>
                <li className="small-nav-item">Item 4</li>
              </ul>
            </div>
            <img
              src="./close.png"
              className="close"
              onClick={this.close.bind(this)}
            ></img>
          </section>
        </div>
      </header>
    );
  }
}

class Banner extends React.Component {
  state = {
    message: "Welcome Message",
  };

  changeMessage() {
    this.setState((preState) => ({
      message: "Have a Good Time!",
    }));
  }

  render() {
    return (
      <section className="banner">
        <h1 className="banner-text" onClick={this.changeMessage.bind(this)}>
          {this.state.message}
        </h1>
      </section>
    );
  }
}

const SubSection = () => {
  return (
    <section className="sub-section">
      <h2 className="sub-text">Section Title</h2>
    </section>
  );
};

const BoxList = () => {
  return (
    <div className="box-list">
      <span className="box-1 box">Content Box 1</span>
      <span className="box-2 box">Content Box 2</span>
      <span className="box-3 box">Content Box 3</span>
      <span className="box-4 box">Content Box 4</span>
    </div>
  );
};

class More extends React.Component {
  state = {
    cN: "more-box-list",
  };

  changCN() {
    this.setState((preState) => ({
      cN: "box-list",
    }));
  }

  render() {
    return (
      <section className="more-sec-box">
        <div className="bottom-wrap">
          <span className="bottom-text" onClick={this.changCN.bind(this)}>
            Call to Action
          </span>
        </div>
        <div className={this.state.cN}>
          <span className="box-1 box">Content Box 5</span>
          <span className="box-2 box">Content Box 6</span>
          <span className="box-3 box">Content Box 7</span>
          <span className="box-4 box">Content Box 8</span>
        </div>
      </section>
    );
  }
}

// const More = () => {
//   return (
//     <section className="more-sec-box">
//       <div className="bottom-wrap">
//         <span className="bottom-text">Call to Action</span>
//       </div>
//       <div className="more-box-list">
//         <span className="box-1 box">Content Box 5</span>
//         <span className="box-2 box">Content Box 6</span>
//         <span className="box-3 box">Content Box 7</span>
//         <span className="box-4 box">Content Box 8</span>
//       </div>
//     </section>
//   );
// };

const App = () => {
  return (
    <div className="App">
      <Header />
      <Banner />
      <SubSection />
      <BoxList />
      {/* <Bottom /> */}
      <More />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// const Banner = () => {
//   return (
//     <section className="banner">
//       <h1 className="banner-text">Welcome Message</h1>
//     </section>
//   );
// };

// const Nav = () => {
//   return (
//     <nav>
//       <ul className="nav-list">
//         <li className="nav-item">Item 1</li>
//         <li className="nav-item">Item 2</li>
//         <li className="nav-item">Item 3</li>
//         <li className="nav-item">Item 4</li>
//       </ul>
//     </nav>
//   );
// };

// const Bottom = () => {
//   return (
//     <div className="bottom-wrap">
//       <span className="bottom-text">Call to Action</span>
//     </div>
//   );
// };

// class More extends React.Component {
//   state = {

//   };

//   hideMore() {
//     if ((this.moreBox.className = "more-box-list")) {
//       setClassName = "";
//     } else {
//       setClassName = "more-box-list";
//     }
//   }

//   render() {
//     return (
//       <section className="more-sec-box">
//         <div className="bottom-wrap">
//           <span className="bottom-text" onClick={this.hideMore}>
//             Call to Action
//           </span>
//         </div>
//         <div className="more-box-list">
//           <span className="box-1 box">Content Box 5</span>
//           <span className="box-2 box">Content Box 6</span>
//           <span className="box-3 box">Content Box 7</span>
//           <span className="box-4 box">Content Box 8</span>
//         </div>
//       </section>
//     );
//   }
// }
