class AdvancedGroupFilterListener {
    constructor () {
        this.displayBox = document.getElementById('advanced-group-filter')
        this.newConditionButton = document.getElementById('advanced-filter-add-condition-button')
        this.cancelBtn = document.getElementById('advanced-filter-cancel-button')
        this.applyFiltersBtn = document.getElementById('advanced-filter-apply-button')
        this.conditionsList = document.getElementById('advanced-conditions-list')
        this.conditionCount = 0
        this.conditions = {}
    }

    assignListeners() {
        this.newConditionButton.addEventListener('click', () => this._addCondition())
        this.cancelBtn.addEventListener('click', () => this._cancelFilters())
        this.applyFiltersBtn.addEventListener('click', () => this._applyFilters())
    }

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
                        <div class='section__groups node-select-container'>
                            <div class='entity-navigator-container node-select-container__control'>
                                <div class='geo-secondary-button-with-expand geotab-filter__wrapper node-select-container__control-element node-select-container__control-element--spacing-right'>
                                    <input id='condition${this.conditionCount}-search' class='inputBox geo-secondary-button-with-expand__input geotab-filter__input' type='text' placeholder='Select groups...'></input>
                                    <button id='condition${this.conditionCount}-dropdown-toggle' class='geo-secondary-button-with-expand__expand geotab-filter__expand'></button>                                    
                                </div>
                                <button id='condition${this.conditionCount}-clear' class='node-select-container__control-element node-select-container__control-element--spacing-left geo-button'>Clear selection</button>
                            </div>
                            <div class='currentState node-select-container__state'>
                                <div class='stateItem closeCrossStateItem>
                                    <span class='stateItem__text'>Company group</span>
                                    <button id='condition${this.conditionCount}-clear-groups' class='filterCloseButton'></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        `)
        button = document.getElementById(`condition${this.conditionCount}-remove`)
        button.addEventListener('click', (button) => this._handleRemoveCondition(button))
        this.conditionCount ++
    }

    _handleRemoveCondition(button) {
        id = button.srcElement.id
        condition = document.getElementById(id.slice(0, -7))
        condition.remove()
        console.log(button)
    }

    _cancelFilters() {
        this.displayBox.style.display = 'none'
        this.conditionsList.innerHTML = ''
        this.conditionCount = 0
        this.conditions = {}
    }

    _applyFilters() {
        this.displayBox.style.display = 'none'
    }
}

module.exports = AdvancedGroupFilterListener