class ToggleHandler{
    /**
     * Toggles the development addin
     * allows user to see any processes that take place when the addin is blurred/focused
     */
    constructor(){
        this.focus = true;
        let displayToggle = document.getElementById('toggleBtn');
        let centerPane = document.querySelector('#demo')
        displayToggle.addEventListener('click', () => {
            if(this.focus){
                displayToggle.innerHTML = 'Focus add-in';
                centerPane.className = " centerPane"
                global.geotab.addin.demo.blur();
            } else {
                displayToggle.innerHTML = 'Blur add-in';
                centerPane.className += " hidden"
                global.geotab.addin.demo.focus(global.api, global.state);
            }
            this.focus = !this.focus;
        });
    }

}

new ToggleHandler();