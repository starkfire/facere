<template>
	<div class="portfolio">
        <div class="head">
            <div id="basic" data-aos="fade-left" data-aos-duration="1000">
                <img src="../assets/img/dev.jpg" />
                <div id="info" data-aos="fade-left" data-aos-duration="1500">
                    <p id="name">Pocholo L. Pantoja</p>
                    <p id="title">Developer & Researcher</p>
                </div>
            </div>
            <div id="stack" data-aos="fade-up" data-aos-duration="1500">
                <p id="heading">TECH STACK</p>
                <a-row id="category">
                    <a-col :span="8">
                        <p>LANGUAGES</p>
                    </a-col>
                    <a-col :span="8">
                        <p>FRAMEWORKS / LIBRARIES</p>
                    </a-col>
                    <a-col :span="8">
                        <p>TECHNOLOGIES</p>
                    </a-col>
                </a-row>
                <a-row id="tech">
                    <a-col :span="8">
                        <p>JavaScript</p>
                        <p>Python</p>
                        <p>C / C++</p>
                        <p>C#</p>
                        <p>PHP</p>
                        <p>Dart</p>
                        <p>Java</p>
                        <p>HTML & CSS</p>
                    </a-col>
                    <a-col :span="8">
                        <p>Vue</p>
                        <p>React</p>
                        <p>Express</p>
                        <p>Feathers</p>
                        <p>Flask</p>
                        <p>Django</p>
                        <p>React Native</p>
                        <p>Ionic</p>
                        <p>NativeScript</p>
                        <p>PyTorch</p>
                        <p>TensorFlow</p>
                        <p>OpenCV</p>
                        <p>NLTK</p>
                    </a-col>
                    <a-col :span="8">
                        <p>GraphQL</p>
                        <p>MongoDB</p>
                        <p>Redis</p>
                        <p>PostgreSQL</p>
                        <p>MySQL</p>
                        <p>SQLite</p>
                        <p>Unity (Game Development)</p>
                        <p>Blender (3D Modeling)</p>
                    </a-col>
                </a-row>
            </div>
        </div>
        <div class="background">
            <p id="title" data-aos="fade-right" data-aos-duration="1000">BACKGROUND</p>
            <a-row id="section" :gutter="36" data-aos="fade-up" data-aos-duration="1500">
                <a-col :xs="24" :lg="12" id="topic">
                    <p id="category">EXPERIENCE</p>
                    <div id="item">
                        <p id="head">Freelancing</p>
                        <p id="body">Software Developer (2016 - Present)</p>
                    </div>
                    <div id="item">
                        <p id="head">UltrAssist</p>
                        <p id="body">Co-Founder, Tech Lead (2019 - 2020)</p>
                    </div>
                    <div id="item">
                        <p id="head">Commission on Population and Development</p>
                        <p id="body">Research Collaborator (2019)</p>
                    </div>
                    <div id="item">
                        <p id="head">Arlekin Technologies</p>
                        <p id="body">Intern - Bioinformatics (2018)</p>
                    </div>
                    <div id="item">
                        <p id="head">OpeniT Philippines</p>
                        <p id="body">Intern - Software Quality Assurance (2018)</p>
                    </div>
                </a-col>
                <a-col :xs="24" :lg="12" id="topic">
                    <p id="category">EDUCATION</p>
                    <div id="item">
                        <p id="head">Mapua University</p>
                        <p id="body">2018 - 2019</p>
                    </div>
                    <div id="item">
                        <p id="head">Quezon Science High School</p>
                        <p id="body">2012 - 2016; 2016 - 2018 (STEM - SHS)</p>
                    </div>
                    <div id="item">
                        <p id="head">Catanauan Central School</p>
                        <p id="body">2008 - 2012</p>
                    </div>
                    <div id="item">
                        <p id="head">Malate Catholic School</p>
                        <p id="body">2007 - 2008</p>
                    </div>
                </a-col>
            </a-row>
            <a-row :gutter="36" data-aos="fade-up" data-aos-duration="1500">
                <a-col :xs="24" :lg="12" id="topic">
                    <p id="category">ACHIEVEMENTS</p>
                    <div id="item">
                        <p id="head">15<sup>th</sup> Smart Wireless Engineering Education Program</p>
                        <p id="body">National Finalist</p>
                        <p id="body">Smart Communications</p>
                    </div>
                    <div id="item">
                        <p id="head">The Cardinal Excellence Awards 2019</p>
                        <p id="body">Mapua University</p>
                    </div>
                    <div id="item">
                        <p id="head">NASA International Space Apps Challenge</p>
                        <p id="body">Global Nominee</p>
                        <p id="body">NASA, Microsoft Philippines, Womensphere</p>
                    </div>
                    <div id="item">
                        <p id="head">StartupWeekend MNL Education</p>
                        <p id="body">1<sup>st</sup> Runner-Up</p>
                        <p id="body">Techstars, Asian Institute of Management</p>
                    </div>
                    <div id="item">
                        <p id="head">HackForGov: CERT-PH CTF Cyber Challenge</p>
                        <p id="body">National Finalist</p>
                        <p id="body">CSP-CERT, Department of Information and Communications Technology (DICT)</p>
                    </div>
                    <div id="item">
                        <p id="head">Excellence in Science Research</p>
                        <p id="body">Quezon Science High School</p>
                    </div>
                </a-col>
                <a-col :xs="24" :lg="12" id="topic">
                    <p id="category">AFFILIATIONS</p>
                    <div id="item">
                        <p id="head">VR Philippines</p>
                        <p id="body">Student Ambassador (2019 - Present)</p>
                    </div>
                    <div id="item">
                        <p id="head">Junior Philippine Computer Society</p>
                        <p id="body">Project Committee (2018 - 2019)</p>
                    </div>
                    <div id="item">
                        <p id="head">QSHS - Department of Science and Technology</p>
                        <p id="body">Department Lead (2016 - 2018)</p>
                    </div>
                    <p id="category">PARTICIPATIONS</p>
                    <div id="item">
                        <p id="head">Google CTF 2019</p>
                        <p id="body">Google</p>
                    </div>
                    <div id="item">
                        <p id="head">ISSS UTCTF 2019</p>
                        <p id="body">University of Texas at Austin - Information & Systems Security Society</p>
                    </div>
                    <div id="item">
                        <p id="head">MITRE STEM CTF Cyber Challenge 2019</p>
                        <p id="body">MITRE Cyber Academy</p>
                    </div>
                    <div id="item">
                        <p id="head">TAMU CTF 2019</p>
                        <p id="body">Texas A&M University</p>
                    </div>
                </a-col>
            </a-row>
        </div>
        <div class="projects">
            <p id="projects-title" data-aos="fade-right" data-aos-duration="1000">PROJECTS</p>
            <a-row :gutter="36" id="projects-row" data-aos="fade-up" data-aos-duration="1500">
                <a-col :xs="24" :lg="8">
                    <p id="title">Soteria</p>
                    <p id="description">
                        A web application for wildfire detection, prediction, and analysis. It relies on data from clusters of IoT sensors and satellite data from NASA-FIRMS. Featured during the 2018 NASA Space Apps Challenge.
                    </p>
                </a-col>
                <a-col :xs="24" :lg="8">
                    <p id="title">Passcan</p>
                    <p id="description">
                        An experimental, city-wide system for automating quarantine border checks and a proposed alternative to the RapidPass. Passcan is focused on improving quarantine measures and contact tracing without compromising user security and privacy.
                    </p>
                </a-col>
                <a-col :xs="24" :lg="8">
                    <p id="title">AI-Driven Traffic Light</p>
                    <p id="description">
                        Using convolutional neural networks (YOLOv3) to autonomously control traffic lights based on pedestrian count and traffic density.
                    </p>
                </a-col>
            </a-row>
            <a-row :gutter="36" id="projects-row" data-aos="fade-up" data-aos-duration="1500">
                <a-col :xs="24" :lg="8">
                    <p id="title">Mobile Tor Router</p>
                    <p id="description">
                        A portable Raspberry Pi Router that secures and anonymizes outbound wireless traffic for all devices connected to its network.
                    </p>
                </a-col>
                <a-col :xs="24" :lg="8">
                    <p id="title">Optix</p>
                    <p id="description">
                        Detection and classification of eye cataracts and optical disorders from photographs via Transfer Learning. A project featured during the 2019 AngelHack in Greenbelt, Makati City.
                    </p>
                </a-col>
                <a-col :xs="24" :lg="8">
                    <p id="title">QRPay</p>
                    <p id="description">
                        A mobile application and API for quick drive-thru payments. It implements a secure QR code payment system that uses the PayMongo API.
                    </p>
                </a-col>
            </a-row>
            <a-row :gutter="36" id="projects-row" data-aos="fade-up" data-aos-duration="1500">
                <a-col :xs="24" :lg="8">
                    <p id="title">Fisherfolk Assistance</p>
                    <p id="description">
                        A web app which uses a GIS and an underwater Raspberry Pi module for assisting the fisherfolk in locating areas with high presence of fishes and their predicted paths.
                    </p>
                </a-col>
                <a-col :xs="24" :lg="8">
                    <p id="title">RFID Payment Module</p>
                    <p id="description">
                        A contactless payment system for Public Utility Jeepneys (PUJs) using only an affordable MFRC522 RFID module, Smartphone GPS for cost computation, and a reloadable RFID card.
                    </p>
                </a-col>
                <a-col :xs="24" :lg="8">
                    <p id="title">Watchbird</p>
                    <p id="description">
                        An autonomous drone equipped and designed for disaster response and rescue operations. A project featured during the 15<sup>th</sup> Smart SWEEP.
                    </p>
                </a-col>
            </a-row>
            <a-row :gutter="36" id="projects-row" data-aos="fade-up" data-aos-duration="1500">
                <a-col :xs="24" :lg="8">
                    <p id="title">Fire Rescue Robot</p>
                    <p id="description">
                        A toy RC Car rewired and hacked into a self-driving fire rescue robot. Featured during the 2016 QSHS Science Fair.
                    </p>
                </a-col>
                <a-col :xs="24" :lg="8">
                    <p id="title">Classicrack</p>
                    <p id="description">
                        A Python library for implementing and cracking classical ciphers.
                    </p>
                </a-col>
                <a-col :xs="24" :lg="8">
                    <p id="title">InceptionV3 REST API</p>
                    <p id="description">
                        A REST API for hosting InceptionV3 as an AI service for object classification.
                    </p>
                </a-col>
            </a-row>  
        </div>
	</div>
