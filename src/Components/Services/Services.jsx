import React from 'react'
import service1 from "../../Assets/service1.png";
import service2 from "../../Assets/service2.png";
import service3 from "../../Assets/service3.png";
import service4 from "../../Assets/service4.png";
import DisplayService from './DisplayService';
import styles from './Services.module.css';

const data = [
    {
      icon: service1,
      title: "Get Best Prices",
      description:
        "Pay through our application and save thousands and get amazing rewards.",
    },
    {
      icon: service2,
      title: "Covid Safe",
      description:
        "We have all the curated hotels that have all the precaution for a covid safe environment.",
    },
    {
      icon: service3,
      title: "Flexible Payment",
      description:
        " Enjoy the flexible payment through our app and get rewards on every payment.",
    },
    {
      icon: service4,
      title: "Find The Best Near You",
      description:
        "Find the best hotels and places to visit near you in a single click.",
    },
  ];

export default function Services() {
  return (
    <section id="services" className={`${styles.services}`}>
      <h2 className={`${styles.sectionBreaker}  ${styles.h2}`}>Services</h2>
      <div className={`${styles.servicesProvided}`}>
        {
        data.map(service => {
            return (
                <DisplayService
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                />
            )
        })
        }

      </div>
    </section>
  ) 
}
