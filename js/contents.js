// for captions no more than 27 words
// console.log( "contents page loaded "); 
contents = {
  
  aqi : "<div class='row container'>                          \
                                                              \
    <span id='close' class='fui-cross'></span>                \
    <div id='glance' class='column_12'>                       \
      <div class='row margin-bottom'>                         \
        <div id='summary-left' class='column_4'>              \
          <h2> Air Quality Display </h2>                             \
          <ul>                                                \
          <li class='emphasis'> Architecture / Haptic Team Project </li>              \
          </ul> \
          <ul>                                                \
            <li class='emphasis'> Timeline </li>              \
            <li>  8 weeks (Mar - May 2013) </li>                                \
          </ul>                                               \
          <ul>                                                \
            <li class='emphasis'> Client </li>              \
            <li>  Group Against Smog and Pollution (GASP) </li>                                \
          </ul> \
          <ul>                                                \
            <li class='emphasis'> Blurb </li>                 \
            <li> Easily one of the most fun I've had in a class during my 5 years at CMU. Haptic Actions encouraged students to dive into both the physical and digital environments to produce aesthetically pleasing and functional designs. Throughout the course, we were exposed to woodshop, metal shop, digital fabrication, micro-controllers, electronics, and many more. After mid semester, we were partnered with clients from outside the university to create a haptic solution to a problem they have. I was teamed up with an architecture student named Adam Lans and our client was GASP. GASP is a non-profit citizens’ group in Southwestern Pennsylvania working for a healthy, sustainable environment. We built an interactive air quality display that pulls the current air quality index in Pittsburgh, and displays that information in a visually pleasing manner for passerby.  </li> \
          </ul>     \
                    \
        </div>      \
        <div id='summary-middle' class='column_4'>                                            \
          <ul>                                                                                \
            <li class='emphasis'> Process </li>                                               \
            <li> Sketching </li>                                           \
            <li> CNC Mill </li>                                                              \
            <li> Laser Cutter </li>                                                              \
            <li> Soldering </li>                                                              \
            <li> Arduino </li>                                                              \
            <li> Table Saw </li>                                                         \
            <li> Sanding </li>                                                         \
            <li> Varnishing </li>                                                          \
          </ul>                                                                               \
          \
          <ul>                              \
           <li class='emphasis'> Collaborator </li>  \
            <li> Adam Lans </li>                       \
          </ul>                             \
          \
          <div class='button primary'>                                                        \
          <a target='_blank' href='http://hapticaction.blogspot.com/'>                                                                    \
            view the course blog                                                           \
          </a>                                                                           \
          </div>                                                                              \
          <div class='button primary'>                                                        \
          <a target='_blank' href='downloads/aqi.pdf'>                                                                       \
            download our process                                                           \
          </a>                                                                           \
          </div>                                                 \
        </div>                                                                                \
        <div id='snapshot' class='column_4'>                                                  \
          <img src='images/haptic/snapshot.png' alt='' />                                  \
        </div>                                                                                \
        <!-- .row.margin-bottom -->                                                           \
      </div>                                                                                  \
                                                                                              \
    </div>                                                                                    \
                                                                                              \
    <div id='in-depth' class='column_12'>                                                     \
      <div class='row'>                                                                       \
        <div id='process'class='column_12'>                                                   \
          <div class='row'>                                                                   \
            <div class='column_12'>                                                           \
              <h4> Arduino </h4>                                                             \
              <p> This project taught me a lot about combining digital and physical products together. There were two main components of the AQI display: the arduino half, and the actual display half. Getting the arduino to work was very difficult. I have messed around and done minor projects with arduino prior to this course, but nothing on this level. In addition, I had never used a 'shield' as they like to call it. In order to get the current AQI reading, we had to connect to airnow.gov and pull that data to the arduino. In order to do that, we needed an Arduino WiFly Shield. After many, many hours of struggling, I decided to go into our school's Robo Club for help. There I met with a member, Brent Strysko, who was immensely helpful (thank you Brent!). The WiFly sends a HTTP request to airnow.gov and once connected, the WiFly pulls the current air quality data for Pittsburgh. Once this value is downloaded, the Arduino basically waits for a button push. The LEDs are the standard small size (5mm) but are much brighter than others. Each LED was soldered onto a resistor and then connected directly to the Arduino. \
              </p>         \
            </div>         \
                           \
            <div class='column_12 img-container'>                                        \
              <img src='images/haptic/arduino.png' />                \
            </div>                                                                      \
            <!-- .row -->               \
          </div>                                                                        \                                                  \
          <div class='row'>                                                                   \
            <div class='column_12'>                                                           \
              <h4> Wood Work </h4>                                                             \
              <p> Fabricating the display began with milling out the female inserts from a leftover discounted Cherry Plywood. These inserts housed a lasercut silhouette of figures with lungs that we designed. The inserts had holes in them which allow for light to shine from the back of the plywood to the laser cut lungs. The laser etchings were made out of poplar. Poplar was also complimentarily used to create a frame for the cherry plywood. The frame ended up housing light boxes and all the wirework in the back. Before gluing the frame together, we predrilled holes to insert nails into the frame. These nails when inserted aligned the frame during glue up. Once dry, we sanded everything and laser cut light boxes for the LEDs which we would insert into the back of the plywood inside the frame into the female inserts. These boxes illuminated the light, because the LEDs gave off too direct of light, and were made from an inexpensive green acrylic. The green acrylic was spray painted white with Krylon Fushion. After drilling a hole for the LEDs to sit in the box, we created shelves inside the frame to help keep the acrylic from moving inside the plywood inserts. This was accomplished with L brackets, zip ties, and datoed plywood. Once the boxes were installed into the frame, we then utilized the shelves to house the Arduino, battery, and wiring. \
              </p>         \
            </div>         \
                           \
            <div class='column_6 img-container'>                                        \
              <img src='images/haptic/milled.png' />                \
            </div>                                                                      \
            <div class='column_6 img-container'>                                        \
              <img src='images/haptic/clamps.png'/>                \
            </div>                                                                      \
            <!-- .row --> \
          </div>                                                                        \
          <div class='row'>                                                                   \
            <div class='column_12'>                                                           \
              <h4> Final </h4>                                                             \
              <p> After we finished the frame and got the WiFly to work, we had to think about powering the arduino. Initially we purchased a 'All Powers' 50k mAh external power supply with a micro usb port. However, this turned out to be faulty and we purchased another one. Currently, the display has not been assembled outside of GASP (5135 Penn Avenue) as we are working on some new issues but it should be up for anyone to see before the end of the summer!  \
              </p>         \
            </div>         \
                           \
            <div class='column_6 img-container'>                                        \
              <img src='images/haptic/final-back.png' />                \
            </div>                                                                      \
            <div class='column_6 img-container'>                                        \
              <img src='images/haptic/final-front.png'/>                \
            </div>                                                                      \
            <!-- .row --> \
          </div>                                                                        \
          <!-- #process -->                                                                        \
        </div>                                                                                     \
        <!-- .row.margin-bottom -->                                                                \
      </div>                                                                                       \
    </div>                                                                                         \
                                                                                                   \
    <!-- .row.margin-bottom.container -->                                                          \
  </div>                                                                                           \
  ",
  
  nasa:"<div class='row container'>                          \
                                                              \
    <span id='close' class='fui-cross'></span>                \
    <div id='glance' class='column_12'>                       \
      <div class='row margin-bottom'>                         \
        <div id='summary-left' class='column_4'>              \
        <h2> NASA </h2>                             \
        <ul>                                                \
        <li class='emphasis'> MHCI Capstone Project </li>              \
        </ul> \
        <ul>                                                \
        <li class='emphasis'> Client </li>              \
        <li> NASA Ames Research Center </li>                                \
        </ul> \
        <ul>                                                \
        <li class='emphasis'> Timeline </li>              \
        <li> 8 months ( Jan - Aug 2014 in progress)</li>                                \
        </ul>                                               \
        \
        <ul>                                                \
        <li class='emphasis'> Blurb </li>                 \
        <li> \
 As part of my Human-Computer Interaction Capstone Project, I am acting as Technical Lead on a team of 5 interdisciplinary students. We are working with NASA and improving astronaut and engineer procedure execution efficiency. NASA's astronauts and engineers are constantly executing detailed tasks, which are currently in the form of paper documents called procedures. These procedures often require the use of specific tools or materials that are difficult to locate and identify. A significant amount of time and effort is wasted trying to find these materials and verify that they are calibrated or in maintained properly for immediate use. During the 8 months that we're working with NASA, we plan on providing a solution to this problem by the beginning of August  \
        </li> \
        </ul>     \
        \
        </div>      \
        <div id='summary-middle' class='column_4'>                                            \
        <ul>                                                \
        <li class='emphasis'> Team </li>              \
        <li> Adam Menz </li>                                \
        <li> Kirsten Yee </li>                                \
        <li> Maggie Bignell </li>                                \
        <li> Lisa Ding </li>                                \
        </ul> \
        <ul>                                                                                \
        <li class='emphasis'> Process </li>                                               \
        <li> Literature Reviews </li>                                           \
        <li> Competitive Analysis / Landscape </li>                                           \
        <li> Contextual Inquiry </li>                                           \
        <li> Visioning </li>                                                              \
        <li> Prototyping </li>                                                              \
        <li> User Testing </li>                                                              \
        </ul>                                                                               \
          <div class='button primary'>                                                        \
            <a href='http://www.hcii.cmu.edu/M-HCI/2014/NASA/' target='_blank'> \
              view our site                                                          \
            </a>                                                                              \
          </div>                                                                              \                                                                           \
        </div>                                                                                \
        <div id='snapshot' class='column_4'>                                                  \
          <img src='images/nasa/snapshot.png' alt='' />                                  \
        </div>                                                                                \
        <!-- .row.margin-bottom -->                                                           \
      </div>                                                                                  \
                                                                                              \
    </div>                                                                                    \
                                                                                              \
    <div id='in-depth' class='column_12'>                                                     \
      <div class='row'>                                                                       \
        <div id='process'class='column_12'>                                                   \
          <div class='row'>                                                                   \
                                                                                              \
            <div class='column_12'>                                                           \
              <h4> Kickoff </h4>                                                             \
              <p>                                                                             \
          Back in January, we had our kickoff meeting with our client Matthew Sharpe. This meeting served as a formal introduction to the team and NASA's problem at hand. In the meeting, we learnt that not only are procedures paper based, but there are specific steps that occur in succession. These procedures have to be signed by the engineer and a present QA engineer. Afterwards, since we are unable to fly up to the ISS and observe astronauts (Lisa was sad about that), we discussed analogous domains that we could perform contextual inquiries on. After naming a few, we decided to plot out the characteristics that each domain had in common with astronauts and engineers at NASA. Matt then mapped out ideas about how our solution could affect NASA employees and showed us a new way to affinity. The takeaway from Matt’s diagram was smart procedures: based on the context, our solution could possibly tell an astronaut where his tools are located, which tools are necessary or can be replaced if malfunctioning, and redirect an astronaut if he skips a step or if there’s a more efficient way to do said step. Matt then taught us how to do an affinity brainstorm with questions! This was exceptionally useful because it gave us a better look at the characteristics in each domain we should focus on, and it gave us useful (general and specific) questions to use in our contextual inquiries. \
              </p>         \
            </div>         \
                           \
            <div class='column_6 img-container'>                                        \
              <img src='images/nasa/kickoff.jpg' />                \
            </div>                                                                      \
            <div class='column_6 img-container'>                                        \
              <img  src='images/nasa/stickies.JPG' />           \
            </div>                                                                      \                                                                  \
          </div>                                                                        \
                                                                                        \
          <div class='row'>                                                             \
            <div class='column_12'>                                                     \
              <h4> Where We Are </h4>                                                      \
              <p>                                                                       \
               We spent the entirety of last semester conducting research on analogous domains. We created a competitive analysis, sequence models, flow models, artifact models, affinity diagrams, visions, and many more during our research phase. By the end of the semester we created three insights based on our findings. Ease in gathering key information for quick reference streamlines procedure executions, successful collaboration requires coordinated sharing of procedure and status information, and related physical materials and information become meaningful when kept together. We are currently taking these insights and narrowing down the visions we made last semester to create a working prototype for NASA astronauts and engineers. So far we have narrowed down our scope to test and prototype three low fidelity forms. An augmented reality display, a wristwatch display, and an armband display. After user testing each prototype with NASA employees here, we will be able to get feedback on which form the users prefer, and then move onto the next round of tests focusing less on form and more on usability. I'll keep you updated on where we go, so stay tuned! \
              </p>        \
            </div>        \
            <div class='column_6 img-container'>                               \
              <img src='images/nasa/lo-fi.JPG' />                 \
            </div>                                                             \
            <div class='column_6 img-container'>                               \
              <img src='images/nasa/ar.JPG' />             \
            </div>                                                             \
            <div class='column_6 img-container'>                               \
              <img src='images/nasa/lo-fi2.JPG' />                 \
            </div>                                                             \
            <div class='column_6 img-container'>                               \
              <img src='images/nasa/room.JPG' />             \
            </div>                                                             \
          </div>                                                               \
                                                                             \
          <!-- #process -->                                                                        \
        </div>                                                                                     \
        <!-- .row.margin-bottom -->                                                                \
      </div>                                                                                       \
    </div>                                                                                         \
                                                                                                   \
    <!-- .row.margin-bottom.container -->                                                          \
  </div>                                                                                           \
  ", 

  ar : "<div class='row container'>                          \
                                                              \
    <span id='close' class='fui-cross'></span>                \
    <div id='glance' class='column_12'>                       \
      <div class='row margin-bottom'>                         \
        <div id='summary-left' class='column_4'>              \
          <h2> Apartment Reviews </h2>                             \
          <ul>                                                \
          <li class='emphasis'> Front End Design Summer Job </li>              \
          </ul> \
          <ul>                                                \
            <li class='emphasis'> Timeline </li>              \
            <li>  13 weeks (June - Aug 2013) </li>                                \
          </ul>                                               \
                                                              \
          <ul>                                                \
            <li class='emphasis'> Blurb </li>                 \
            <li> I worked for <a class='project-links' target='_blank' href='http://clickbrands.com/'>ClickBrands</a> as a Front-End Designer. It was my first real front-end gig and I bloody loved it! Initially, I got my feet wet with a project called <a class='project-links' target='_blank' href='http://www.apartmentlinks.com/'>Apartment Links</a>, but the bulk of our time and effort was spent revamping their old apartment ratings site to Apartment Reviews (.net). The best part was that because we had a small team, I not only did front-end tasks, but I designed mockups, helped with the user experience of the site, helped with their Ruby on Rails framework, and migrated the working front-end prototypes into the application. </li> \
          </ul>     \
                    \
        </div>      \
        <div id='summary-middle' class='column_4'>                                            \
          <ul>                                                                                \
            <li class='emphasis'> Process </li>                                               \
            <li> Javascript </li>                                           \
            <li> Ruby On Rails </li>                                                              \
            <li> Visual Design </li>                                                              \
            <li> Wireframes </li>                                                         \
            <li> Low to Med-Fi Mockups </li>                                                          \
          </ul>                                                                               \
          \
          <ul>                              \
           <li class='emphasis'> Collaborators </li>  \
            <li>Jonathan Miller </li>                       \
            <li>Joshua Gerbasi</li>                       \
            <li>Daniel Muller</li>                       \
            <li>Justin Edwards</li>                       \
            <li>Rebecca Chen</li>                       \
          </ul>                             \
          \
          <div class='button primary'>                                                        \
            <a target='_blank' href='http://www.apartmentreviews.net/'>                                                                       \
              view the site                                                          \
            </a>                                                                              \
          </div>                                                                              \                                                                            \
        </div>                                                                                \
        <div id='snapshot' class='column_4'>                                                  \
          <img src='images/apartment-reviews/snapshot.png' alt='' />                                  \
        </div>                                                                                \
        <!-- .row.margin-bottom -->                                                           \
      </div>                                                                                  \
                                                                                              \
    </div>                                                                                    \
                                                                                              \
    <div id='in-depth' class='column_12'>                                                     \
      <div class='row'>                                                                       \
        <div id='process'class='column_12'>                                                   \
          <div class='row'>                                                                   \
                                                                                              \
            <div class='column_12'>                                                           \
              <h4> Process </h4>                                                             \
              <p>                                                                             \
               \
              </p>         \
            </div>         \
                           \
            <div class='column_6 img-container'>                                        \
              <img src='images/apartment-reviews/dashboard.png' />                \
            </div>                                                                      \
            <div class='column_6 img-container'>                                        \
              <img src='images/apartment-reviews/city-page2.png'/>                \
            </div>                                                                      \
            <div class='column_6 img-container'>                                        \
              <img class='width-70' src='images/apartment-reviews/apartment-cards.png' />              \
            </div>                                                                      \
            <div class='column_6 img-container'>                                        \
              <img class='width-70' src='images/apartment-reviews/property-pages.png' />                \
            </div>                                                                      \
          </div>                                                                        \                                                  \
          <!-- #process -->                                                                        \
        </div>                                                                                     \
        <!-- .row.margin-bottom -->                                                                \
      </div>                                                                                       \
    </div>                                                                                         \
                                                                                                   \
    <!-- .row.margin-bottom.container -->                                                          \
  </div>                                                                                           \
  ", 
  ipad: "<div class='row container'>                          \
                                                              \
    <span id='close' class='fui-cross'></span>                \
    <div id='glance' class='column_12'>                       \
      <div class='row margin-bottom'>                         \
        <div id='summary-left' class='column_4'>              \
          <h2> fat Magazine </h2>                             \
          <ul>                                                \
          <li class='emphasis'> Individual course project </li>              \
          </ul> \
          <ul>                                                \
            <li class='emphasis'> Timeline </li>              \
            <li> 6 weeks (Nov - Dec 2013) </li>                                \
          </ul>                                               \
                                                              \
          <ul>                                                \
            <li class='emphasis'> Blurb </li>                 \
            <li> For the final project in our Interaction Design Fundamentals course, we needed to investigate e-magazines in a certain domain and find an opportunity where we can introduce something new to the space. The space I decided to explore was travel with a dash of food. My design was targeted towards mid twenty to early thirty year olds that love to travel and eat. While designing the feel and layout of the magazine we were tasked with keeping specific interactions in mind, or creating our own. </li> \
          </ul>     \
                    \
        </div>      \
        <div id='summary-middle' class='column_4'>                                            \
          <ul>                                                                                \
            <li class='emphasis'> Process </li>                                               \
            <li> Competitive Analysis (groups)</li>                                           \
            <li> Moodboard </li>                                                              \
            <li> Personals </li>                                                              \
            <li> Design Language</li>                                                         \
            <li> Visual Design </li>                                                          \
          </ul>                                                                               \
          <div class='button primary'>                                                        \
            <a target='_blank' href='downloads/ipad.pdf'>                                                                       \
              Download fat Magazine                                                           \
            </a>                                                                              \
          </div>                                                                              \
          <div class='button primary'>                                                        \
            <a target='_blank' href='downloads/ipad-process.pdf'>                                                                       \
              Download my process                                                             \
            </a>                                                                              \
          </div>                                                                              \
        </div>                                                                                \
        <div id='snapshot' class='column_4'>                                                  \
          <img src='images/ixdf/ipad/snapshot.png' alt='' />                                  \
        </div>                                                                                \
        <!-- .row.margin-bottom -->                                                           \
      </div>                                                                                  \
                                                                                              \
    </div>                                                                                    \
                                                                                              \
    <div id='in-depth' class='column_12'>                                                     \
      <div class='row'>                                                                       \
        <div id='process'class='column_12'>                                                   \
          <div class='row'>                                                                   \
                                                                                              \
            <div class='column_12'>                                                           \
              <h4> Personas </h4>                                                             \
              <p>                                                                             \
                Finding the right magazine type was difficult. I envisioned myself doing a magazine on sushi and japan, but after discussions with my peers and professor, I found that food was not one of the acceptable categories. And doing a piece on just japan seemed too boring to me. So rather than waste time thinking about the type of magazine, I began designing my mood board, thinking more about the feelings I wanted my magazine to elicit from my audience. Afterwards, I decided on making a Japanese Travel magazine that highlighted the popular foods in this issue's cities. I was then able to create my personas: the gastronomer Angela Nhu, the recent grad Amelie Duval, and the software engineer Jonathan Mbu. Each of these personas loved food as much as they loved to travel, which made them perfect for my magazine! \
              </p>         \
            </div>         \
                           \
            <div class='column_4 img-container'>                                        \
              <img class='width-70' src='images/ixdf/ipad/angela.png' />                \
            </div>                                                                      \
            <div class='column_4 img-container'>                                        \
              <img class='width-70' src='images/ixdf/ipad/jonathan.png' />              \
            </div>                                                                      \
            <div class='column_4 img-container'>                                        \
              <img class='width-70' src='images/ixdf/ipad/amelie.png' />                \
            </div>                                                                      \
          </div>                                                                        \
                                                                                        \
          <div class='row'>                                                             \
            <div class='column_12'>                                                     \
              <h4> Moodboard </h4>                                                      \
              <p>                                                                       \
                I looked through food, travel, and lifestyle magazines to draw inspiration for the design language of the magazine. On the top half of my board, there are pantone and earthy colors that are warm and calming yet exciting. On the bottom half of my board, there are much brighter colors that you would find in foods, and at times table decor. \
              </p>        \
            </div>        \
            <div class='column_6 img-container'>                               \
              <img src='images/ixdf/ipad/moodboard-top.png' />                 \
            </div>                                                             \
            <div class='column_6 img-container'>                               \
              <img src='images/ixdf/ipad/moodboard-bottom2.png' />             \
            </div>                                                             \
          </div>                                                               \
                                                                               \
                                                                               \
          <div class='row'>                                                    \
            <div class='column_12'>                                            \
              <h4> Brand </h4>                                                 \
              <p>                                                              \
                Deciding on the typeface was the next difficult issue for me. I went through about 20 variations, most of which looked terrible to be honest, before I finally settled on LT Osaka and Yanone Kaffeesatz for my headers, and Roboto slab for my text. Finally, selecting my magazine's logo was a necessary yet painful process. I was never happy with my decision. I wanted a FAT logo that was skinny, but sometimes I wanted a FAT logo that was actually fat! I could not make up my mind. Eventually it came down to a matter of time and luck. The project was due in less than 10 hours and I still was very unhappy with cover. Oddly enough, I had chose LT Osaka for parts of my headers already, but it never dawned on me to try it on the front page. I think it worked out really well! If you're interested in seeing more of my process, please feel free to download the process document below. If you're also interested in seeing the entire book (please keep in mind it's not really interactive), a download of that is also available below!     \
              </p>                                                 \
            </div>                                                 \
            <div class='column_12 img-container'>                  \
              <img src='images/ixdf/ipad/process.png' />           \
            </div>                                                 \
          </div>                                                   \
                                                                   \
          <div class='row'>                                        \
            <div class='column_12'>                                \
              <h4> Final Layout </h4>                              \
              <p>                                                  \
                For the final layout, I created the cover, two table of contents - one for food and one for travel, an example of a an interactive title page that lets the reader explore Japan, and finally, a two-page feature on a perfect Japanese dish: Kaiseki.   \
              </p>                                                                                 \
            </div>                                                                                 \
            <div class='column_6 img-container'>                                                   \
              <img src='images/ixdf/ipad/cover-page.png' />                                        \
            </div>                                                                                 \
            <div class='column_6 img-container'>                                                   \
              <img src='images/ixdf/ipad/food.png' />                                              \
            </div>                                                                                 \
          </div>                                                                                   \
                                                                                                   \
                                                                                                   \
                                                                                                   \
          <!-- #process -->                                                                        \
        </div>                                                                                     \
        <!-- .row.margin-bottom -->                                                                \
      </div>                                                                                       \
    </div>                                                                                         \
                                                                                                   \
    <!-- .row.margin-bottom.container -->                                                          \
  </div>                                                                                           \
  ", 

  
  wp: "<div class='row container'>                          \
                                                              \
    <span id='close' class='fui-cross'></span>                \
    <div id='glance' class='column_12'>                       \
      <div class='row margin-bottom'>                         \
        <div id='summary-left' class='column_4'>              \
          <h2> Waiter Please! </h2>                             \
          <ul>                                                \
          <li class='emphasis'> Interaction Design Team Project </li>              \
          </ul> \
          <ul>                                                \
            <li class='emphasis'> Timeline </li>              \
            <li> 8 weeks (Mar - May 2014) </li>                                \
          </ul>                                               \
                                                              \
          <ul>                                                \
            <li class='emphasis'> Blurb </li>                 \
            <li> For the final project in our Interaction Design Studio course we investigated the possible futures for emerging spaces where no social norms exist to define how people should act and interact. We leveraged breakthroughs in machine learning, UbiComp sensing and sensemaking, and social computing technology to envision provocative, interactive, intelligent, service-systems designed to support the needs and desires of a target set of users at a specific location. The end result was a video sketch for a ubiquitous computing system to be used in a crowded area.  Be it a bar, a club, or a comedy show. Our team designed a restaurant and bar system that detects when a glass or pitcher is almost empty, and  indicates to the people at the table where the nearest waiter is.  \
          </ul>     \
                    \
        </div>      \
        <div id='summary-middle' class='column_4'>                                            \
        <ul>                              \
        <li class='emphasis'> Collaborators </li>  \
        <li> Lena Malkhasian </li>                       \
        <li> Christina Brant </li>                       \
        <li> Angela Ren </li>                       \
        </ul>                             \
        <ul>                                                                                \
        <li class='emphasis'> Process </li>                                               \
        <li> Observations</li>                                           \
        <li> Guerilla Interviews </li>                                                              \
        <li> Speed Dating </li>                                                              \
        <li> Storyboarding </li>                                                         \
        <li> Video Sketch </li>                                                          \
        </ul>                                                                               \                                                                          \
        </div>                                                                                \
        <div id='snapshot' class='column_4'>                                                  \
          <img src='images/ixds/snapshot.png' alt='' />                                  \
        </div>                                                                                \
        <!-- .row.margin-bottom -->                                                           \
      </div>                                                                                  \
                                                                                              \
    </div>                                                                                    \
                                                                                              \
    <div id='in-depth' class='column_12'>                                                     \
      <div class='row'>                                                                       \
        <div id='process'class='column_12'>                                                   \
          <div class='row'>                                                                   \
                                                                                              \
            <div class='column_12'>                                                           \
              <h4> Process </h4>                                                             \
              <p>                                                                             \
                The team and I started off the project by going to 'UP' Bar in Shadyside for their weekly wine night on wednesday. The bar, which is half a sit down restaurant and half a really relaxed bar, was very different that night. When we got there it was packed. Very little room to move and it took me a while to find my teammates. That night we came to observe, mingle, and learn about the reasons why people would want to come to 'UP' rather than other bars. Some of our findings and insights are: people come to celebrate with friends, the bartender / waiters are extremely busy (making it very hard to get their attention at times), and people like to buy drinks and share them. Afterwards we framed the problem at hand and came up with specific solutions that we shared with the class. Below is a visualization of the frames we created. Below each frame is a solution/idea that we brainstormed in class.   \
              </p>         \
            </div>         \
            \
            <div class='column_12 img-container'>                                        \
            <img src='images/ixds/ubicomp-frames.png' alt='' />                                  \
            </div> \                                                                    \
          </div>                                                                        \
          <div class='row'>  \
          <div class='column_12'>                                                           \
          <h4> Ubicomp Chart </h4>                                                             \
          <p>                                                                             \
   After framing, we mapped out each idea on a chart to see which ones were the most feasible and to create storyboards so that we could speed date with individuals and get better feedback. We created 6 storyboards portraying different ideas and implementations we had to solve problems we saw. The storyboards were ideas like a game that encouraged strangers to mingle, a system that allowed you to remotely place an order to the bartender, glasses that when clinked would create awesome visualizations, and more.  \
          </p>         \
          </div>         \
          \
          <div class='column_9 img-container'>                                        \
          <img src='images/ixds/ubicomp-chart.png' alt='' />                                  \
          </div>                                                                                                                                    \
          </div> \
          <div class='row'>                                        \
            <div class='column_12'>                                \
              <h4> Final Solution </h4>                              \
              <p> Eventually, with feedback from speed-daters and our class, we decided to focus on solving the issue of getting the waiter's attention. This led to the creation of 'Waiter Please!' To explain this concept we created a video sketch that shows 3 different vignettes and how the system responds in each one. The video below is the final sketch we created, but if you're interested in seeing the rough one, just checkout my vimeo videos (after watching the final :P ). At the end of the video we explain the technical features of the system and show that it is feasible and can easily be implemented today! Click on the image below to watch the sketch!   \
              </p>                                                                                 \
            </div>                                                                                 \
            <div class='column_12 img-container'>  \
            <a class='opaque' target='_blank' href='http://vimeo.com/97637176'> \
            <img src='images/ixds/video-sketch.png' />  \
            </a> \
            </div>                   \
          </div>                                                                                   \                                                                       \
          <!-- #process -->                                                                        \
        </div>                                                                                     \
        <!-- .row.margin-bottom -->                                                                \
      </div>                                                                                       \
    </div>                                                                                         \
                                                                                                   \
    <!-- .row.margin-bottom.container -->                                                          \
  </div>                                                                                           \
  ", 
  notebook: "<div id='notebook' class='row container'>                          \
                                                              \
    <span id='close' class='fui-cross'></span>                \
    <div id='glance' class='column_12'>                       \
      <div class='row margin-bottom'>                         \
        <div id='summary-left' class='column_9'>              \
          <h2> Notebook </h2>                             \
          <h5> assorted concepts, smaller projects, thoughts, practices and ideas. click on the images to checkout books, websites, and other assorted bits of extra information. </h5>                             \
        </div>                          \
        <div id='snapshot' class='column_3'>                                                  \
          <img src='images/icons/other-projects.png' />                                  \
        </div>                                                                                \
        <!-- .row.margin-bottom -->                                                           \
      </div>                                                                                  \
                                                                                              \
    </div>                                                                                    \
                                                                                              \
    <div id='in-depth' class='column_12'>                                                     \
      <div class='row'>                                                                       \
        <div id='process'class='column_12'>                                                   \
          <div class='row'>                                                                   \
                                                                                              \
            <div class='column_6'>                                                           \
              <h4> Biologic </h4>                                                             \
              <p>                                                                             \
This was a course project where we were tasked with choosing an organism, researching various aspects about the organism, and then coming up with a way to apply features of said organism to architecture. Through lots of iterations, ideation, and failure, my team and I designed a responsive building technology based on our initial organism: a pufferfish. We began by reading numerous research documents about pufferfish and learning about the organism's anatomy. This was a difficult project for two reasons: it forced my team and myself out of our comfort zones, and our prototypes and designs failed...a lot. But failure is never bad unless you're unable to understand what you did wrong and learn from it. This course taught me to research, design, and build without constraints. Most, if not all, of my previous projects have had some form of tangible end goal. This was my first time experiencing an truly open ended project. I did not like it at the time, but I eventually realized that industry might be similar to this. A client is going to ask you to build or design 'something' for them, and it's up to you to figure out what they need built, scope it out, and deliver the end product to them. \
              </p>         \
            </div>         \
            \
            <div class='column_6 img-container'>                                        \
            <a class='opaque' target='_blank' href='downloads/biologic.pdf'> \
            <img src='images/biologic/presentation.jpg' alt='' />                                  \
            </a> \
            </div>                                                           \
          </div>                                                                        \
          <div class='row'>  \
          <div class='column_6'>                                                           \
          <h4> Hex Tiles </h4>                                                             \
          <p>                                                                             \
This was a course project where we were tasked with designing a hexagonal wall pattern not unlike matsys's wall. We started off designing one tile, however, the end goal was to create a design that when rotated and placed together with other tiles, would create a new form or pattern along a wall. It was my first time really diving into Rhino and I struggled with the software. But now, I'm glad to say that I have working knowledge of Rhino! \
          </p>         \
          </div>         \
          \
          <div class='column_6 img-container'>                                        \
          <a class='opaque' target='_blank' href='downloads/hex-tiles.pdf'> \
          <img src='images/idm/hex-tiles/hex3.gif' alt='' />                                  \
          </a>     \
          </div>                                                                                                                                    \
          </div> \
          <div class='row'>                                        \
            <div class='column_6'>                                \
              <h4> Waffle Canopy </h4>                              \
              <p>Another project from my IDM II course. This was our main introduction to laser cutting and parametric modeling. The basic premise of this project was to design a canopy that fulfilled the dimension requirements for the class. Other than that, the model had to be able to assembled when printed. I chose a very simple canopy design: one without waves and drastic increase or decrease in its width. I was not as skilled with Rhino and Grasshopper as the other students, but that is one of the reasons I liked my design. We also had to create an assembly diagram: if someone were to have the waffle canopy pieces, they would be able to assemble it without our help.   \
              </p>                                                                                 \
            </div>                                                                                 \
            <div class='column_6 img-container'>  \
            <a class='opaque' target='_blank' href='downloads/waffle-canopy.pdf'> \
            <img src='images/idm/waffle-canopy/assembly-top.png' />  \
            </a> \
            </div>                   \
          </div>                                                                                   \                                                                       \
          <div class='row'>                                        \
            <div class='column_6'>                                \
              <h4> Human Robot Interaction </h4>                              \
              <p> This was an exceptional and though provoking course. Every project was team based and recorded onto a team website. Classes were split into lecture / discussions and then work sessions. The lectures were about 'underlying robotic technologies, as they relate to human-robot interaction, interaction methodologies and techniques, study design, ethics and the singularity, and man-machine coupling. Some classes were discussions of application domains that feature HRI. An example of a project we did was researching and designing interactions for automated cars. We had to take into consideration the variables that can occur at an intersection: children, people not paying attention to incoming traffic, visually impaired, etc. Then we brainstormed numerous ways a self-driving vehicle can communicate with pedestrians, and vice versa. In the end we broke our ideas up into three sense categories: audition, sight, and touch. Through our discussions and iterations, we designed an interactive eye around the bottom half of the self-driving vehicle, as well as a vibrating device that would be attached to a stop sign or object near the intersection.    \
              </p>                                                                                 \
            </div>                                                                                 \
            <div class='column_6 img-container'>  \
            <a class='opaque' target='_blank' href='http://www.aderinsola.com/HRI-Assignment01'> \
            <img class='custom-height' src='images/hri/robot-main.png' />  \
            </a> \
            </div>                   \
          </div>                                                                                   \
          \
          <div class='row'>                                        \
            <div class='column_6'>                                \
              <h4> Tea Booklet </h4>                              \
              <p> This was my Communication Design Fundamentals final project. Our assignment was to create a booklet about anything we want. I decided to create a couple spreads about different teas from different areas. Some of the teas were borrowed from my roommate, while the others were given to me by the owners of Margaret's Fine Imports.  \
              </p>                                                                                 \
            </div>                                                                                 \
            <div class='column_6 img-container'>  \
            <a class='opaque' target='_blank' href='downloads/tea-booklet.pdf'> \
            <img class='custom-height' src='images/cdf/tea.jpg' />  \
            </a> \
            </div>                   \
          </div>                                                                                   \
          <!-- #process -->                                                                        \
        </div>                                                                                     \
        <!-- .row.margin-bottom -->                                                                \
      </div>                                                                                       \
    </div>                                                                                         \
                                                                                                   \
    <!-- .row.margin-bottom.container -->                                                          \
  </div>                                                                                           \
  "
}


// images = {
  //  
  //  tea: [ "images/cdf/img1.png", "images/cdf/write1.png", "images/cdf/img2.jpg", "img src='images/cdf/end.jpg" ] 
  //   
  // }
