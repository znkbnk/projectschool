import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/privacy.css'

const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar />
      <div className='privacy-container'>
        <div className='privacy-header'>
          <h1>Privacy Policy</h1>
          <p>Last updated: 22-6-2024</p>
        </div>
        <div className='privacy-content'>
          <p>
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our Website. Please read
            this privacy policy carefully. If you do not agree with the terms of
            this privacy policy, please do not access the site.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The
            information we may collect on the Website includes:
          </p>
          <ul>
            <li>
              <strong>Personal Data:</strong> Personally identifiable
              information, such as your name, shipping address, email address,
              and telephone number, and demographic information, such as your
              age, gender, hometown, and interests, that you voluntarily give to
              us when you register with the Website or when you choose to
              participate in various activities related to the Website, such as
              online chat and message boards.
            </li>
            <li>
              <strong>Derivative Data:</strong> Information our servers
              automatically collect when you access the Website, such as your IP
              address, your browser type, your operating system, your access
              times, and the pages you have viewed directly before and after
              accessing the Website.
            </li>
          </ul>

          <h2>2. Use of Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with
            a smooth, efficient, and customized experience. Specifically, we may
            use information collected about you via the Website to:
          </p>
          <ul>
            <li>Create and manage your account.</li>
            <li>Process your transactions and subscriptions.</li>
            <li>Email you regarding your account or order.</li>
            <li>
              Monitor and analyze usage and trends to improve your experience
              with the Website.
            </li>
            <li>Perform other business activities as needed.</li>
          </ul>

          <h2>3. Disclosure of Your Information</h2>
          <p>
            We may share information we have collected about you in certain
            situations. Your information may be disclosed as follows:
          </p>
          <ul>
            <li>
              <strong>By Law or to Protect Rights:</strong> If we believe the
              release of information about you is necessary to respond to legal
              process, to investigate or remedy potential violations of our
              policies, or to protect the rights, property, and safety of
              others, we may share your information as permitted or required by
              any applicable law, rule, or regulation.
            </li>
            <li>
              <strong>Business Transfers:</strong> We may share or transfer your
              information in connection with, or during negotiations of, any
              merger, sale of company assets, financing, or acquisition of all
              or a portion of our business to another company.
            </li>
          </ul>

          <h2>4. Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to
            help protect your personal information. While we have taken
            reasonable steps to secure the personal information you provide to
            us, please be aware that despite our efforts, no security measures
            are perfect or impenetrable, and no method of data transmission can
            be guaranteed against any interception or other type of misuse.
          </p>

          <h2>5. Policy for Children</h2>
          <p>
            We do not knowingly solicit information from or market to children
            under the age of 13. If we learn that we have collected personal
            information from a child under age 13 without verification of
            parental consent, we will delete that information as quickly as
            possible. If you become aware of any data we have collected from
            children under age 13, please contact us at [Your Contact
            Information].
          </p>

          <h2>6. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time in order to
            reflect, for example, changes to our practices or for other
            operational, legal, or regulatory reasons. We will notify you of any
            changes by posting the new Privacy Policy on this page.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please
            contact us at:
          </p>
          <address>
            www.projectschool.dev
            <br />
            Birmingham
            <br />
            United Kingdom
            <br />
            projectschoolhelp@gmail.com
            <br />
            
          </address>
        </div>
      </div>
      <Footer />

    </div>
  );
};

export default PrivacyPolicy;
