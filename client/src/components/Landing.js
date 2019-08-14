import React from 'react';
import folderIcon from '../assets/img/landing-folder.png';
import tagIcon from '../assets/img/landing-tag1.png';
import searchIcon from '../assets/img/landing-search.png';
import { render } from 'react-dom';

import { fadeIn } from 'animate.css';
import styled, { keyframes } from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';


const Landing = (props) => {

  return (
    <div>
      
      <header className='header'>
        <div className='overlay'></div>
        <div className='container'>
          <div className='description'>
          <h1 className=' text-white'> Simple. Intuitive. Easy. </h1>
          <h1 className='text-white '> <strong>  Bookmarking done <em> right. </em></strong></h1>
          <a href='/signup' id='sign-up-button' className='btn btn-primary btn-outline-light btn-lg'> Sign Up! </a>
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
              <a target='_blank' rel='noopener noreferrer' href="https://github.com/jkestler/easybook"><span className='github-link'><em> View on Github</em> </span></a>
            </div>
          </div>
        </footer>

        </div>
      </div>
      
    </div>
    
  )
};

export default Landing;


// eslint-disable-next-line no-lone-blocks
{/* <div className='container'>
  <div className='row'>
    <div className='col-lg-12' id='heading-text'>
      <h1 className='header text-dark'> <strong> Simple. Intuitive. <em>Easy.</em> </strong></h1>
      <h1 className='text-dark mt-4'> <strong> Bookmarking done right.</strong> </h1>
    </div>
  </div>
  <div className='row' id='heading-row'>
    <div className='col-lg-4 col-sm-12 feature-column'>
      <div className='card bg-dark border-dark' id='landingCards'>
        <img className='card-img-top' src={folderIcon} alt='search icon' />
        <div className='card-body text-dark'>
          <p className='card-text'>Quickly search through your collections to instantly find what you need.</p>
        </div>
      </div>
    </div>
    <div className='col-lg-4 col-sm-12 feature-column'>
      <div className='card bg-dark border-dark ' id='landingCards'>
        <img className='card-img-top' src={searchIcon} alt='tag icon' />
        <div className='card-body text-dark'>
          <p className='card-text'>Add re-usable tags to your bookmarks to link resources in different folders.</p>
        </div>
      </div>
    </div>
    <div className='col-lg-4 col-sm-12 feature-column'>
      <div className='card bg-dark border-dark' id='landingCards'>
        <img className='card-img-top' src={tagIcon} alt='folder icon' />
        <div className='card-body text-dark'>
          <p className='card-text'> Organize your bookmarks into customizable folders and access them easily with folder
            filtering. </p>
        </div>
      </div>
    </div>
  </div>
</div> */}