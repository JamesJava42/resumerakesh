import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumeDataService {
  getSkills() {
    return [
      "Cloud Platforms: AWS (EC2, S3, RDS, Lambda, CloudFormation), Azure",
      "Development Practices: Agile, Scrum, DevOps",
      "CI/CD Tools: Jenkins, Azure DevOps, GitLab CI, Bitbucket",
      "Programming Languages: Java, JavaScript, Python, C, C++, TypeScript",
      "Frameworks: Spring Boot, AngularJS, Spring Security, OAuth2",
      "Database Management: MySQL, MongoDB",
      "Containerization and Orchestration: Docker, Kubernetes",
      "Testing Tools: Selenium, Cucumber, Postman, JUnit",
      "API Development: RESTful APIs, Swagger Documentation",
      "Message Brokering: Apache Kafka",
      "Virtual Reality Development: Unity, A-Frame, Meta Quest development"
    ];
  }

  getExperience() {
    return [
      {
        title: "Tech Developer",
        company: "Innovation Incubator, CSUDH, Carson, CA",
        duration: "2023 - Present",
        responsibilities: [
          "Enhanced user interfaces using AngularJS and React; developed backend services using Java with Spring Boot and Node.js.",
          "Administered AWS and SQL Database; implemented data storage solutions with AWS Storage S3.",
          "Crafted efficient APIs and server-side applications to support scalable and robust business logic.",
          "Designed and optimized SQL databases within AWS RDB for performance and reliability.",
          "Engineered and maintained integrations across AWS platforms, ensuring seamless service functionality and data redundancy."
        ]
      },
      {
        title: "Backend Developer (JAVA)",
        company: "Great Software Laboratory, Pune, INDIA",
        duration: "2021 - 2022",
        responsibilities: [
          "Designed and developed RESTful APIs, focusing on industry standards.",
          "Implemented CI/CD pipelines using Jenkins and Azure DevOps.",
          "Automated deployment scripts and managed Docker containers.",
          "Managed AWS cloud infrastructures focusing on high availability, fault tolerance, and auto-scaling capabilities.",
          "Supported cross-functional teams by troubleshooting and optimizing DevOps processes."
        ]
      },
      {
        title: "Full Stack Developer - JAVA",
        company: "Vanna Infotech Pvt Ltd, Hyderabad, INDIA",
        duration: "2022 - 2023",
        responsibilities: [
          "Deployed APIs in AWS cloud EC2 Instance and created CI/CD Bitbucket pipelines.",
          "Implemented security within Spring Boot applications, focusing on authentication and authorization mechanisms.",
          "Developed and deployed microservices architectures utilizing Docker for containerization and Kubernetes for orchestration.",
          "Led the design and development of RESTful APIs with comprehensive documentation using Swagger."
        ]
      }
    ];
  }
  getEducation() {
    return [
      {
        degree: 'Master’s in Computer Science',
        institution: 'California State University Dominguez Hills',
        duration: '2023 - 2025',
      },
      {
        degree: 'Bachelor’s in Computer Science and Engineering',
        institution: 'Lovely Professional University, Punjab, India',
        duration: '2018 - 2022',
      },
    ];
  }

  getActivities() {
    return ['Innovation', 'Critical Thinking', 'Art', 'Yoga', 'Skiing', 'Travel'];
  }

  getProjects() {
    return [
      {
        title: 'Client Registration Project',
        description: [
          'Led the design and implementation of a comprehensive client registration system, focusing on secure authentication and authorization mechanisms.',
          'Developed RESTful APIs to manage client data, ensuring secure storage and retrieval processes.',
          'Utilized Spring Security and OAuth2 to implement robust security protocols, safeguarding sensitive client information.',
          'Enhanced the frontend user interface using AngularJS, providing a seamless client interaction experience.',
          'Integrated encryption protocols to ensure the confidentiality and integrity of client data.',
          'Improved overall security and efficiency, reducing the risk of unauthorized access to client information.'
        ],
        icon: 'fas fa-user-plus'
      },
      {
        title: 'Student Management Project',
        description: [
          'Developed and managed a student management system aimed at streamlining academic processes within an educational institution.',
          'Implemented secure authentication and authorization procedures, handling CRUD operations on student data using MySQL.',
          'Designed RESTful APIs to facilitate efficient communication between the frontend and backend, enhancing data processing.',
          'Utilized Docker and Kubernetes for deployment, ensuring scalability and reliability in a production environment.',
          'Ensured data integrity and confidentiality through secure data handling practices, protecting sensitive student information.',
          'Optimized system performance by leveraging advanced backend technologies and best practices.'
        ],
        icon: 'fas fa-user-graduate'
      },
      // Add more projects as needed
    ];
  }

  getCertifications() {
    return [
      'JAVA Programming Language',
      'AWS Cloud Fundamentals',
      'Linux Certification',
      'Python Programming',
    ];
  }
  getAbout() {
    return `
      Innovative and detail-oriented software engineer with a passion for full-stack development, 
      cloud computing, and emerging technologies such as virtual reality. Skilled in DevOps practices 
      and automated testing, I seek to leverage my diverse skill set at Mainspring to contribute to 
      cutting-edge software solutions that enhance user engagement and operational efficiency.
    `;
  }
  
}