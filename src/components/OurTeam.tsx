import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image';
import '@/styles/OurTeam.css'; // Import the CSS file

function OurTeam() {
  return (
    <section className="our-team">
      <h2 className="section-title">Our Special Team</h2>
      <p className="section-description">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
      </p>

      <div className="team-grid">
        <div className="team-member">
          <Image
            src="https://superfood.qodeinteractive.com/wp-content/uploads/2016/09/team4-1.jpg"
            alt="Olivia Boyd"
            width={256}
            height={256}
            className="team-member-image"
          />
          <h3 className="team-member-name">Olivia Boyd</h3>
          <p className="team-member-role">Designer</p>
          <p className="team-member-description">
            Passionate about creating beautiful and functional designs that make a difference.
          </p>
          <div className="social-links">
            <Facebook className="social-icon" />
            <Instagram className="social-icon" />
            <Twitter className="social-icon" />
          </div>
        </div>

        <div className="team-member">
          <Image
            src="https://superfood.qodeinteractive.com/wp-content/uploads/2016/09/team2-1.jpg"
            alt="Jackie Brown"
            width={256}
            height={256}
            className="team-member-image"
          />
          <h3 className="team-member-name">Jackie Brown</h3>
          <p className="team-member-role">Photographer</p>
          <p className="team-member-description">
            Capturing life's beautiful moments through the lens of creativity.
          </p>
          <div className="social-links">
            <Facebook className="social-icon" />
            <Instagram className="social-icon" />
            <Twitter className="social-icon" />
          </div>
        </div>

        <div className="team-member">
          <Image
            src="https://superfood.qodeinteractive.com/wp-content/uploads/2016/09/team3-1.jpg"
            alt="Greg Wilson"
            width={256}
            height={256}
            className="team-member-image"
          />
          <h3 className="team-member-name">Greg Wilson</h3>
          <p className="team-member-role">Manager</p>
          <p className="team-member-description">
            Leading teams to success through strategic vision and collaboration.
          </p>
          <div className="social-links">
            <Facebook className="social-icon" />
            <Instagram className="social-icon" />
            <Twitter className="social-icon" />
          </div>
        </div>

        <div className="team-member">
          <Image
            src="https://superfood.qodeinteractive.com/wp-content/uploads/2016/09/team7-1.jpg"
            alt="Ruben Carpenter"
            width={256}
            height={256}
            className="team-member-image"
          />
          <h3 className="team-member-name">Ruben Carpenter</h3>
          <p className="team-member-role">Photographer</p>
          <p className="team-member-description">
            Bringing stories to life through the art of photography.
          </p>
          <div className="social-links">
            <Facebook className="social-icon" />
            <Instagram className="social-icon" />
            <Twitter className="social-icon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
