import React from 'react';
import './assets/styles/style.css'; // Import CSS file for styling

const PricingTable = () => {
  return (
    <div className="pricing-table">
      <div className="pricing-card">
        <h2>free</h2>
        <p>$0/month</p>
        <ul>
          <li>Single User</li>
          <li>50GB Storage</li>
          <li>Unlimited Public Projects</li>
          <li>Community Access</li>
          <li>Unlimited Private Projects</li>
          <li>Dedicated Phone Support</li>
          <li>Free Subdomain</li>
          <li>No Monthly Status Reports</li>
        </ul>
        <button>BUTTON</button>
      </div>
      <div className="pricing-card">
        <h2>PLUS</h2>
        <p>$9/month</p>
        <ul>
          <li>5 Users</li>
          <li>50GB Storage</li>
          <li>Unlimited Public Projects</li>
          <li>Community Access</li>
          <li>Unlimited Private Projects</li>
          <li>Dedicated Phone Support</li>
          <li>Free Subdomain</li>
          <li>Monthly Status Reports</li>
        </ul>
        <button>BUTTON</button>
      </div>
      <div className="pricing-card">
        <h2>PRO</h2>
        <p>$49/month</p>
        <ul>
          <li>Unlimited Users</li>
          <li>50GB Storage</li>
          <li>Unlimited Public Projects</li>
          <li>Community Access</li>
          <li>Unlimited Private Projects</li>
          <li>Dedicated Phone Support</li>
          <li>Free Subdomain</li>
          <li>Monthly Status Reports</li>
        </ul>
        <button>BUTTON</button>
      </div>
    </div>
  );
}

export default PricingTable;
