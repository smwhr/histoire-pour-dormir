import './style.scss'
import { Story } from 'inkjs';
import storyJson from '../data/PourDormir.ink.json';

launch();

function launch(){

  const app = document.querySelector<HTMLDivElement>('#app')!

  const faSignOut = `<svg viewBox="0 0 512 512"><path d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z" fill="#2c3e50"></path></svg>`;

  const story = new Story(storyJson);

  app.innerHTML = `
  <div class="outerContainer">
        <div id="story" class="container">
            <div class="header">
                <h1>Une histoire pour dormir</h1>
                <h2 class="byline">par smwhr et Barnabé</h2>
            </div>
        </div>
    </div>
  `
  story.onError = (message, type) => {
    console.log(type, message)
  }
  continueStory(app, story);

}

function showAfter(delay: number, el: HTMLElement){
        el.classList.add("hide");
        setTimeout(function() { el.classList.remove("hide") }, delay);
}

function continueStory(app: HTMLDivElement, story: InstanceType<typeof Story>, medias: Medias): void {
	var outerScrollContainer = app.querySelector<HTMLDivElement>('.outerContainer')!;
	var storyContainer = app.querySelector<HTMLDivElement>('#story')!;

	let delay = 0.0;

  while(story.canContinue) {
    const paragraphText = story.Continue();
    const tags = story.currentTags;
    let customClasses: string[] = [];

    let stopContinue = false;

    if(tags){
      tags.forEach((tagstring: string) => {
        const [tag, value] = tagstring.split(":", 2).map(s => s.trim())
        if(tag == "PICTURE"){
          if(isMediaName(value)){
            switchImage(medias[value])
          } 
        }

        if(tag == "LOCATION"){
          locationContainer.innerHTML = `${value}`
        }

        if( tag == "CLEAR" || tag == "RESTART" ) {
            storyContainer.innerHTML = "";

            if( tag == "RESTART" ) {
                locationContainer.innerHTML = `Inkjam 2021`
                stopContinue = true;;
                restart(app, story, medias);
                
            }
        }

        if( splitTag && splitTag.property == "CLASS" ) {
            customClasses.push(val);
        }

      })
    }
    if(stopContinue) return;

    if(paragraphText){
      var paragraphElement = document.createElement('p');
          paragraphElement.innerHTML = paragraphText;
          customClasses.map( c => paragraphElement.classList.add(c));
          storyContainer.appendChild(paragraphElement);

          showAfter(delay, paragraphElement);
          delay += 200.0;
    }

    story.currentChoices.forEach(function(choice) {

          const choiceText = choice.text;

          const choiceHandler = (event: Event) => {
                                event.preventDefault();
                                if (!(event.target instanceof HTMLElement)) {
                                  return;
                                }
                                let index = parseInt(event.target.dataset["choiceIndex"] ?? "8");
                                story.ChooseChoiceIndex(index);
                                storyContainer.querySelectorAll<HTMLDivElement>('.choice').forEach(elt => elt.remove())
                                continueStory(app, story, medias);

                                outerScrollContainer.scrollTo(0,storyContainer.scrollHeight);
                            }


          var choiceParagraphElement = document.createElement('p');
          choiceParagraphElement.classList.add("choice");
          choiceParagraphElement.innerHTML = `<a href='#' data-choice-index='${choice.index}'>${choiceText}</a>`
          storyContainer.appendChild(choiceParagraphElement);  
          choiceParagraphElement.querySelectorAll("a")
                    .forEach( a => {
                          a.addEventListener("click", choiceHandler)
                    })
          showAfter(delay, choiceParagraphElement);
          delay += 200.0;

    });

  }

}