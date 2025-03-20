export class MainPage {
    elements = {
        challengesDropDownmenu: () => cy.get('.navbarDropdownMenuLink'), 
        solvechallengesTxt: () => cy.contains('Solve Challenges'),
        createchallengeTxt: () => cy.contains('Create Challenge'),
        mychallengesTxt: () => cy.contains('My Challenges'),
    };

    navigatetoCreateChallenge() {
        this.elements.createchallengeTxt().invoke('attr','href').then((createchallengeUrl) => {
            cy.visit(createchallengeUrl)
        })
    }

    navigatetoMyChallenges()    {
        this.elements.mychallengesTxt().invoke('attr','href').then((mychallengesUrl) => {
            cy.visit(mychallengesUrl)
        })
    }

    logout() {
        cy.visit('/user/logout', {timeout: 20000})
    }

    
}