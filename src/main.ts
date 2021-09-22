import './style.scss'
import { Story } from 'inkjs';
import storyJson from '../data/PourDormir.ink.json';

launch();

function launch(){

  const app = document.querySelector<HTMLDivElement>('#app')!

  const story = new Story(storyJson);

  app.innerHTML = `
  <div class="outerContainer">
        <div id="story" class="container">
            <div class="header">
                <h1>Une histoire pour dormir</h1>
                <h2 class="byline">par Barnabé et son papa</h2>
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

function restart(app: HTMLDivElement, story: InstanceType<typeof Story>): void {
  story.ResetState();
  continueStory(app, story);
}

function continueStory(app: HTMLDivElement, story: InstanceType<typeof Story>): void {
	var outerScrollContainer = app.querySelector<HTMLDivElement>('.outerContainer')!;
	var storyContainer = app.querySelector<HTMLDivElement>('#story')!;

	let delay = 0.0;

	var olderParagraphs = app.querySelectorAll<HTMLElement>('p');

  while(story.canContinue) {
    const paragraphText = story.Continue();
    const tags = story.currentTags;
    let customClasses: string[] = [];

    let stopContinue = false;

    if(tags){
      tags.forEach((tagstring: string) => {
        const [tag, value] = tagstring.split(":", 2).map(s => s.trim())

        if( tag == "CLEAR" || tag == "RESTART" ) {
            storyContainer.innerHTML = "";

            if( tag == "RESTART" ) {
                stopContinue = true;;
                restart(app, story);
            }
        }

        if( tag == "CLASS" ) {
            customClasses.push(value);
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
                                continueStory(app, story);

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

  olderParagraphs.forEach(p => {
  	p.classList.add("faded");
  })

}