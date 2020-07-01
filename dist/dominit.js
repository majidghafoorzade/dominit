"use strict";


class Dominit{

    constructor(appSelector, domObject){
        this.appSelector = appSelector;
        this.domObject = domObject;
    }

    //method to create and appent element
    createAndAppend(element, attrs, innerText, events, parentNode){

        //create element
        var createdElement = document.createElement(element);

        //add attributes
        if(attrs){
            for (var key of Object.keys(attrs)) {
                createdElement.setAttribute(key, attrs[key]);
            }
        }

        //add inner text
        if(innerText){
            createdElement.textContent = innerText;
        }

        //append to parent element
        if(parentNode){
            parentNode.appendChild(createdElement);
        }

        //add events to element
        if(events){
            for (var eventName of Object.keys(events)) {
                createdElement.addEventListener(eventName, events[eventName]);
            }
        }


        //return created element
        return createdElement;
        
    }



    //method to create childrens
    createChildrens(element, parentNode){
        element.children.forEach((childElement) => {
            const craetedChild = this.createAndAppend(childElement.el, childElement.attrs, childElement.text, childElement.events, parentNode);
            if(childElement.children){
                this.createChildrens(childElement, craetedChild);
            }
        });
    }


    render(){
        const App = this.appSelector;
        const domObject = this.domObject;
        var AppContainer = this.createAndAppend(domObject.el, domObject.attrs, domObject.text, domObject.events, App);
        this.createChildrens(domObject, AppContainer);
    }
}