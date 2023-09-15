import React from 'react'
import './home.scss'
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/slide/Slide'
import {cards} from '../../data'
import CatCard from '../../components/catCard/CatCard'
import Logo from '../../components/logo/Logo'

export default function Home() {
  return (
    <div className="home">
      <Featured/>
      <TrustedBy/>
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map(card=>(
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>

      <div className="features">
          <div className="container">
            <div className="item">
              <h1>A whole world of freelance talent at your fingertips</h1>
              <div className="title">
                <img src="/assets/check.png" alt="" />
                The best for every budget
              </div>
              <p>
                Find high-quality services at every price point. No hourly rates, 
                just project-based pricing.
              </p>

              <div className="title">
                <img src="/assets/check.png" alt="" />
                The best for every budget
              </div>
              <p>
                Find high-quality services at every price point. No hourly rates, 
                just project-based pricing.
              </p>

              <div className="title">
                <img src="/assets/check.png" alt="" />
                The best for every budget
              </div>
              <p>
                Find high-quality services at every price point. No hourly rates, 
                just project-based pricing.
              </p>

              <div className="title">
                <img src="/assets/check.png" alt="" />
                The best for every budget
              </div>
              <p>
                Find high-quality services at every price point. No hourly rates, 
                just project-based pricing.
              </p>
            </div>

            <div className="item">
              <video src="/assets/fiverr.mp4" controls></video>
            </div>
          </div>
        </div>


        <div className="features dark">
          <div className="container">
            <div className="item">
              <h1><Logo/> Business solutions</h1>
              <h1>Advanced solutions and professional talent for businesses</h1>

              <div className="title">
                <img src="/assets/check.png" alt="" />
                Fiverr Pro
              </div>
              <p>
              Access top freelancers and professional business tools for any project
              </p>

              <div className="title">
                <img src="/assets/check.png" alt="" />
                Fiverr Certified
              </div>
              <p>
              Build your own branded marketplace of certified experts
              </p>

              <div className="title">
                <img src="/assets/check.png" alt="" />
                Fiverr Enterprise
              </div>
              <p>
              Manage your freelance workforce and onboard additional talent with an end-to-end SaaS solution
              </p>
              <button>Learn more</button>
            </div>

            <div className="item">
              <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/51c35c7cecf75e6a5a0110d27909a2f5-1690202609364/EN.png" alt="" />
            </div>
          </div>
        </div>

    </div>
  )
}
