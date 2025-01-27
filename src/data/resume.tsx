import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sai Anil Tekuri",
  initials: "SAT",
  url: "https://saianiltekuri.io",
  location: "United States",
  locationLink: "https://www.google.com/maps/place/United+States",
  resumeLink: "https://drive.google.com/file/d/1tFBWiBVB1A5VgcYzla-68SQPaI214RAR/view?usp=sharing",
  description:
    "Experienced DevOps Engineer who loves designing efficient workflows, securing cloud systems, and optimizing CI/CD pipelines. A problem-solver at heart, I enjoy building solutions that make a difference.",
  summary:
    "At the start of 2023, I shifted from my role as a DevOps Engineer to dive deeper into designing scalable cloud solutions and optimizing workflows. With a [Master's in Computer Science](/#education) and [certifications in AWS and OKTA](#hackathons), I’ve led cloud migrations, built CI/CD pipelines, and implemented Zero Trust security frameworks. I’m passionate about automating processes, securing systems, and collaborating to solve meaningful challenges.",
  avatarUrl: "/me.jpg",
  skills: [
    "Terraform",
    "Jenkins",
    "CI/CD",
    "ArgoCD",
    "Ansible",
    "Docker",
    "Kubernetes",
    "Helm",
    "AWS",
    "EC2", "EBS", "VPC", "RDS", "ELB", "Auto Scaling", "CloudFormation", "CloudWatch", "Glue", "CloudFront", "Athena", "ElastiCache", "API Gateway", "Route 53", "SQS", "SNS",
    "Azure AD", "App Service", "AKS", "ACI", "Azure DevOps", "Functions",
    "Prometheus",
    "Grafana",
    "Azure Monitor",
    "Git",
    "Python",
    "Java",
    "Shell Scripting (Bash)",
    "SQL",
    "React.js",
    "MySQL",
    "Postgres",
    "MongoDB",
    "Linux",
    "Jira",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "saianiltekuri1011@gmail.com",
    tel: "+1 716-247-3879",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/SaiAnilTekuri",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anil-tekuri/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Anand PAG Inc.",
      href: "https://www.anand-pag.com/",
      badges: [],
      location: "Remote",
      title: "DevOps & IAM Engineer",
      logoUrl: "/anandpag.png",
      start: "July 2024",
      end: "Present",
      description:
        "Orchestrating secure and scalable identity and access management solutions. Implementing and managing Okta SSO integrations, streamlining user authentication processes, and enhancing security frameworks through MFA and Zero Trust principles. Contributing to optimizing DevOps workflows by automating deployment pipelines and integrating monitoring and logging tools. Helped secure and optimize cloud infrastructure while ensuring seamless user access management.",
    },
    {
      company: "Wipro Limited",
      badges: [],
      href: "https://www.wipro.com/",
      location: "Remote",
      title: "DevOps Engineer",
      logoUrl: "/wipro.png",
      start: "September 2020",
      end: "November 2022",
      description:
        "Led the design and implementation of CI/CD pipelines and managed large-scale cloud migrations to AWS. Automated infrastructure provisioning with tools like Terraform and Ansible, containerizing applications using Docker, and orchestrating deployments with Kubernetes and AWS Fargate. Collaborated closely with cross-functional teams to streamline development workflows, integrate monitoring and logging tools, and ensure seamless application delivery.",
    },
    {
      company: "Knowledge Lens: A Rockwell Automation Company",
      href: "https://www.knowledgelens.com/",
      badges: [],
      location: "On-site",
      title: "Automation Engineer",
      logoUrl: "/knowledgelens.png",
      start: "May 2019",
      end: "July 2019",
      description:
        "Focused on building innovative automation solutions and developing augmented reality (AR) applications. Designed and implemented workflows to automate repetitive tasks, improving operational efficiency, and enhancing user experiences. Collaborated with cross-functional teams to integrate cutting-edge technologies into AR projects, streamlining processes and ensuring seamless functionality.",
    },
  ],
  education: [
    {
      school: "University at Buffalo - The State University of New York",
      href: "https://www.buffalo.edu/",
      degree: "Master's Degree in Computer Science (MSCS)",
      logoUrl: "/ub.png",
      start: "2023",
      end: "2024",
    },
    {
      school: "VIT University",
      href: "https://chennai.vit.ac.in/",
      degree: "Bachelor's Degree in Computer Science and Engineering (B.Tech)",
      logoUrl: "/vit.png",
      start: "2016",
      end: "2020",
    },
  ],
  certification: [
    {
      certificate_name: "AWS Certified Developer - Associate",
      href: "https://www.credly.com/badges/2a54986e-7f50-4818-b2ed-452e39511f1c/public_url",
      issued_by: "AWS",
      logoUrl: "/aws.png",
      achieved_year: "2023",
    },
    {
      certificate_name: "OKTA Certified Professional",
      href: "https://www.credly.com/badges/50538d1a-e47d-4eb7-84ab-0cd1d16f7216/linked_in_profile",
      issued_by: "OKTA",
      logoUrl: "/okta.png",
      achieved_year: "2023",
    },
  ],
  projects: [
    {
      title: "DevOps-CICD-Workflow",
      href: "",
      dates: "",
      active: true,
      description:
        "Set up an end-to-end CI/CD pipeline for Java Spring Boot microservices using Jenkins, Docker, SonarQube, Kubernetes, and Argo CD.",
      technologies: [
        "Java",
        "Springboot",
        "Microservices",
        "Jenkins",
        "SonarQube",
        "AWS EC2",
        "Docker",
        "Kubernetes",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/SaiAnilTekuri/DevOps-CICD-Workflow",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cicd-flow.png",
      video:
        "",
    },
    {
      title: "AWS Resource Monitor",
      href: "",
      dates: "",
      active: true,
      description:
        "Built a comprehensive AWS resource monitoring system that utilizes AWS CLI and custom scripts to track the status, usage, and performance of EC2 instances, S3 buckets, RDS databases, and other AWS resources, providing real-time alerts and detailed usage reports for optimized cloud management.",
      technologies: [
        "AWS CLI",
        "Bash Scripting",
        "AWS SDK",
        "CloudWatch",
        "Cron Jobs",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/SaiAnilTekuri/automation-scripts",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/aws-monitor.png",
      video:
        "",
    },
    
  ],
  hackathons: [
    {
      title: "AWS Certified Developer",
      dates: "October 12th - December 25th, 2024",
      location: "",
      description:
        "Prepared thoroughly and successfully completed my AWS certification exam, showcasing my expertise in cloud computing and AWS services.",
      image:
        "https://miro.medium.com/v2/resize:fit:1200/1*tFl-8wQUENETYLjX5mYWuA.png",
      links: [],
    },
    {
      title: "DevOps CI/CD Workflow using AWS",
      dates: "October 29rd - November 6th, 2024",
      location: "",
      description:
        "Designed and implemented an end-to-end CI/CD workflow for Spring Boot-based microservices in AWS, leveraging tools like AWS, Jenkins, DOcker, Kubernetes and ARGO-CD for seamless automation, scalability, and deployment efficiency and documented the steps in a medium blog.",
      icon: "public",
      image:
        "https://www.navisite.com/wp-content/uploads/2021/11/DevOps-Graphic-1024x477.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/SaiAnilTekuri/DevOps-CICD-Workflow",
        },
        {
          title: "Medium",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/@saianiltekuri98/automating-ci-cd-for-java-spring-boot-applications-an-end-to-end-pipeline-with-jenkins-sonarqube-66a4ea6d216a",
        },
      ],
    },
    {
      title: "AWS Resource Monitoring Automation Using Bash Scripting",
      dates: "October 2nd - 4th, 2024",
      location: "",
      description:
        "Created Bash scripts to monitor AWS resources such as EC2 instances, S3 buckets, and RDS databases, integrating with AWS CLI to automate health checks, usage reports, and alerts for optimized cloud resource management.",
      image:
        "https://www.arcgis.com/sharing/rest/content/items/a7962aacaa404ecf84ed330590deebde/resources/Logo%20mark.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/SaiAnilTekuri/automation-scripts",
        },
      ],
    },
    {
      title: "Portfolio using React JS",
      dates: "September 15th - 18th, 2024",
      location: "",
      description:
        "Designed and developed a dynamic personal portfolio website using React.js, applying concepts like component-based architecture, state management, and responsive design to showcase my projects, skills, and experience effectively.",
      image:
        "https://static.vecteezy.com/system/resources/previews/004/753/030/non_2x/portfolio-icon-shadowed-detailed-portfolio-logo-free-vector.jpg",
      links: [
      ],
    },
    {
      title: "Sentiment Analysis of News Articles Using Computational Linguistics Techniques",
      dates: "February 02nd - May 4th, 2024",
      location: "",
      description:
        "Developed a sentiment analysis system to classify news articles as positive, negative, or neutral by leveraging computational linguistics techniques, including natural language processing (NLP), text pre-processing, and machine learning algorithms.",
      image:
        "https://thecustomizewindows.cachefly.net/wp-content/uploads/2021/05/What-is-Computational-Linguistics-01.jpg",
      links: [
      ],
    },
    {
      title: "Seminar: Modern Identity Theft Techniques: Bypassing Facial Recognition Systems",
      dates: "December 6th, 2023",
      location: "",
      description:
        "Delivered a seminar exploring advanced identity theft methods, such as deepfakes and spoofing, used to bypass facial recognition systems, along with insights into their implications and strategies to enhance biometric security.",
      image:
        "https://cdn-icons-png.flaticon.com/512/11094/11094214.png",
      links: [
      ],
    },
    {
      title: "Fake News Detection Using Deep Learning",
      dates: "September 6th - November 29th, 2023",
      location: "",
      description:
        "Developed a fake news detection model leveraging deep learning techniques, including LSTMs and CNNs, to analyze and classify news articles based on linguistic patterns and credibility indicators, enhancing the accuracy of misinformation identification.",
      image:
        "https://engineering.ucdavis.edu/sites/g/files/dgvnsk2151/files/styles/sf_landscape_16x9/public/media/images/413f7eda-5991-660f-a0e9-36d5a7ee2754.png?h=e1043f6d&itok=0jrdgkk5",
      links: [
      ],
    },
    {
      title: "Encryption and Decryption Techniques for Secure Data Handling",
      dates: "April 4th - 25th, 2023",
      location: "",
      description:
        "Practiced implementing encryption and decryption algorithms like AES, RSA, and hashing techniques to ensure secure data transmission and storage, gaining hands-on experience in cryptography fundamentals.",
      image:
        "https://cdn-icons-png.freepik.com/256/8481/8481124.png?semt=ais_hybrid",
      links: [
      ],
    },
    {
      title: "ER&D Excellence Award for Outstanding Performance at Wipro",
      dates: "March 24th, 2022",
      location: "",
      description:
        "Received the prestigious Excellence Award at Wipro for consistently delivering exceptional results, leading critical projects, and driving innovation in automation and CI/CD pipeline development.",
      image:
        "https://media.istockphoto.com/id/670022558/vector/gold-star-quality-badge.jpg?s=612x612&w=0&k=20&c=9-y08w95JKVK-Zu_cmXOJH3QQ7oxB3iRG2Jpvry90To=",
      links: [
      ],
    },
    {
      title: "Thermal Imaging for Leak Detection and Identification",
      dates: "January 12th - May 15th, 2020",
      location: "",
      description:
        "Developed a thermal imaging system to identify and locate leaks in pipelines and industrial equipment by analyzing temperature variations, enhancing early detection and minimizing downtime in critical systems.",
      image:
        "https://www.drone-thermal-camera.com/wp-content/uploads/2020/01/Photo-03-01-2020-2-59-19-PM.jpg",
      links: [],
    },
    {
      title: "Augmented Reality Car Catalog System",
      dates: "June 15th, 2019",
      location: "",
      description:
        "Developed an augmented reality-based car catalog system that allowed users to interact with 3D models of vehicles, enabling them to explore car features, colors, and configurations in an immersive and engaging way.",
      image:
        "https://www.jasoren.com/wp-content/uploads/2019/01/AR-technologies-in-automotive.jpg",
      links: [
      ],
    },
    {
      title: "Game-A-Thon: Designing an AR-Based Systems",
      dates: "January 26th, 2019",
      location: "",
      description:
        "Won second place in a Game-A-Thon by designing an innovative AR-based Smart Hospital System, which integrated augmented reality technologies to optimize hospital operations, improve patient care, and streamline workflows.",
      image:
        "https://www.vuzix.com/cdn/shop/articles/Blog_Image_Vuzix_Nursing_and_Smart_Glasses_Less_Admin_More_Patient_Care_01_20200911011722325_1.jpg?v=1634884599",
      links: [
      ],
    },
    {
      title: "Alumni Meeting Facilitator App for VITAA",
      dates: "June 17th - November 10th, 2018",
      location: "",
      description: "Created a website using HTML, CSS, and JavaScript that allows users to enter their location and discover popular tourist spots nearby, featuring an interactive and user-friendly interface to enhance the travel experience.",
      image:
        "https://media.istockphoto.com/id/1281178558/vector/online-conference.jpg?s=612x612&w=0&k=20&c=16DQN-oubsIHHQpxk3OXldmlP37X_H9nbk5Ud7gL32c=",
      links: [
      ],
    },
    {
      title: "Tourist Spot Finder Website",
      dates: "January 14th - March 21st, 2018",
      location: "",
      description: "Created a website using HTML, CSS, and JavaScript that allows users to enter their location and discover popular tourist spots nearby, featuring an interactive and user-friendly interface to enhance the travel experience.",
      image:
        "https://cdn-icons-png.flaticon.com/512/535/535137.png",
      links: [
      ],
    },
  ],
} as const;
