import React from 'react'
import './PlansScreen.css'

const PlansScreen = () => {
    function submitPlan() {
        var selectedPlan = document.querySelector('input[name="plan"]:checked');
        if (selectedPlan) {
          var planValue = selectedPlan.value;
          switch (planValue) {
            case '4k_hdr':
              alert('You have selected 4K with HDR plan for $4k.');
              break;
            case 'basic_720p':
              alert('You have selected Basic 720p plan for $2k.');
              break;
            case 'standard_1080p':
              alert('You have selected Standard 1080p plan for $3k.');
              break;
            default:
              alert('Please select a payment plan.');
              break;
          }
        } else {
          alert('Please select a payment plan.');
        }
      }
  return (
    <div className='plansScreen'>
        <div className="planesScreen__plan">
            <div className="planScreen__info">
                <h5>Netflix Primium</h5>
                <h6>4K + HDR</h6>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="planesScreen__plan">
            <div className="planScreen__info">
                <h5>Netflix Basic</h5>
                <h6>720p</h6>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="planesScreen__plan">
            <div className="planScreen__info">
                <h5>Netflix Standed</h5>
                <h6>1180p</h6>
            </div>
            <button>Subscribe</button>
        </div>
    </div>
    
  )
}

export default PlansScreen