const GroupListeners = require('../groups/GroupListeners.js')

class AdvancedGroupFilterListener {
    constructor () {
        this.displayBox = document.getElementById('advanced-group-filter')
        this.newConditionButton = document.getElementById('advanced-filter-add-condition-button')
        this.cancelBtn = document.getElementById('advanced-filter-cancel-button')
        this.applyFiltersBtn = document.getElementById('advanced-filter-apply-button')
        this.conditionsList = document.getElementById('advanced-conditions-list')
        this.filterBtn = document.getElementById('open-filter-button')
        this.conditionCount = 0
    }

    assignListeners() {
        // Creates a new list item when the add condition button is clicked
        this.newConditionButton.addEventListener('click', () => this._addCondition())

        // Cancel button closes popup and removes all conditions
        this.cancelBtn.addEventListener('click', () => this._cancelFilters())

        // Apply filters button closes popup but keeps all conditions
        this.applyFiltersBtn.addEventListener('click', () => this._applyFilters())

        // Show advanced filter popup when button is clicked from original filter dropdown menu
        this.filterBtn.addEventListener('click', () => this._showAdvancedGroupFilter())
    }

    // Show the advnaced filter popup
    _showAdvancedGroupFilter() {
        let filter = document.getElementById('advanced-group-filter')
        filter.style.display = 'block'
    }

    // Add a condition to the advanced filter
    // Switcher section div is for the AND/OR switcher before the condition (doesn't show for first condition)
    // Left column contains the AND/OR switcher for the condition itself
    // Right column contains the group selection and remove button
    // Group wrapper contains the dropdown menu, toggle button, active groups, and clear active groups button
    _addCondition() {
        this.conditionsList.insertAdjacentHTML('beforeend', `
            <li id='condition${this.conditionCount}' class='section form__section'>
                <div class='section__inter-section-switcher'>
                    <span class='geo-switcher'>
                        <input type='radio' id='condition${this.conditionCount}-inter-and' name='condition${this.conditionCount}-inter-operator' class='switcher geo-switcher__input' checked></input>
                        <label for='condition${this.conditionCount}-inter-and' class='geo-switcher__label' centeredLabelText onLabelSwitcher'>AND</label>
                        <input type='radio' id='condition${this.conditionCount}-inter-or' name='condition${this.conditionCount}-inter-operator' class='switcher geo-switcher__input'></input>
                        <label for='condition${this.conditionCount}-inter-or' class='geo-switcher__label' centeredLabelText onLabelSwitcher'>OR</label>
                    </span>
                </div>
                <div class='section__main'>
                    <div class='section__col section__col--left'>
                        <label class='section__label'>Operator</label>
                        <div class='section__switcher'>
                            <span class='geo-switcher'>
                                <input type='radio' id='condition${this.conditionCount}-and' name='condition${this.conditionCount}-operator' class='switcher geo-switcher__input' checked></input>
                                <label for='condition${this.conditionCount}-and' class='geo-switcher__label' centeredLabelText onLabelSwitcher'>AND</label>
                                <input type='radio' id='condition${this.conditionCount}-or' name='condition${this.conditionCount}-operator' class='switcher geo-switcher__input'></input>
                                <label for='condition${this.conditionCount}-or' class='geo-switcher__label' centeredLabelText onLabelSwitcher'>OR</label>
                            </span>
                        </div>
                    </div>
                    <div class='section__col section__col--right'>
                        <label class='section__label'>Groups</label>
                        <button id='condition${this.conditionCount}-remove' class='section__remove-button geo-button geo-button--link'>Remove condition</button>
                        <div id='group-wrapper' class='section__groups node-select-container'>
                            <div class='entity-navigator-container node-select-container__control advanced-filter-dropdown-groups'>
                                <div class='geo-secondary-button-with-expand geotab-filter__wrapper node-select-container__control-element node-select-container__control-element--spacing-right'>
                                    <input id='condition${this.conditionCount}-search' class='inputBox geo-secondary-button-with-expand__input geotab-filter__input' type='text' placeholder='Select groups...'></input>
                                    <button id='condition${this.conditionCount}-dropdown-toggle' class='geo-secondary-button-with-expand__expand geotab-filter__expand group-toggle-button'>
                                        <svg class="svgIcon geotabIcons_chevron" style="height: 15px; width: 15px;"></svg>
                                    </button>
                                </div>
                                <div id='condition${this.conditionCount}-group-dropdown'>
                                    <div id='condition${this.conditionCount}-filter-dropdown' class='geotabPrimaryFill'></div>
                                </div>
                            </div>
                            <div class='currentState node-select-container__state'>
                                <div class='stateItem closeCrossStateItem'>
                                    <div id='condition${this.conditionCount}-active-groups' class='stateItem__text'>Active Groups: ALL</div>
                                    <button id='condition${this.conditionCount}-clear-group' class='filterCloseButton'></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        `)
        
        // Remove the condition when the remove button is clicked
        button = document.getElementById(`condition${this.conditionCount}-remove`)
        button.addEventListener('click', (button) => this._handleRemoveCondition(button))

        // Create a new group listener for each condition
        // TODO: Change the state to a local state - combine all the local states with the global state when Appy filters is clicked
        groupListener = new GroupListeners(global.api, global.state, `condition${this.conditionCount}-filter-dropdown`, `condition${this.conditionCount}-group-dropdown`, `condition${this.conditionCount}-search`, `condition${this.conditionCount}-dropdown-toggle`, `condition${this.conditionCount}-clear-group`, `condition${this.conditionCount}-active-groups`);
        groupListener.assignEventListeners();        

        // Increment counter to ensure each condition has a unique name
        this.conditionCount ++
    }

    // Remove condition
    _handleRemoveCondition(button) {
        id = button.srcElement.id
        condition = document.getElementById(id.slice(0, -7))
        condition.remove()
        console.log(button)
    }

    // Remove all conditions and hide popup
    _cancelFilters() {
        this.displayBox.style.display = 'none'
        this.conditionsList.innerHTML = ''
        this.conditionCount = 0
    }

    // Keep conditions and hide popup
    _applyFilters() {
        this.displayBox.style.display = 'none'
    }
}

module.exports = AdvancedGroupFilterListener