import { useEffect } from 'react';
import parallaxie from '../../../common/parallaxie';

const Header = ({ title }) => {
  useEffect(() => {
    new parallaxie('.pg-header-bus.bg-img.parallaxie');
  }, []);

  return (
    <header className="pg-header-bus bg-img parallaxie valign" data-background="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" data-overlay-dark="5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="caption text-center">
              <h1 className="fz-60 fw-600">{title ? title : 'Services'}</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header