</template>
<script>
export default {
    name: 'Portfolio'
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;600;900&display=swap');

.head {
    background-color: #0f0f0f;
    min-height: 667px;
    padding: 5% 20%;

    #basic {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;

        img {
            border-radius: 50%;
            height: 200px;
        }
    }

    #info {
        color: white;
        font-family: 'Manrope', sans-serif;
        margin: 5% 5%;
        
        #name {
            font-size: 36px;
            font-weight: 700;
        }

        #title {
            font-size: 21px;
            font-weight: 300;
        }
    }

    #stack {
        color: #fff;
        font-family: 'Inter', sans-serif;
        margin: 3% 0px;

        #heading {
            font-size: 28px;
            font-weight: 600;
        }

        #category {
            font-size: 18px;
            font-weight: 600;
        }

        #tech {
            font-size: 16px;
            font-weight: 300;
        }
    }
}

.projects {
    background-color: #0f0f0f;
    color: #fff;
    min-height: 667px;
    padding: 5% 10% 5% 10%;
    font-family: 'Inter', sans-serif;

    #projects-title {
        text-align: center;
        font-size: 52px;
        font-weight: 900;
    }

    #title {
        font-size: 21px;
        font-weight: 600;
    }

    #projects-row {
        margin-bottom: 36px;
    }
}

.background {
    color: #000;
    font-family: 'Inter', sans-serif;
    min-height: 667px;
    margin: 5% 18%;

    #section {
        margin: 4%;
    }

    #title {
        font-size: 64px;
        font-weight: 900;
    }

    %topic-template {
        #category {
            font-size: 32px;
            font-weight: 600;
        }

        #item {
            margin: 5% 0px;

            p {
                margin: 0;
            }

            #head {
                font-size: 18px;
                font-weight: 600;
            }

            #body {
                font-size: 18px;
                font-weight: 300;
            }
        }
    }

    #topic {
        @extend %topic-template
    }
}

</style>