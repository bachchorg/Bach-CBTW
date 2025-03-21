import {MainPage} from './mainPage';
const mainPage = new MainPage()
export class CreateChallenge {
    elements = {
        eventDropDown: () => cy.get('#event_id'),
        titleInput: () => cy.get('#title'),
        flagInput: () => cy.get('#flag'),
        descriptionInput: () => cy.get('#flask-pagedown-description'),
        attachedfileButton: () => cy.get('#file-upload'),
        categoryDropDown: () => cy.get('#category'),
        pointsDropDown: () => cy.get('#points'),
        submitButton: () => cy.get("button[type='submit']"),
        hdwsthisInput: () => cy.get('#howtosolve')
    };

    selectEvent(event) {
        this.elements.eventDropDown().select(event)
    }

    enterTitle(title) {
        this.elements.titleInput().clear()
        this.elements.titleInput().type(title)
    }

    enterFlag(flag) {
        this.elements.flagInput().clear()
        this.elements.flagInput().type(flag)
    }

    enterDescription(description) {
        this.elements.descriptionInput().clear()
        this.elements.descriptionInput().type(description)
    }

    attachFile(file) {
        this.elements.attachedfileButton().attachFile(file)
    }

    selectCategory(category) {
        this.elements.categoryDropDown().select(category)
    }

    selectPoints(points) {
        this.elements.pointsDropDown().select(points)
    }

    clickSubmit() {
        this.elements.submitButton().click()
    }

    enterHdwsthis(hdwsthis) {
        this.elements.hdwsthisInput().clear()
        this.elements.hdwsthisInput().type(hdwsthis)
    }

    inputForm(event, title, flag, description, file, category, points, hdwsthis) {
        mainPage.navigatetoCreateChallenge();
        this.selectEvent(event);
        this.enterTitle(title);
        this.enterFlag(flag);
        this.enterDescription(description);
        this.attachFile(file);
        this.selectCategory(category);
        this.selectPoints(points);
        this.enterHdwsthis(hdwsthis)
        this.clickSubmit();
        mainPage.navigatetoMyChallenges();
    }

    }