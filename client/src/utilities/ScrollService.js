import { TOTAL_SCREENS } from './commonUtils';
import { Subject } from 'rxjs';


export default class ScrollService {
    static scrollHandler = new ScrollService();

    static currentScreenBroadCaster = new Subject();
    static currentScreenFadeIn = new Subject();


    constructor() {
        window.addEventListener('scroll', this.checkCurrentScreenUnderViewport)
    }
    scrollToHireMe = () => {
        let ccontactMeScreen = document.getElementById("Contact Me");
        if (!ccontactMeScreen) return;
        ccontactMeScreen.scrollIntoView({ behavior: "smooth" })
    }
    scrollToHome = () => {
        let homeScreen = document.getElementById("Home");
        if (!homeScreen) return;
        homeScreen.scrollIntoView({ behavior: "smooth" })
    }
    isElementInView = (elem, type) => {
        let rec = elem.getBoundingClientRect();
        let elementTop = rec.top;
        let elementBottom = rec.bottom;

        let partiallyVisisble = elementTop < window.innerHeight && elementBottom >= 0;
        let completelyVisible = elementTop >= 0 && elementBottom <= window.innerHeight;

        switch (type) {
            case "partial":
                return partiallyVisisble;

            case "complete":
            default:
                return false
        }

    }
    checkCurrentScreenUnderViewport = (event) => {
        if (!event || Object.keys(event).length < 1)
            return;
        for (let screen of TOTAL_SCREENS) {
            let screenFromDOM = document.getElementById(screen.screen_name)
            if (!screenFromDOM)
                continue;

            let fullyVisible = this.isElementInView(screenFromDOM, "complete");
            let partiallyVisisble = this.isElementInView(screenFromDOM, "partial");


            if (fullyVisible || partiallyVisisble) {
                if (partiallyVisisble && !screen.alreadyRendered) {
                    ScrollService.currentScreenFadeIn.next({
                        fadeInScreen: screen.screen_name
                    })
                    screen['aleadyRendered'] = true;
                    break;
                }
                if (fullyVisible) {
                    ScrollService.currentScreenBroadCaster.next({
                        screenInView: screen.screen_name
                    });
                    break;
                }
            }
        }
    }

}