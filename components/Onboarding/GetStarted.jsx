import React from 'react';

const GetStarted = () => {
  return (
    <div className='GetStarted'>
        <section className='image-section'></section>
      <form>
        <section className='rectangle'>
          <div className='content'>
            <div className='line'></div>

            <div className='content-container'>
              <section className='text'>
                <h2>Let's Get Started!</h2>
                <p>Enter your mobile number</p>
              </section>
              {<section className='input-section'>
                <input type='tel' placeholder='+2348012345678'/>
                {/* <div className='vectors'>
                  <img src="\dropdown.png" alt="logo" className='dropdown'/>
                  <img src="\Line 1.png" alt="logo" className='input-line'/>
                </div> */}
              </section>}
              <section className='terms'>
                <p>By continuing, you agree to our <span>Terms and conditions</span></p>
              </section>
              <div className='continue'>
                <button>Continue</button>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  )
}

export default GetStarted;