import React, { Fragment } from "react"
  import {
    SectionContainer,
    SectionHeader,
    GridContainer,
    GridItem
  } from "./styles"
  
  const DribbbleSection = () => {
  
  
  //   const[allData, setAllData] = useState([]);
  
  //   const data = useStaticQuery(graphql`
  //     query {
  //       allDribbbleShot {
  //         nodes {
  //           id
  //           title
  //           url
  //           cover
  //         }
  //       }
  //     }
  //   `);
  
  //   useEffect(() => {
  //     if(data) {
  //       setAllData(data.allDribbbleShot.nodes);
  //     }
  //   }, [data]);
  
  const shots =  [
      {
        "title": "Portfolio of Joe Gardner from Pixar's Soul",
        "description": "<p>\"Do characters from our favorite movies have portfolios? If yes how will they look like?\" This question brings us here.</p>\n\n<p>Here is our take on the portfolio of Joe Gardner from Pixar's Soul. </p>",
        "images": "https://cdn.dribbble.com/users/6734911/screenshots/15189018/dribbble_shot_hd_-_4__1_.png",
        "html_url": "https://dribbble.com/shots/15189018-Portfolio-of-Joe-Gardner-from-Pixar-s-Soul",
      },
      {
        "title": "Fitness App Concept UI",
        "description": "<p>Minimal health tracking app UI \"BeFitt\". This will help to manage your daily goals and keep you updated. Let us know your suggestions in the comments!</p>",
        "images": "https://cdn.dribbble.com/users/6734911/screenshots/15167648/frame_472.png",
        "html_url": "https://dribbble.com/shots/15167648-Fitness-App-Concept-UI",
      },
      {
        "title": "Game Listing App concept UI",
        "description": null,
        "images": "https://cdn.dribbble.com/users/6734911/screenshots/15167595/gamelistingui.png",
        "html_url": "https://dribbble.com/shots/15167595-Game-Listing-App-concept-UI",
      },
      {
        "title": "Music Player App Concept UI",
        "description": "<p>Music player app neumorphic minimal UI by our designer Rishav Mishra https://dribbble.com/RishClick\n<br />Swipe for the dark version.</p>",
        "images": "https://cdn.dribbble.com/users/6734911/screenshots/14884672/image_processing20201214-30804-1t7og1y.png",
        "html_url": "https://dribbble.com/shots/14884672-Music-Player-App-Concept-UI",
      },
      {
        "title": "Online Course App 3D Concept UI",
        "description": "<p>Online course app UI by our designer Rishav Mishra https://dribbble.com/RishClick</p>",
        "images": "https://cdn.dribbble.com/users/6734911/screenshots/14884655/image_processing20201218-6703-1mpvmm0.png",
        "html_url": "https://dribbble.com/shots/14884655-Online-Course-App-3D-Concept-UI",
      },
      {
        "title": "New year gift shop UI",
        "description": "<p>Concept app to send personalized gift to your loved ones. Created by Rishav\n<br />https://dribbble.com/RishClick</p>",
        "images": "https://cdn.dribbble.com/users/6734911/screenshots/14884635/image_processing20201229-2221-hqrn7j.png",
        "html_url": "https://dribbble.com/shots/14884635-New-year-gift-shop-UI",
      },
      {
        "title": "Glass Card - Rebound",
        "description": "<p>Concept app to send personalized gift to your loved ones. Created by Rishav\n<br />https://dribbble.com/RishClick</p>",
        "images": "https://cdn.dribbble.com/users/2183036/screenshots/14677740/media/ac3542d714b1de75e309c51fa2650b59.png",
        "html_url": "https://dribbble.com/shots/14677740-Glass-Card-Rebound",
      },
      {
        "title": "Invoice app UI",
        "description": "<p>Concept app to send personalized gift to your loved ones. Created by Rishav\n<br />https://dribbble.com/RishClick</p>",
        "images": "https://cdn.dribbble.com/users/2183036/screenshots/14615344/media/7f00cc795d8d9f90ed6139753491cdae.png",
        "html_url": "https://dribbble.com/shots/14615344-Invoice-app-UI",
      },
      {
        "title": "Anonymous Chat - Mobile Application",
        "description": "<p>Concept app to send personalized gift to your loved ones. Created by Rishav\n<br />https://dribbble.com/RishClick</p>",
        "images": "https://cdn.dribbble.com/users/2183036/screenshots/13981510/media/56821791893de0e063c03f92ecfb5703.png",
        "html_url": "https://dribbble.com/shots/13981510-Anonymous-Chat-Mobile-Application",
      },
      {
        "title": "Sleep Tracker Mobile App",
        "description": "<p>Concept app to send personalized gift to your loved ones. Created by Rishav\n<br />https://dribbble.com/RishClick</p>",
        "images": "https://cdn.dribbble.com/users/2183036/screenshots/13191588/media/ab5481817da220f5fe28d340b1536730.png",
        "html_url": "https://dribbble.com/shots/13191588-Sleep-Tracker-Mobile-App",
      },
      {
        "title": "SpaceX Human Space Flight - Crew Dragon UI Concept.",
        "description": "<p>Concept app to send personalized gift to your loved ones. Created by Rishav\n<br />https://dribbble.com/RishClick</p>",
        "images": "https://cdn.dribbble.com/users/2183036/screenshots/12135606/media/8a0661abef39557c77e529ba12851b94.png",
        "html_url": "https://dribbble.com/shots/12135606-SpaceX-Human-Space-Flight-Crew-Dragon-UI-Concept",
      },
      {
        "title": "Landing Page",
        "description": "<p>Concept app to send personalized gift to your loved ones. Created by Rishav\n<br />https://dribbble.com/RishClick</p>",
        "images": "https://cdn.dribbble.com/users/2183036/screenshots/7039279/media/d5499b704c365cdc4e640e137100adb9.png",
        "html_url": "https://dribbble.com/shots/7039279-Landing-Page",
      },
    ]
  
    return (
      <SectionContainer>
        <SectionHeader>
          <span>Follow us on</span>
          <h2>Dribbble</h2>
        </SectionHeader>
        <GridContainer>
          {
            shots && shots.map(dribble =>
              <Fragment key={dribble.html_url}>
                  <GridItem href={dribble.html_url} target="_blank" without="true" rel="noopener noreferrer">
                    <img src={dribble.images} alt={dribble.title} />
                  </GridItem>
              </Fragment>
            )
          }
        </GridContainer>
      </SectionContainer>
    )
  }
  
  export default DribbbleSection
  