import React, { Component } from 'react'
import './styles/Carousel.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export class Carousel extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }
render() {
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
    return (
        <div className="carousel-container">
        <Slider {...settings}
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          <div >
            <img  className ='carousel-image' src="http://autoshowroom.co/wp-content/uploads/2021/01/ford-escape-2018.jpg" alt="" />
          </div>
          <div>
            <img  className ='carousel-image' src="http://autoshowroom.co/wp-content/uploads/2018/02/2015-Hyundai-Sante-Fe-Limited-AWD-139-876x535-1.jpg" alt="" />
          </div>
          <div>
            <img  className ='carousel-image' src="http://autoshowroom.co/wp-content/uploads/2018/02/2015-Hyundai-Sante-Fe-Limited-AWD-133-876x535-1.jpg" alt="" />
          </div>
          <div>
            <img  className ='carousel-image' src="http://autoshowroom.co/wp-content/uploads/2018/02/2015-Hyundai-Sante-Fe-Limited-AWD-129-876x535-1.jpg" alt="" />
          </div>
          <div>
            <img  className ='carousel-image' src="http://autoshowroom.co/wp-content/uploads/2018/02/2015-Hyundai-Sante-Fe-Limited-AWD-118-876x535-1.jpg" alt="" />
          </div>
          <div>
            <img  className ='carousel-image' src="http://autoshowroom.co/wp-content/uploads/2018/02/2015-Hyundai-Sante-Fe-Limited-AWD-121-876x535-1.jpg" alt="" />
          </div>
          <div>
            <img  className ='carousel-image' src="http://autoshowroom.co/wp-content/uploads/2018/02/2015-Hyundai-Sante-Fe-Limited-AWD-122-876x535-1.jpg" alt="" />
          </div>
          <div>
            <img  className ='carousel-image' src="http://autoshowroom.co/wp-content/uploads/2018/02/2015-Hyundai-Sante-Fe-Limited-AWD-123-876x535-1.jpg" alt="" />
          </div>
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={true}
          
          
        >
          <div>
            <img className="thumbnail" src="http://autoshowroom.co/wp-content/uploads/2021/01/ford-escape-2018.jpg" alt="" />
          </div>
          <div>
            <img className="thumbnail" src="http://autoshowroom.co/wp-content/uploads/2018/02/2015-Hyundai-Sante-Fe-Limited-AWD-139-876x535-1.jpg" alt="" />
          </div>
          <div>
            <img className="thumbnail" src="http://autoshowroom.co/wp-content/uploads/2018/02/2015-Hyundai-Sante-Fe-Limited-AWD-133-876x535-1.jpg" alt="" />
          </div>
          <div>
            <img className="thumbnail" src="http://autoshowroom.co/wp-content/uploads/2018/02/2015-Hyundai-Sante-Fe-Limited-AWD-129-876x535-1.jpg" alt="" />
          </div>
          <div>
            <img className="thumbnail" src="http://autoshowroom.co/wp-content/uploads/2018/02/2015-Hyundai-Sante-Fe-Limited-AWD-118-876x535-1.jpg" alt="" />
          </div>
          <div>
            <img className="thumbnail" src="http://autoshowroom.co/wp-content/uploads/2018/02/2015-Hyundai-Sante-Fe-Limited-AWD-121-876x535-1.jpg" alt="" />
          </div>
          <div>
            <img className="thumbnail" src="http://autoshowroom.co/wp-content/uploads/2018/02/2015-Hyundai-Sante-Fe-Limited-AWD-122-876x535-1.jpg" alt="" />
          </div>
          <div>
            <img className="thumbnail" src="http://autoshowroom.co/wp-content/uploads/2018/02/2015-Hyundai-Sante-Fe-Limited-AWD-123-876x535-1.jpg" alt="" />
          </div>
        </Slider>
      </div>
        )
    }
}

export default Carousel
