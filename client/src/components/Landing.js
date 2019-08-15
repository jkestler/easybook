import React from 'react';
import folderIcon from '../assets/img/landing-folder.png';
import tagIcon from '../assets/img/landing-tag1.png';
import searchIcon from '../assets/img/landing-search.png';
import { Link } from 'react-router-dom';
import { fadeIn } from 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll';


const Landing = (props) => {
  console.log(fadeIn);
  return (
    <div>

      <header className='header'>
        <div className='overlay'></div>
        <div className='container'>
          <div className='description'>
          <h1 className=' text-white'> Simple. Intuitive. Easy. </h1>
          <h1 className='text-white '> <strong>  Bookmarking done <em> right. </em></strong></h1>
          <Link to='/signup' id='sign-up-button' className='btn btn-primary btn-outline-light btn-lg'> Sign Up! </Link>
          </div>
        </div>
      </header>

      <div className="feature-container">
        <div className="container-fluid p-0">

          <section id="app-features" className="text-center">
            <h1 className="mb-5 mt-5 font-weight-bold">FEATURES</h1>
            

            <div className="row">

              <div className="col-md-4 mb-5">
                <ScrollAnimation animateIn='fadeIn'>
                  <img className='card-img-top' src={folderIcon} alt='search icon' />
                  <h4 className="my-4 font-weight-bold">Organize</h4>
                  <p className="grey-text">Organize your bookmarks into customizable folders and access them easily with folder filtering. easyBook also lets you save screenshots and descriptions to help you better visualize your collections. </p>
                </ScrollAnimation>
              </div>

              <div className="col-md-4 mb-1">
                <ScrollAnimation animateIn='fadeIn'>
                  <img className='card-img-top' src={searchIcon} alt='search icon' />
                  <h4 className="my-4 font-weight-bold">Search</h4>
                  <p className="grey-text">Quickly search through your collections to instantly find what you need and boost your productivity. Manually digging through bookmarks is a thing of the past. </p>
                </ScrollAnimation>
              </div>

              <div className="col-md-4 mb-1">
                <ScrollAnimation animateIn='fadeIn'>
                  <img className='card-img-top' src={tagIcon} alt='search icon' />
                  <h4 className="my-4 font-weight-bold">Tag</h4>
                  <p className="grey-text">Add re-usable tags to your bookmarks to group resources in different folders. Catagorizing whats important to you has never been easier. </p>
                </ScrollAnimation>
              </div>

            </div>
          </section>
          
        <footer id='footer'>
          <div className='m-0'>
            <div className="footer-copyright text-center">A 2019 Bloc.io Capstone Project:
              <Link target='_blank' to="https://github.com/jkestler/easybook"><span className='github-link'><em> View on Github</em> </span></Link>
            </div>
          </div>
        </footer>

        </div>
      </div>
      
    </div>
    
  )
};

export default Landing;