import React from 'react';
import folderIcon from '../assets/img/landing-folder.png';
import tagIcon from '../assets/img/landing-tag1.png';
import searchIcon from '../assets/img/landing-search.png';
import { render } from 'react-dom';
import IosArrowDropdown from 'react-ionicons/lib/IosArrowDropdown';


const Landing = (props) => {
  return (
    <div className='container'>
        <div className='row'>
          <div className='col-lg-12' id='heading-text' >
             <h1 className='header text-dark' > <strong> Simple. Intuitive. <em>Easy.</em>  </strong></h1>
             <h1 className='text-dark mt-4'> <strong> Bookmarking done right.</strong> </h1>
          </div>
        </div>
        <div className='row' id='heading-row'>
          <div className='col-lg-4 col-sm-12 feature-column'>
            <div className='card bg-dark border-dark' id='landingCards' >
              <img className='card-img-top' src={folderIcon} alt='search icon'/>
              <div className='card-body text-dark'>
                <p className='card-text'>Quickly search through your collections to instantly find what you need.</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-sm-12 feature-column'>
            <div className='card bg-dark border-dark ' id='landingCards'>
              <img className='card-img-top' src={searchIcon} alt='tag icon'/>
              <div className='card-body text-dark'>
                <p className='card-text'>Add re-usable tags to your bookmarks to link resources in different folders.</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-sm-12 feature-column'>
            <div className='card bg-dark border-dark' id='landingCards'>
              <img className='card-img-top' src={tagIcon} alt='folder icon'/>
               <div className='card-body text-dark'>
                <p className='card-text'> Organize your bookmarks into customizable folders and access them easily with folder filtering. </p>
              </div>
            </div>
          </div>
      </div>
    </div>

        
  )
};

export default Landing;