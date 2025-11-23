import './App.css';

import Section from './Components/section.js'
import Card from './Components/card.js'

import {Advice,General,Brutal,Educational,Motivational,Technique,TimeManagement,Mental,Resource} from './Components/tag.js'

function App() {
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      <div id="Navbar">
        <h1 id="NavbarHeader">How Study</h1>
        <h1 id="NavbarGithub">github.com/asimno</h1>
      </div>
      <div id="Main">
        <Section header="Advice"
        content={
            <>
              <Card
                header="Take a break"
                tags={<><Advice/><Mental/></>}
                description="Consider, are you burnt out? If you think so, the absolute best method to dealing with burnout is to simply take a break. Dedicate some time for yourself, where you don't have to worry about anything and can just relax and do stuff you enjoy. It might be hard to find that time when things get especially busy, but please remind yourself that your mental and physical health is far more important than whatever needs to be done and plays a huge part in how well you can work."
                links={<><p>Are you burnt out: https://www.nuffieldhealth.com/article/what-is-burnout-signs-symptoms-and-coping-strategies</p><p>Make the most of your break: https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/tips-to-reduce-stress/</p></>}
              />
            </>
          }
        />
        <Section header="Techniques"
        content={
            <>
              <Card
                header="Pomodoro Technique"
                tags={<><Technique/><Resource/><TimeManagement/></>}
                description="Divide study sessions into numerous 25 minute focus periods with a 5 minute break period (25-5), taking a 30 minute break after 5 sessions. If that doesn't suit you try out other Pomodoro styles such as (50-10) or (90-30)."
                links={<><p>Useful Pomodoro Website: https://pomofocus.io/</p></>}
              />
              <Card
                header="'Do it for 5 minutes'"
                tags={<><Technique/><Motivational/></>}
                description="Sit down and do that thing you need to do for 5 minutes, then take a break. Easy, right? 9 times out of 10 you won't mind continuing for longer as 5 minutes is enough time to enter a 'focus state'. Combine this with the Pomodoro technique and ease into it with progessively longer focus periods."
                links={<></>}
              />
            </>
          }
        />
        <Section header="Resources"
        content={
            <>
              <Card
                header="Knowt"
                tags={<><Resource/><Educational/></>}
                description="Really great, free alternative to Quizlet. Has flashcards, lessons, practice tests, and minigames where you can learn your desired topic."
                links={<><p>Link to Knowt: https://knowt.com</p></>}
              />
            </>
          }
        />
      </div>
      <div id="Footer">
        <p class="NavbarText">Keep in mind, different advice will work for different people at different times! Many of these may be of use to you, or none may be of use to you. I encourage you to check in every now and then whenever you're struggling to study and experiment with what works in the moment.</p>
        <p class="NavbarText">Future Features:</p>
          <ul class="NavbarText">
            <p>Filter by Tags</p>
            <p>Filter by Specific Problems</p>
          </ul>
        <p class="NavbarText">Made by github.com/asimno in a couple hours, will update this whenever I can</p>
      </div>
    </div>
  );
}

//Bunch of cards, can be reused

export default App;
